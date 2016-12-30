/**
 * Created by Bart on 26/12/2016.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Contract {
    public Localhost: string = "http://localhost:3000/";
    public Server: string = "https://cleansing-api.herokuapp.com/";
    public ApiUrl: string = "api/";
    public Hostname:String = location.protocol+'//'+location.hostname+(location.port ? ':' + (location.port === '4200' ? "3000" : location.port) : '');
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public LocalhostWithApiUrl = this.Localhost + this.ApiUrl;
    public AutoWithApiUrl = this.Hostname + "/" + this.ApiUrl;
}