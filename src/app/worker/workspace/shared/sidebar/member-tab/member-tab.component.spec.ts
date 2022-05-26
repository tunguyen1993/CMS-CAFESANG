import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTabComponent } from './member-tab.component';

describe('MemberTabComponent', () => {
  let component: MemberTabComponent;
  let fixture: ComponentFixture<MemberTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
