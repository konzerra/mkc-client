import {Injectable} from "@angular/core";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Product} from "../Product";
import {ProductPage} from "../ProductPage";
import {ProductApi} from "../ProductApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/get/UseCaseGetAllAbstract";


@Injectable({
  providedIn : "root"
})
export class ProductUseCaseGetAll extends UseCaseGetAllAbstract<Product>{

  protected apiPath: string = ProductApi.paths.getAll
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}

