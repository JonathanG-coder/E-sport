import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ListUserComponent } from './list-user.component';
import { TeamService } from '../../services/team.service';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ListUserComponent], // Importez ListUserComponent ici
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        TeamService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }) // Simule un paramètre de route avec id=1
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch team by id in constructor', () => {
    spyOn(component, 'getTeamById').and.callThrough();
    component.getTeamById(1); // Appelez la méthode directement
    expect(component.getTeamById).toHaveBeenCalledWith(1);
  });
});
