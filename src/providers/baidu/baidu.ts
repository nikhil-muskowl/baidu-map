import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaiduProvider {

  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public responseData: any;
  private URL;

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  location(data: any) {
    this.formData = new FormData();
    // this.URL ='http://api.map.baidu.com/place/v2/search?query=餐馆&location=39.915,116.404&output=json&ak=j7eig5KpXzk4YsWNwpagmybjL2WRGCZC';
    this.URL = 'http://api.map.baidu.com/place/v2/search?query=' + data.query + '&location=39.915,116.404&output=json&ak=j7eig5KpXzk4YsWNwpagmybjL2WRGCZC';

    return this.http.get(this.URL,
      {
        headers: this.headers,
      }
    );
  }

}
