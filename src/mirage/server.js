import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";
import logo from "../fixtures/logo";
import discoverBtnData from "../fixtures/discoverBtnData";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar,
      logo: logo,
      discoverBtn: discoverBtnData
    },

    routes() {
      this.namespace = "api";

      this.get("/logo", (schema) => {
        return schema.db.logo;
      });

      this.get("/sidebar", (schema) => {
        return schema.db.sidebar;
      });

      this.get("/discoverBtn" , (schema) => {
        return schema.db.discoverBtn
      })
    },
  });

  return server;
}
