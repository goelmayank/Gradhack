import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountsummaryhomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountsummaryhome',
  templateUrl: 'accountsummaryhome.html',
})
export class AccountsummaryhomePage {

  accountList = [];
  groupAcconts = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsummaryhomePage');
  }

  ngOnInit(): void {
    console.log("888999 60001 c home page -> init.");
    console.log(this.navParams.data);
    console.log("888999 60005 c this.accountList is");
    console.log(this.accountList);

    if (this.navParams != null &&
        this.navParams.data != null &&
        this.navParams.data.accountList != null) {
      localStorage.setItem('savedAcctData', JSON.stringify(this.navParams.data));
      //this.accountList = this.navParams.data.accountList;
      console.log("888999 60003 c accountList.");
      console.log(this.accountList);

    }

    if (localStorage.getItem('savedAcctData') != null) {
        console.log("888999 60005 c saved accountList is");     
        var acctData = JSON.parse(localStorage.getItem('savedAcctData'));
        console.log(acctData.accountList);
        this.accountList = acctData.accountList;
    }

    this.groupAccountsByCategory();

    console.log("888999 60002 groupAcconts is ");
    console.log(this.groupAcconts);    

  }

  groupAccountsByCategory(){

    if (this.accountList == null || this.accountList.length == 0) {
      return;
    }

    //sorting:
    /*** 
    this.accountList.sort(
      function(a,b){
          if (a.segCategory!=b.segCategory){
            return (b.id-a.id);
          } else {
            return (a.segCategory-b.segCategory);
          }
      });    
    */
    if (this.accountList.length > 0){

      let currentCategory = '';
      let currentAccounts = [];
      this.accountList.forEach(account => {
        if (account.segCategory != currentCategory) {
          currentCategory = account.segCategory;

          let newGroup = {
            category: currentCategory,
            accounts: []
          }

          currentAccounts = newGroup.accounts;
          this.groupAcconts.push(newGroup);
        }
        currentAccounts.push(account);
      });

    }

  }

}
