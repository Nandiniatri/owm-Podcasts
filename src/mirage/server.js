import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";
import logo from "../fixtures/logo";
import discoverBtnData from "../fixtures/discoverBtnData";
import discoverCarousalData from "../fixtures/discoverCarousalData";
import trending from "../fixtures/trending";
import webbyAwardWinners from "../fixtures/webbyAwardWinners";
import guestCuratorCard from "../fixtures/guestCuratorCard";
import under20Minutes from "../fixtures/under20Minutes";
import networkHighlight from "../fixtures/networkHighlight";
import podcastStarterKit from "../fixtures/podcastStarterKit";
import RajShamani from "../fixtures/NewRelease/rajShamani/RajShamani";
import BhartiTVOuter from "../fixtures/NewRelease/bhartiTV/BhartiTVOuter";
import RanveerAllahbadiaOuter from "../fixtures/NewRelease/ranveerallahbadia/RanveerAllahbadiaOuter";
import ReLivingSingleOuter from "../fixtures/NewRelease/reLivingSingle/ReLivingSingleOuter";
import BhartiTVInner from "../fixtures/NewRelease/bhartiTV/BhartiTVInner";
import RajShamaniInner from "../fixtures/NewRelease/rajShamani/RajShamaniInner";
import RanveerAllahbadiaInner from "../fixtures/NewRelease/ranveerallahbadia/RanveerAllahbadiaInner";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar,
      logo: logo,
      discoverBtn: discoverBtnData,
      discoverCarousel : discoverCarousalData,
      trending : trending,
      webbyAwardWinner2025: webbyAwardWinners ,
      guestCuratorCard:guestCuratorCard,
      under20Min:under20Minutes,
      networkHighlight:networkHighlight,
      podcastStarted: podcastStarterKit,
      
      rajShmmi: RajShamani,
      bhartiTvOUTER:BhartiTVOuter,
      ranveerAllahbadiaOUTER: RanveerAllahbadiaOuter,
      reLivingSingleOUTER: ReLivingSingleOuter,
      bhartiTvInner:BhartiTVInner,
      rajShamaniINNER: RajShamaniInner,
      ranveerAllahbadiaINNER : RanveerAllahbadiaInner
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

      this.get("guestCuratorCard" , (schema) => {
        return schema.db.guestCuratorCard
      })

      this.get("under20Min" ,(schema) => {
        return schema.db.under20Min
      })

      this.get("networkHighlight" ,(schema) => {
        return schema.db.networkHighlight
      })

      this.get("podcastStarted" ,(schema) => {
        return schema.db.podcastStarted
      })


      this.get("rajShmmi" ,(schema) => {
        return schema.db.rajShmmi
      })

      this.get("bhartiTvOUTER" ,(schema) => {
        return schema.db.bhartiTvOUTER
      })

      this.get("ranveerAllahbadiaOUTER" ,(schema) => {
        return schema.db.ranveerAllahbadiaOUTER
      })

      this.get("reLivingSingleOUTER" ,(schema) => {
        return schema.db.reLivingSingleOUTER
      })

      this.get("bhartiTvInner" ,(schema) => {
        return schema.db.bhartiTvInner
      })

      this.get("rajShamaniINNER" ,(schema) => {
        return schema.db.rajShamaniINNER
      })

      this.get("ranveerAllahbadiaINNER" ,(schema) => {
        return schema.db.ranveerAllahbadiaINNER
      })

    },
  });

  return server;
}
