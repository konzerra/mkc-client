
export class ComponentRoutingPaths {
  public static userControl = {
    login : "login",
    register : "register",
    handbook: "user/handbook",

  }
  public static common = {
    home : "",
  }
  public static adminControl = {

    product : {
      main: "admin/product/main",
      save: "admin/product/save",
      update: "admin/product/update"
    },

    tips:{
      main: "admin/tips/main",
      save: "admin/tips/save",
      update: "admin/tips/update"
    },

    proposal: {
      main:"admin/proposal/main",
      save:"admin/proposal/save",
      update:"admin/proposal/update",

    },

  }

  public static reviewerControl = {
    article:{
      main:"reviewer/article/main",
      update:"reviewer/article/update"
    }
  }
}
