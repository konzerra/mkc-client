
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {ProductSaveDto} from "../dto/ProductSaveDto";
import {ProductApi} from "../ProductApi";



@Injectable({
  providedIn : "root"
})
export class ProductUseCaseSave extends UseCaseSaveAbstract<ProductSaveDto>{

  protected apiPath: string = ProductApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}
