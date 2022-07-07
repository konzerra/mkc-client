import { Component, OnInit } from '@angular/core';
import {ProposalPage} from "../../../../domain/proposal/ProposalPage";
import {Proposal} from "../../../../domain/proposal/Proposal";

@Component({
  selector: 'app-proposal-editor-main',
  templateUrl: './proposal-editor-main.component.html',
  styleUrls: ['./proposal-editor-main.component.css']
})
export class ProposalEditorMainComponent implements OnInit {
  modelPage: ProposalPage = {
    content: new Array<Proposal>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0

  };

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange($event: number) {

  }
}
