
export class ComponentRoutingPaths {
  public static userControl = {
    login : "login",
    register : "register",
    handbook: "user/handbook",

  }
  public static common = {
    home : "",
    about:"about",
    report: "report"
  }
  public static adminControl = {

    product : {
      main: "admin/product/main",
      save: "admin/product/save",
      update: "admin/product/update"
    },
    markdown : {
      main: "admin/markdown/main",
      save: "admin/markdown/save",
      update: "admin/markdown/update"
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
