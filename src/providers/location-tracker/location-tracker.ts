import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationTrackerProvider {

  public watch: any;

  constructor(public zone: NgZone, public geolocation: Geolocation) {
  }

  getPosition(): Promise<any> {
    return new Promise((resolve) => {
      let options = {
        frequency: 3000,
        enableHighAccuracy: true
      };

      this.watch = this.geolocation.watchPosition(options);

      this.watch.subscribe((position) => {       
        resolve(position);
      });

    });
  }

}
