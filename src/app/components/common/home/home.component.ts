import { Component, OnInit } from '@angular/core';
import {DialogsService} from "../dialogs/dialogs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialogsService:DialogsService
  ) { }

  ngOnInit(): void {
  }

  onProposal() {
    this.dialogsService.openProposalDialog()
  }
}
