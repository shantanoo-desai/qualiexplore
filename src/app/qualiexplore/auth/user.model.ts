export class User {
    constructor (
        public username: string,
        private _accessToken: string,
        private _accessTokenExpiration: Date,
    ) {}

    get token() {
        if(!this._accessTokenExpiration || new Date() > this._accessTokenExpiration) {
            return null;
        }
        return this._accessToken;
    }
}