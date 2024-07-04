import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarduserComponent } from './carduser.component';

describe('CarduserComponent', () => {
  let component: CarduserComponent;
  let fixture: ComponentFixture<CarduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarduserComponent, RouterTestingModule] // Ajoutez RouterTestingModule pour les tests de routage
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
