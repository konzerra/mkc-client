import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalEditorMainComponent } from './proposal-editor-main.component';

describe('ProposalEditorMainComponent', () => {
  let component: ProposalEditorMainComponent;
  let fixture: ComponentFixture<ProposalEditorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalEditorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalEditorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
