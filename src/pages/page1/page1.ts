import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public images: string[] = [];
  public cards: string[] = [];



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  openCamera() {
    // Grab elements, create settings, etc.
    var video = <any>document.getElementById('video');

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  takePicture() {
    // Elements for taking the snapshot
    var canvas = <any> document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function () {
      context.drawImage(video, 0, 0, 640, 480);
    });
  }

}

