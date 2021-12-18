class HttpParams {

    // 'http://localhost:7373/api/v1/patients'
    private scheme = process.env.REACT_APP_BACKEND_SCHEME;
    private host = process.env.REACT_APP_BACKEND_HOST;
    private port = process.env.REACT_APP_BACKEND_PORT;

    // noinspection TypeScriptFieldCanBeMadeReadonly
    private _url = "http://localhost:7373";

    private _authHeader: string = "Basic " + btoa("admin:password");

    constructor() {
        if (this.scheme && this.host && this.port) {
            this._url = this.scheme.concat("://").concat(this.host).concat(":").concat(this.port)
        }
    }

    public get url(): string {
        return this._url;
    }

    public get authHeader(): string {
        return this._authHeader;
    }

}
export const httpParams: HttpParams = new HttpParams();
