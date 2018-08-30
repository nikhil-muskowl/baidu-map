import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlAnchor, TextIconStyle, BMarkerClusterer, Marker, MarkerClustererOptions, MapOptions, NavigationControlOptions, NavigationControlType, Point, MapTypeEnum, MarkerOptions } from 'angular2-baidu-map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public opts: MapOptions
  public clustererOptions: MarkerClustererOptions;

  constructor(public navCtrl: NavController) {
    this.opts = {
      centerAndZoom: {
        lat: 24.571,
        lng: 73.691,
        zoom: 15
      },
      enableKeyboard: true,
      mapType: MapTypeEnum.BMAP_NORMAL_MAP
    }

    const styles: Array<TextIconStyle> = [];
    
    this.clustererOptions = {
      markers: this.getRandomMarkers(),
      styles
    }
  }

  private getRandomMarkers() {
    const markers: Array<Marker> = []

    markers.push({
      point: {
        lat: 24.576,
        lng: 73.692,
      }
    });
    markers.push({
      point: {
        lat: 24.579,
        lng: 73.689,
      }
    });
    markers.push({
      point: {
        lat: 24.578,
        lng: 73.691,
      }
    });
    markers.push({
      point: {
        lat: 24.577,
        lng: 73.686,
      }
    });
    markers.push({
      point: {
        lat: 24.577,
        lng: 73.684,
      }
    });
    markers.push({
      point: {
        lat: 24.575,
        lng: 73.685,
      }
    });


    return markers
  }

  public markerClustererLoaded(clusterer: BMarkerClusterer): void {
    console.log('clusterer loaded', clusterer)
  }

}
