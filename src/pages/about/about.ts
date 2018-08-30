import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlAnchor, MapOptions, NavigationControlOptions, NavigationControlType, Point, MapTypeEnum, MarkerOptions } from 'angular2-baidu-map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  options: MapOptions;
  point: Point;
  navOptions: NavigationControlOptions;
  public markers: Array<{ point: Point; options?: MarkerOptions }>;

  
  constructor(public navCtrl: NavController) {

  }

}
