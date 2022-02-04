// @flow

import {Observable, ReplaySubject, Subscriber} from "rxjs";
import {httpParams} from "./HttpParams";
import {
  ACCEPT,
  APPLICATION_JSON,
  AUTHORIZATION,
  CONTENT_TYPE,
  HTTP_DELETE,
  HTTP_GET,
  HTTP_POST,
  HTTP_PUT,
  TEXT_PLAIN
} from "./HttpConst";

class HttpHelper {

  private readonly useAuth: boolean = true;

  constructor(useAuth = true) {
    this.useAuth = useAuth;
  }

  delete<T>(uri: string | string []): ReplaySubject<T> {
    return this.doFetch<T>(this.createDefaultRequest(uri, HTTP_DELETE))
  }

  post<T>(body: any, url: string | string []): ReplaySubject<T> {
    return this.doFetch(this.createDefaultRequest(url, HTTP_POST, body))
  }

  put<T>(body: any, url: string | string []): ReplaySubject<T> {
    return this.doFetch(this.createDefaultRequest(url, HTTP_PUT, body))
  }

  get<T>(uri: string | string []): ReplaySubject<T> {
    return this.doFetch(this.createDefaultRequest(uri, HTTP_GET))
  }

  getText(uri: string | string []): ReplaySubject<string> {
    return this.doFetch(this.createDefaultRequest(uri, HTTP_GET, null, TEXT_PLAIN))
  }

  private createDefaultRequest(uriParts: string | string [],
                               method: string,
                               body: any = null,
                               contentType: string = APPLICATION_JSON): Request {

    console.debug("Initiating request >")

    let options: RequestInit = {
      method: method,
      headers: this.buildHeaders(contentType),
      mode: 'cors',
      cache: 'default'
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    let url = this.buildUrl(uriParts, method)

    return new Request(url, options);
  }

  private buildHeaders(contentType: string) {
    let h: Headers = new Headers();

    if (this.useAuth) {
      h.append(AUTHORIZATION, httpParams.authHeader);
    }

    h.append(ACCEPT, contentType);
    h.append(CONTENT_TYPE, contentType);

    console.debug(h)

    return h;
  }

// noinspection JSMethodCanBeStatic
  private buildUrl(uriParts: string | string[], method: string) {
    let uri: string;

    if (Array.isArray(uriParts)) {
      uri = uriParts.join("/");
    } else {
      uri = uriParts
    }

    while (uri.indexOf("//") > -1) {
      uri = uri.replace("//", "/")
    }

    uri = uri.replace(":/", "://")

    console.debug(method.concat(" ").concat(httpParams.url).concat(uri))

    // noinspection HttpUrlsUsage
    if (uri.startsWith("http://") || uri.startsWith("https://")) {
      return uri
    }

    return httpParams.url.concat(uri);
  }

  private doFetch<T>(request: Request): ReplaySubject<T> {
    let observable = new Observable((observer: Subscriber<T>) => {
      fetch(request)
        .then((response) => {
          if (request.headers.get(CONTENT_TYPE) === APPLICATION_JSON) {
            response.json().then((data) => {
              this.handleResponse(request, response, observer, data)
            })
          } else {
            this.handleResponse(request, response, observer, response.body)
          }
        })
        .catch((e) => {
          this.handleError(e, null, request, observer);
        });
    });

    let replaySubject = new ReplaySubject<T>(1)
    observable.subscribe(replaySubject)

    return replaySubject
  }

  // noinspection JSMethodCanBeStatic
  private handleResponse<T>(request: Request, response: Response, observer: Subscriber<T>, value: any) {
    if (response.ok) {
      this.handleOk(observer, value, response, request);
    } else {
      this.handleError(value, response, request, observer);
    }
  }

  // noinspection JSMethodCanBeStatic
  private handleOk<T>(observer: Subscriber<T>, value: any, response: Response, request: Request) {
    observer.next(value);
    observer.complete();
    console.debug(value, response.status, request.url);
    console.debug("Response OK");
  }

  // noinspection JSMethodCanBeStatic
  private handleError<T>(value: any, response: Response | null, request: Request, observer: Subscriber<T>) {
    if (response) {
      console.error(value, response.status, request.url);
    }
    else {
      console.error(value, request.url);
    }

    console.debug("Response NOK");

    observer.error(value)
  }
}

export const httpHelper: HttpHelper = new HttpHelper();
export const httpHelperNoAuth: HttpHelper = new HttpHelper(false);
