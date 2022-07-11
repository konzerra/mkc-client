import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Product} from "../Product";
import {ProductPage} from "../ProductPage";
import {ProductApi} from "../ProductApi";




@Injectable({
  providedIn : "root"
})
export class ProductUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Product, ProductPage>{

  protected apiPath: string = ProductApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}
