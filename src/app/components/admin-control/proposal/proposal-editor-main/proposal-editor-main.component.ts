import { Component, OnInit } from '@angular/core';
import {ProposalPage} from "../../../../domain/proposal/ProposalPage";
import {Proposal} from "../../../../domain/proposal/Proposal";
import {ProposalUseCaseUpdate} from "../../../../domain/proposal/usecase/ProposalUseCaseUpdate";
import {ProposalUseCaseGetAllPaginated} from "../../../../domain/proposal/usecase/ProposalUseCaseGetAllPaginated";

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
    size: 15,
    totalElements: 0,
    totalPages: 0

  };

  constructor(
    private proposalUseCaseUpdate: ProposalUseCaseUpdate,
    private proposalUseCaseGetAllPaginated: ProposalUseCaseGetAllPaginated
  ) { }

  ngOnInit(): void {
    this.proposalUseCaseGetAllPaginated.execute(this.modelPage.number, this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
      }
    })
  }

  onPageChange($event: number) {
    this.proposalUseCaseGetAllPaginated.execute($event-1, this.modelPage.size).subscribe({
      next:(modelPage)=>{
        this.modelPage=modelPage
      }
    })
  }

  onChecked(id: Number) {
    this.proposalUseCaseUpdate.execute({
      id: id
    }).subscribe({

    })
  }
}
