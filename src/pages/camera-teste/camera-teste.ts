import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

declare var Notification: any;


@Component({
  selector: 'page-camera-teste',
  templateUrl: 'camera-teste.html'
})
export class CameraTestePage {
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Notificação da FCamara");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }

    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }

}


