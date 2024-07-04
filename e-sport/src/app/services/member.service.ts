import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AbstractApi } from './abstractApi';

@Injectable({
    providedIn: 'root'
})

export class MemberService extends AbstractApi<User> {

    base_service = "/seraChangerDynmiquement";

}