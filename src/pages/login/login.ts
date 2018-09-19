import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController,  private afAuth: AngularFireAuth,public navParams: NavParams, private toastCtrl: ToastController) {
  
  }
  
 login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
 
  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
}



