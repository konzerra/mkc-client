import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Proposal} from "../Proposal";
import {ProposalPage} from "../ProposalPage";
import {ProposalApi} from "../ProposalApi";



@Injectable({
  providedIn : "root"
})
export class ProposalUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Proposal, ProposalPage>{

  protected apiPath: string = ProposalApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}
