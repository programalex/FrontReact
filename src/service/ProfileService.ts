import { HttpClient } from "./HttpClient";

export class ProfileService {
    private API_Endpoint;
    private API_Microsoft_Photo;
    constructor(private http: HttpClient) {  this.API_Endpoint=process.env.REACT_APP_API_DEVICE_MANAGEMENT;
    this.API_Microsoft_Photo= "https://graph.microsoft.com/v1.0/me/photo/$value"}

    async getGraphToken(accessToken: string) {
        var res = await this.http.get(`${this.API_Endpoint}/User/GetGraphToken`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })

        return res.text();
    }

    async getProfilePhoto(graphToken: string) {
        var res =  this.http.get(this.API_Microsoft_Photo, {
            headers: { 'Authorization': `Bearer ${graphToken}` }
        });
        return (await res).blob();
    }

}