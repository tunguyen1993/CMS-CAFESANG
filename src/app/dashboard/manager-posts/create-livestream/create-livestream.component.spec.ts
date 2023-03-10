import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLivestreamComponent } from './create-livestream.component';

describe('CreateLivestreamComponent', () => {
  let component: CreateLivestreamComponent;
  let fixture: ComponentFixture<CreateLivestreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLivestreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLivestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
