import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";
import {MatDialogRef} from "@angular/material/dialog";
import {MatInfoDialogComponent} from "../mat-info-dialog/mat-info-dialog.component";
import {ProposalUseCaseSave} from "../../../../domain/proposal/usecase/ProposalUseCaseSave";
import {DialogsService} from "../dialogs.service";

@Component({
  selector: 'app-mat-proposal-dialog',
  templateUrl: './mat-proposal-dialog.component.html',
  styleUrls: ['./mat-proposal-dialog.component.css']
})
export class MatProposalDialogComponent implements OnInit {

  name = new FormControl("",Validators.required)
  email = new FormControl("", Validators.required)
  phone = new FormControl("", Validators.required)

  constructor(
    public dialogRef : MatDialogRef<MatInfoDialogComponent>,
    private proposalUseCaseSave: ProposalUseCaseSave,
    private dialogsService: DialogsService
  ) { }

  ngOnInit(): void {
  }


  checkFormControl(name: FormControl) {
    return genericCheckFormControl(name)
  }

  onCancelClicked() {
    this.dialogRef.close()
  }

  onSend() {
    if(
      this.name.valid && this.phone.valid && this.email.valid
    ){
      this.proposalUseCaseSave.execute({
        name: this.name.value || "",
        number: this.phone.value || "",
        email: this.email.value || ""
      }).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog("Ваша заявка принята")
          this.dialogRef.close()
        }
      })
    }

  }
}
