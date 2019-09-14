import { Component, OnInit, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccountsummaryhomePage } from '../accountsummaryhome/accountsummaryhome';
import { AccountsummarycombinedbalancePage } from '../accountsummarycombinedbalance/accountsummarycombinedbalance';

/**
 * Generated class for the AccountsummarytabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountsummarytabs',
  templateUrl: 'accountsummarytabs.html',
})
export class AccountsummarytabsPage {
   @ViewChild(Nav) nav: Nav;

  tab1Root = AccountsummaryhomePage;
  tab2Root = AccountsummarycombinedbalancePage;

  rootParamsData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootParamsData = navParams;
    console.log("888999 50002 rootParamsData is ");
    console.log(this.rootParamsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsummarytabsPage');
  }

  ngOnInit(): void {
    console.log("888999 50001 b home page -> init.");
    console.log(this.navParams.data);
   

  }  

}
