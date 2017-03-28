import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public base64Image: string;
  public images: string[] = [];
  public page1: any;
  public cards: string[] = [];
  public photoSelected: boolean;
  public photoTaken: boolean;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera) {
      this.photoTaken = false;
  }

  takePicture() {
    var options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
      this.cards.push(this.base64Image);
    }, (err) => {
      console.log(err);
    });
  }
}

