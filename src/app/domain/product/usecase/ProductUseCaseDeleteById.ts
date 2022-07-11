import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {ProductApi} from "../ProductApi";



@Injectable({
  providedIn : "root"
})
export class ProductUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = ProductApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
