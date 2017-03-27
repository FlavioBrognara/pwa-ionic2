import { CameraMock } from './../../app/app.module';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraTestePage } from '../camera-teste/camera-teste';

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
      this.page1 = CameraTestePage;
    }

 takePicture(){
    CameraMock.getPicture({
        destinationType: CameraMock.DestinationType.DATA_URL,
        sourceType: CameraMock.PictureSourceType.CAMERA,
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

