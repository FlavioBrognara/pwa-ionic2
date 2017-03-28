import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-camera-teste',
  templateUrl: 'camera-teste.html'
})
export class CameraTestePage {
  public base64Image: string;
  public permission: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){}
    
}

