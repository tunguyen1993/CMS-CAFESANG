import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameMobileComponent } from './create-game-mobile.component';

describe('CreateGameMobileComponent', () => {
  let component: CreateGameMobileComponent;
  let fixture: ComponentFixture<CreateGameMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
