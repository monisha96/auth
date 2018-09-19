import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupData = {
    email: '',
    password: '',
    confirmpassword: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private afAuth: AngularFireAuth) {
    this.signupData.email = this.navParams.get('email');
  }
  signup() {
    if(this.signupData.password !== this.signupData.confirmpassword) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Password does not match .',
	buttons: ['OK']
      });
      alert.present();
      return;
    }
  

  this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
    .then(auth => {
      // Could do something with the Auth-Response
      console.log(auth);
    })
    .catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  
  }
}
