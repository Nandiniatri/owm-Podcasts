import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";
import logo from "../fixtures/logo";
import discoverBtnData from "../fixtures/discoverBtnData";
import discoverCarousalData from "../fixtures/discoverCarousalData";
import trending from "../fixtures/trending";
import webbyAwardWinners from "../fixtures/webbyAwardWinners";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar,
      logo: logo,
      discoverBtn: discoverBtnData,
      discoverCarousel : discoverCarousalData,
      trending : trending,
      webbyAwardWinner2025: webbyAwardWinners 
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

      this.get("/webbyAwardWinner2025" , (schema) => {
        return schema.db.webbyAwardWinner2025
      })
    },
  });

  return server;
}
