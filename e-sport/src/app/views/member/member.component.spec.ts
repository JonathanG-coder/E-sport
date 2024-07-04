import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberComponent } from './member.component';
import { MemberService } from '../../services/member.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let memberService: MemberService;

  const mockMember = {
    id: 1,
    country: 'France',
    firstname: 'John',
    lastname: 'Doe',
    nickname: 'johndoe',
    role: 'Player',
    photo: 'path/to/photo.jpg'
  };

  const activatedRouteStub = {
    params: of({
      idTeam: '1',
      type: 'members',
      idMember: '1'
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MemberComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [
        MemberService,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    memberService = TestBed.inject(MemberService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form group', () => {
    expect(component.memberControl).toBeTruthy();
  });

  it('should get member and update form', () => {
    spyOn(memberService, 'getById').and.returnValue(of(mockMember));
    component.getMember();
    expect(memberService.getById).toHaveBeenCalledWith(1);
    expect(component.member).toEqual(mockMember);
    expect(component.memberControl.value).toEqual({
      country: 'France',
      firstname: 'John',
      lastname: 'Doe',
      nickname: 'johndoe',
      role: 'Player'
    });
  });

  it('should update form with member data', () => {
    component.member = mockMember;
    component.updateForm();
    expect(component.memberControl.value).toEqual({
      country: 'France',
      firstname: 'John',
      lastname: 'Doe',
      nickname: 'johndoe',
      role: 'Player'
    });
  });

  it('should log member info on submit', () => {
    spyOn(console, 'log');
    component.member = mockMember;
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('France', 'John', 'Doe', 'johndoe', 'Player');
  });
});
