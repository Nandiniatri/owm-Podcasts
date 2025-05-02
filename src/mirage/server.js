import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";
import logo from "../fixtures/logo";
import discoverBtnData from "../fixtures/discoverBtnData";
import discoverCarousalData from "../fixtures/discoverCarousalData";
import trending from "../fixtures/trending";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar,
      logo: logo,
      discoverBtn: discoverBtnData,
      discoverCarousel : discoverCarousalData,
      trending : trending
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

      this.get("/trending" , (schema) => {
        return schema.db.trending
      })
    },
  });

  return server;
}
