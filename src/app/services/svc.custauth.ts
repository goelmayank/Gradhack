import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class CustAuthService {
    getUsers(): User[] {
        return USERS;
    }

    getUsers2(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getAuthenticatedUser(card: number, input_password: string): Promise<User> {
        return this.getUsers2()
            .then(users => users.find(user => user.cardnumber === card && user.password === input_password ));
    }

}