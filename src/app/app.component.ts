import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AccountsummarytabsPage } from '../pages/accountsummarytabs/accountsummarytabs';
import { TransferPage } from '../pages/transfer/transfer';
import { BillsPage } from '../pages/bills/bills';
import { EmtPage } from '../pages/emt/emt';
import { WuPage } from '../pages/wu/wu';
import { RdcPage } from '../pages/rdc/rdc';
import { PrdsvcPage } from '../pages/prdsvc/prdsvc';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
    
  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;
  activePage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accounts', component: AccountsummarytabsPage, icon: 'assets/imgs/mvmenuaccounts.png' },
      { title: 'Transfer', component: TransferPage, icon: 'assets/imgs/mvmenutransfers.png' },
      { title: 'Bills', component: BillsPage, icon: 'assets/imgs/mvmenubills.png' },
      { title: 'INTERAC e-Transfer', component: EmtPage, icon: 'assets/imgs/mvmenuemt.png' },
      { title: 'Western Union Money Transfer', component: WuPage, icon: 'assets/imgs/mvmenuwu.png' },
      { title: 'Deposit', component: RdcPage, icon: 'assets/imgs/mvmenurdc.png' },
      { title: 'Product & Services', component: PrdsvcPage, icon: 'assets/imgs/mvmenuproductservices.png' },
      { title: 'Settings', component: SettingsPage, icon: 'assets/imgs/mvmenusetting.png' },
      { title: 'Logout', component: LoginPage, icon: 'assets/imgs/mvmenusignout.png' }
    ];

    this.activePage = this.pages[0];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page; 
    if (page.title == 'Logout') {
      localStorage.clear();
      this.activePage = this.pages[0];
    }
  }  

  checkActive(page) {
    return page == this.activePage;
  }
}
