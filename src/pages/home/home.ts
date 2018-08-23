import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { BaiduProvider } from '../../providers/baidu/baidu';
import { ControlAnchor, MapOptions, NavigationControlOptions, NavigationControlType, Point, MapTypeEnum, MarkerOptions } from 'angular2-baidu-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public locations: any;
  public fileterData: any;
  public responseData: any;
  public search = '餐馆';
  public latitude: number = 0;
  public longitude: number = 0;
  public data: any;

  options: MapOptions;
  point: Point;
  navOptions: NavigationControlOptions;
  public markers: Array<{ point: Point; options?: MarkerOptions }>;

  constructor(
    public navCtrl: NavController,
    public locationTrackerProvider: LocationTrackerProvider,
    public baiduProvider: BaiduProvider
  ) {
    this.bindMap();

  }

  public bindMap() {
    this.options = {
      centerAndZoom: {
        lat: this.latitude,
        lng: this.longitude,
        zoom: 16
      },
      enableKeyboard: true,
      mapType: MapTypeEnum.BMAP_NORMAL_MAP
    };

    this.markers = [
      {
        options: {
          // enableDragging: true,
          icon: {
            imageUrl: '/assets/marker.png',
            size: {
              height: 50,
              width: 50
            },
            imageSize: {
              height: 50,
              width: 50
            }
          }
        },
        point: {
          lat: this.latitude,
          lng: this.longitude
        }
      }
    ];

    // this.locationTrackerProvider.getPosition().then((data) => {
    //   if (data) {
    //     console.log(data.coords);
    //     this.latitude = data.coords.latitude;
    //     this.longitude = data.coords.longitude;

    //     this.options = {
    //       centerAndZoom: {
    //         lat: this.latitude,
    //         lng: this.longitude,
    //         zoom: 16
    //       },
    //       enableKeyboard: true,
    //       mapType: MapTypeEnum.BMAP_NORMAL_MAP
    //     };

    //     this.markers = [
    //       {
    //         options: {
    //           // enableDragging: true,
    //           icon: {
    //             imageUrl: '/assets/marker.png',
    //             size: {
    //               height: 50,
    //               width: 50
    //             },
    //             imageSize: {
    //               height: 50,
    //               width: 50
    //             }
    //           }
    //         },
    //         point: {
    //           lat: this.latitude,
    //           lng: this.longitude
    //         }
    //       }
    //     ];

    //   }
    // }).catch(e => {
    //   console.log(e);
    // });;

    this.navOptions = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    };

  }

  public onInput(ev: any) {
    this.search = ev.target.value;
    this.locations=[];
    this.getLocation();
  }

  public onCancel(ev: any) {
    this.search = '';
  }

  public getLocation() {
    this.fileterData = {
      query: this.search,
      location: `${this.latitude},${this.longitude}`
    };

    this.baiduProvider.location(this.fileterData).subscribe(
      response => {
        console.log(response);
        this.responseData = response;
        this.locations = this.responseData.results;
      },
      err => { console.error(err); }
    );
    console.log(this.locations);
  }

  public itemSelected(location: any) {
    console.log(location.location);
    if (location) {
      this.latitude = location.location.lat;
      this.longitude = location.location.lng;
    }

    console.log(this.latitude);
    console.log(this.longitude);

    this.bindMap();

    this.locations=[];
  }

  public showWindow({ e, marker, map }: any): void {
    console.log(e);
    map.openInfoWindow(
      new window.BMap.InfoWindow('Your Position', {
        offset: new window.BMap.Size(0, -30),
        title: 'Title'
      }),
      marker.getPosition()
    )
  }

  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(marker: any) {
    console.log('The clicked marker is', marker);
  }

  clickmap(e: any) {
    // this.latitude = e.point.lat;
    // this.longitude = e.point.lng;
    console.log(`Map clicked with coordinate: ${e.point.lng}, ${e.point.lat}`);
  }

}
