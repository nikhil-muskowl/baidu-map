import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaiduProvider {

  public responseData: any;
  private URL;

  constructor(public http: HttpClient) {

  }

  location(data: any) {
    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    headers.set("Access-Control-Allow-Methods", "GET, PUT, POST");

    this.URL = 'http://api.map.baidu.com/place/v2/search?query=' + data.query + '&location=39.915,116.404&output=json&ak=j7eig5KpXzk4YsWNwpagmybjL2WRGCZC';
    return this.http.get(this.URL,
      {
        headers
      }
    );
  }

}
