import { Injectable } from '@angular/core';
import { SCOTIACARDPROFILEINQS } from './mock-ScotiaCardProfileInq-rs'

@Injectable()
export class ScotiaCardProfileInqService {

    getScotiaCardProfiles(): Promise<any[]> {
        return Promise.resolve(SCOTIACARDPROFILEINQS);
    }

    getScotiaCardProfile(card: number): Promise<any> {
        return this.getScotiaCardProfiles()
            .then(scotiaCardProfiles => scotiaCardProfiles
                .find(scotiaCardProfile => scotiaCardProfile.traceUser === (card + "") ));
    }

}