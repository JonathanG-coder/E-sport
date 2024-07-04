import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarduserComponent } from '../carduser/carduser.component';
import { CardstaffComponent } from '../cardstaff/cardstaff.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, CarduserComponent, CardstaffComponent],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  idTeam?: number;
  team?: Team

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idTeam = parseInt(params['id']);

      //to load the page even if idTeam is 0 
      if (this.idTeam !== undefined && this.idTeam >= 0) {
        this.getTeamById(this.idTeam);
      }
    })
  }

  /**
   * Get a team selected
   * @param rId : Id of the team 
   * @returns : the team asked
   */
  getTeamById(rId: number): void {
    this.teamService.getById(rId).subscribe(data => {
      this.team = data;
      console.log(this.team)
    })
  }
}
