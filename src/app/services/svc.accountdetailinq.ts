import { Injectable } from '@angular/core';
import { ACCOUNTDETAILINQS } from './mock-AccountDetailInq-rs'

@Injectable()
export class AccountDetailInqService {

    getAccountDetails(): Promise<any[]> {
        return Promise.resolve(ACCOUNTDETAILINQS);
    }

    getAccountDetail(selected_accountKey: number): Promise<any> {
        return this.getAccountDetails()
            .then(accountDetails => {
                if (accountDetails != null) {
                    console.log("888999 2001 c");
                    console.log(accountDetails.length);
                    console.log(accountDetails[0].accountKey);
                    console.log(accountDetails[1].accountKey);
                    console.log(accountDetails[2].accountKey);

                    for(var i=0; i < accountDetails.length; i++) {
                        if (accountDetails[i].accountKey == selected_accountKey) {
                            console.log("found it!");
                            console.log(accountDetails[i].accountKey);
                            return accountDetails[i];
                        }
                    }

                }
                console.log("selected_accountKey = " + selected_accountKey);
                //accountDetails
                //    .find(acctDetail =>  acctDetail.accountKey === selected_accountKey )
            });
    }

}