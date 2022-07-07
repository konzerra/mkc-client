import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {ProposalApi} from "../ProposalApi";


@Injectable({
  providedIn : "root"
})
export class ProposalUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = ProposalApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
