import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";
import logo from "../fixtures/logo";
import discoverBtnData from "../fixtures/discoverBtnData";
import discoverCarousalData from "../fixtures/discoverCarousalData";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar,
      logo: logo,
      discoverBtn: discoverBtnData,
      discoverCarousel : discoverCarousalData
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

      this.get("/discoverCarousel" , (schema) => {
        return schema.db.discoverCarousel
      })
    },
  });

  return server;
}
