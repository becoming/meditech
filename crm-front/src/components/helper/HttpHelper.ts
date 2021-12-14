// @flow

import {Observable, ReplaySubject} from "rxjs";
import {Subscriber} from "rxjs";

const CONTENT_TYPE = "Content-Type";
const AUTHORIZATION = "Authorization";
const APPLICATION_JSON = "application/json";
const TEXT_PLAIN = "text/plain";
const HTTP_DELETE = "DELETE";
const HTTP_GET = "GET";
const HTTP_POST = "POST";
const HTTP_PUT = "PUT";

class HttpHelper {

    timeout: number = 100;
    useAuth: boolean = true;

    constructor(useAuth = true) {
        this.useAuth = useAuth;
    }

    delete<T>(url: string | string []): ReplaySubject<T> {
        return this.doFetch<T>(this.createDefaultRequest(url, HTTP_DELETE))
    }

    post<T>(body: any, url: string | string []): ReplaySubject<T> {
        return this.doFetch(this.createDefaultRequest(url, HTTP_POST, body))
    }

    get<T>(url: string | string []): ReplaySubject<T> {
        return this.doFetch(this.createDefaultRequest(url, HTTP_GET))
    }

    getText(url: string | string []): ReplaySubject<string> {
        return this.doFetch(this.createDefaultRequest(url, HTTP_GET, null, TEXT_PLAIN))
    }

    private createDefaultRequest(urlParts: string | string [], method: string, body: any = null, contentType: string = APPLICATION_JSON): Request {
        let h: Headers = new Headers();
        if(this.useAuth) {
            h.append(AUTHORIZATION, "Basic " + btoa("admin:password"));
        }

        h.append("Accept", contentType);
        h.append(CONTENT_TYPE, contentType);

        // RequestInit
        let options: RequestInit = {
            method: method,
            headers: h,
            mode: 'cors',
            cache: 'default'
        };

        if(body) {
            options.body = JSON.stringify(body);
        }

        let url: string;

        if(Array.isArray(urlParts)) {
            url = urlParts.join("/");
        } else {
            url = urlParts
        }

        return new Request(url, options);
    }

    private doFetch<T>(request: Request): ReplaySubject<T> {
        let observable = new Observable((observer: Subscriber<T>) => {
            fetch(request)
                .then((response) => {
                    if(request.headers.get(CONTENT_TYPE) === APPLICATION_JSON) {
                        response.json().then((data) => {
                            this.handleResponse(request, response, observer, data)
                        })
                    } else {
                        this.handleResponse(request, response, observer, response.body)
                    }
                })
                .catch((e) => {
                    // console.error(e.message, request.url);
                    observer.error(e)
                });
        });

        let replaySubject = new ReplaySubject<T>(1)
        observable.subscribe(replaySubject)

        return replaySubject
    }

    // noinspection JSMethodCanBeStatic
    private handleResponse<T>(request: Request, response: Response, observer: Subscriber<T>, value: any) {
        if (response.ok) {
            observer.next(value);
            observer.complete();
            console.debug(value, response.status, request.url);
        } else {
            console.error(value, response.status, request.url);
            observer.error(value)
        }
    }

}

export const httpHelper: HttpHelper = new HttpHelper();
export const httpHelperNoAuth: HttpHelper = new HttpHelper(false);
