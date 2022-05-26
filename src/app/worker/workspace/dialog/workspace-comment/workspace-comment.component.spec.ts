import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCommentComponent } from './workspace-comment.component';

describe('WorkspaceCommentComponent', () => {
  let component: WorkspaceCommentComponent;
  let fixture: ComponentFixture<WorkspaceCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
