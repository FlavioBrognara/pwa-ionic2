import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-camera-teste',
  templateUrl: 'camera-teste.html'
})
export class CameraTestePage {
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){}

 takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 150,
        targetHeight: 150
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
