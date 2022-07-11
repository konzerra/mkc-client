import {AppApi} from "../AppApi";

export class ProductApi {
  public static paths={
    save: `${AppApi.server.publicApi}/product`,
    deleteById: `${AppApi.server.protectedApi}/product/{id}`,
    update: `${AppApi.server.protectedApi}/product`,

    getAllPaginated: `${AppApi.server.protectedApi}/product/all/{pageNumber}/{pageSize}`,

  }
}
