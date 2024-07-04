import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CardteamComponent } from './cardteam.component';

describe('CardteamComponent', () => {
  let component: CardteamComponent;
  let fixture: ComponentFixture<CardteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardteamComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({}),
            snapshot: {
              paramMap: {
                get: () => { }
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
