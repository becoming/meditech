class HttpParams {

    // 'http://localhost:7373/api/v1/patients'
    private scheme = process.env.REACT_APP_BACKEND_SCHEME || "http";
    private host = process.env.REACT_APP_BACKEND_HOST || "localhost";
    private port = process.env.REACT_APP_BACKEND_PORT || "7373";
    private prefix = process.env.REACT_APP_BACKEND_API_PREFIX || "";

    readonly url;

    private _authHeader: string = "Basic " + btoa("admin:password");

    constructor() {
        this.url = this.scheme.concat("://")
          .concat(this.host).concat(":").concat(this.port)
          .concat(this.prefix)
    }

    public get authHeader(): string {
        return this._authHeader;
    }

}
export const httpParams: HttpParams = new HttpParams();
