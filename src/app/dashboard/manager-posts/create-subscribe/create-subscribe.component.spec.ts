import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubscribeComponent } from './create-subscribe.component';

describe('CreateSubscribeComponent', () => {
  let component: CreateSubscribeComponent;
  let fixture: ComponentFixture<CreateSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
