import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListTeamComponent } from './list-team.component';
import { TeamService } from '../../services/team.service';  // Assurez-vous que TeamService est importé
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListTeamComponent', () => {
  let component: ListTeamComponent;
  let fixture: ComponentFixture<ListTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTeamComponent, HttpClientTestingModule],  // Ajoutez HttpClientTestingModule dans les imports
      providers: [TeamService],
      schemas: [NO_ERRORS_SCHEMA], // Fournissez TeamService si nécessaire
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

