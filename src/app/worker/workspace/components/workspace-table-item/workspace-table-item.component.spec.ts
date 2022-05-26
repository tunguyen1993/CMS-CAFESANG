import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTableItemComponent } from './workspace-table-item.component';

describe('WorkspaceTableItemComponent', () => {
  let component: WorkspaceTableItemComponent;
  let fixture: ComponentFixture<WorkspaceTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
