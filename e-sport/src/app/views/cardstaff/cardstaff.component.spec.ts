import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardstaffComponent } from './cardstaff.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing'; // Importez RouterTestingModule pour gérer les routes

describe('CardstaffComponent', () => {
  let component: CardstaffComponent;
  let fixture: ComponentFixture<CardstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        RouterTestingModule, // Ajoutez RouterTestingModule pour les tests de routage
        CardstaffComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Ajoutez des tests supplémentaires
  it('should display user information', () => {
    component.user = { firstname: 'John', lastname: 'Doe', role: 'Coach', photo: 'photo_url' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('John, Doe');
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('photo_url');
    expect(compiled.querySelector('mat-card-subtitle p:last-child')?.textContent).toContain('Coach');
  });

  it('should display no photo message if user has no photo', () => {
    component.user = { firstname: 'John', lastname: 'Doe', role: 'Coach' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p span i')?.textContent).toContain('Pas de photo pour ce joueur');
  });

  it('should create a correct router link', () => {
    component.team = { id: 1 } as any; // Remplacez par une instance correcte de Team
    component.user = { id: 1, firstname: 'John', lastname: 'Doe', role: 'Coach' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button?.getAttribute('ng-reflect-router-link')).toBe('/teams/1/staff/1');
  });
});
