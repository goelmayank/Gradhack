import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../app/services/user';
import { CustAuthService } from '../../app/services/svc.custauth';
import { ScotiaCardProfileInqService } from '../../app/services/svc.scotiaprofileinq';
import { AccountsummarytabsPage } from '../accountsummarytabs/accountsummarytabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: 
    [
        CustAuthService, 
        ScotiaCardProfileInqService, 
    ]  
})
export class LoginPage {

  @ViewChild('txtCard') txtCard;
  @ViewChild('txtPassword') txtPassword;

  public authenticatedUser: User;
  public loginUserScotiaCardProfile: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private custAuthService: CustAuthService,
    private scotiaCardProfileInqService: ScotiaCardProfileInqService
    ) {
  }

  signOn() {
    console.log("888999 10001 signOn");
    console.log(this.txtCard.value);
    console.log(this.txtPassword.value);

    if (this.txtCard.value.trim().length == 0 ||
        this.txtPassword.value.trim().length == 0) {
          alert("Please input card number and password!");
          return;
    }

    var cardNo: number;
    cardNo = parseInt(this.txtCard.value);

    console.log("888999 10002 cardNo is");
    console.log(cardNo);

    this.custAuthService.getAuthenticatedUser(cardNo, this.txtPassword.value)
      .then(user => {
        if (user != null) {
          console.log(user);
          this.authenticatedUser = user;
          this.scotiaCardProfileInqService.getScotiaCardProfile(user.cardnumber)
            .then(scotiaCardProfile =>  {
              this.loginUserScotiaCardProfile = scotiaCardProfile;
              console.log("888999 10003 scotiaCardProfile is");
              console.log(scotiaCardProfile);
              //this.navCtrl.push(AccountsummarytabsPage, scotiaCardProfile);
              this.navCtrl.setRoot(AccountsummarytabsPage, scotiaCardProfile);
              //this.openPage(AccountsummarytabsPage, scotiaCardProfile);
            })
            
        }
        else {
          alert("This user [" + cardNo +"] not found or password not matched!");
        }

      });    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
}
