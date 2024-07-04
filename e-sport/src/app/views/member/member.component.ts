import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MemberService } from '../../services/member.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {

  memberControl: FormGroup;
  idTeam?: number
  type?: string
  idMember?: number
  member?: User

  constructor(private memberService: MemberService, private route: ActivatedRoute) {

    //Initialize the formgroup
    this.memberControl = new FormGroup({
      country: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      nickname: new FormControl(''),
      role: new FormControl('')
    });

    // get the params in the url and stock the value 
    this.route.params.subscribe(params => {
      this.idTeam = parseInt(params['idTeam']);
      this.type = params['type'];
      this.idMember = parseInt(params['idMember']);

      // Redéfinir le base_service
      this.memberService.base_service = `/teams/${this.idTeam}/${this.type}`;
      this.getMember();
    })
  }

  /**
   * get the member selected with his id, and update the form with the right values
   */
  getMember(): void {
    //load the info of the member even if id=0. Because 0=false
    if (this.idMember !== undefined && this.idMember >= 0) {
      this.memberService.getById(this.idMember).subscribe(data => {
        this.member = data;
        this.updateForm();
      })
    }
  }

  /**
   * To update the form with the correct value of the member selected
   */
  updateForm(): void {
    if (this.member) {
      //To affect to value 
      this.memberControl.patchValue({
        country: this.member.country,
        firstname: this.member.firstname,
        lastname: this.member.lastname,
        nickname: this.member.nickname,
        role: this.member.role
      });
    }
  };

  /**
   * when save button clicked -> log the info's member in the console
   */
  onSubmit(): void {
    console.log(this.member?.country, this.member?.firstname, this.member?.lastname, this.member?.nickname, this.member?.role
    )
  }
}



