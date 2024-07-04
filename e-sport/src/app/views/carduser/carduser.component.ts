import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { Team } from '../../models/team';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../../models/game';
import { ListUserComponent } from '../list-user/list-user.component';
import { CardteamComponent } from '../cardteam/cardteam.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carduser',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterLink],
  templateUrl: './carduser.component.html',
  styleUrl: './carduser.component.css'
})
export class CarduserComponent {
  @Input() team?: Team
  @Input() game?: Game
  @Input() user?: User
}
