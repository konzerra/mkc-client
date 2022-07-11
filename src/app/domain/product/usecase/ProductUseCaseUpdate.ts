
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {ProposalApi} from "../ProposalApi";
import {ProposalUpdateDto} from "../dto/ProposalUpdateDto";

@Injectable({
  providedIn : "root"
})
export class ProductUseCaseUpdate extends UseCaseUpdateAbstract<ProposalUpdateDto>{

  protected apiPath: string = ProposalApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
