import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public images: string[] = [];
  public cards: string[] = [];

  @ViewChild('video') video:ElementRef;
  @ViewChild('canvas') canvas:ElementRef;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  openCamera() {

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then( stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }

  takePicture() {
    // Elements for taking the snapshot
    let context = this.canvas.nativeElement.getContext('2d');
    context.drawImage(<HTMLVideoElement>this.video.nativeElement, 0, 0, 640, 480);
    
  }

}

