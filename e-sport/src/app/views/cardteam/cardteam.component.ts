import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../../models/game';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from '../list-user/list-user.component';


@Component({
  selector: 'app-cardteam',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, ListUserComponent],
  templateUrl: './cardteam.component.html',
  styleUrl: './cardteam.component.css'
})
export class CardteamComponent {
  @Input() team: Team | undefined;
  @Input() game: Game | undefined;
}
