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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){}

 takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 200,
        targetHeight: 200
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.images.push(this.base64Image);
        console.log(this.images);
    }, (err) => {
        console.log(err);
    });
  }
}

