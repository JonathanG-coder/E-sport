import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { AbstractApi } from './abstractApi';

@Injectable({
  providedIn: 'root'
})

export class TeamService extends AbstractApi<Team> {

  base_service = "/teams";
}