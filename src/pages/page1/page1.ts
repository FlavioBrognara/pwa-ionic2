import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public base64Image: string;
  public images: string[] = [];
  public page1: any;
  public cards: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){
    }

 takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        quality: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.cards.push(this.base64Image);
        console.log(this.images);

        
    }, (err) => {
        console.log(err);
    });
  }
}

