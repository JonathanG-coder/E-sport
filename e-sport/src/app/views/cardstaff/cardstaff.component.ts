import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { Team } from '../../models/team';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../../models/game';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardstaff',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterLink],
  templateUrl: './cardstaff.component.html',
  styleUrl: './cardstaff.component.css'
})
export class CardstaffComponent {
  @Input() team: Team | undefined;
  @Input() game: Game | undefined;
  @Input() user: User | undefined;

}
