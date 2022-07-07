import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProposalDialogComponent } from './mat-proposal-dialog.component';

describe('MatProposalDialogComponent', () => {
  let component: MatProposalDialogComponent;
  let fixture: ComponentFixture<MatProposalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatProposalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProposalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
