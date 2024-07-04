import { Component, Input, OnInit, input } from '@angular/core';
import { Team } from '../../models/team';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../services/team.service';
import { CardteamComponent } from '../cardteam/cardteam.component';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-list-team',
  standalone: true,
  imports: [MatCardModule, CommonModule, CardteamComponent, MatGridListModule],
  templateUrl: './list-team.component.html',
  styleUrl: './list-team.component.css'
})
export class ListTeamComponent implements OnInit {
  teams: Team[] | undefined;

  constructor(private teamService: TeamService) { }

  /**
    * On initialise le composant en récupérant toutes les disponibles
    */
  ngOnInit(): void {
    this.teamService.getAll().subscribe((data) => {
      this.teams = data;
    });

  }
}
