
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {ProposalApi} from "../ProposalApi";
import {ProposalSaveDto} from "../dto/ProposalSaveDto";


@Injectable({
  providedIn : "root"
})
export class ProposalUseCaseSave extends UseCaseSaveAbstract<ProposalSaveDto>{

  protected apiPath: string = ProposalApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
