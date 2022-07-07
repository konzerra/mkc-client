import {AppApi} from "../AppApi";

export class ProposalApi {
  public static paths={
    save: `${AppApi.server.publicApi}/proposal`,
    deleteById: `${AppApi.server.protectedApi}/proposal/{id}`,
    update: `${AppApi.server.protectedApi}/proposal`,

    getAllPaginated: `${AppApi.server.protectedApi}/proposal/all/{pageNumber}/{pageSize}`,

  }
}
