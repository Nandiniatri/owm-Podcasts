import { createServer } from "miragejs";
import Sidebar from "../fixtures/Sidebar";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    fixtures: {
      sidebar:Sidebar
    },

    routes() {
      this.namespace = "api";

      this.get("/sidebar", (schema) => {
        console.log(schema);
        return schema.db.sidebar;
      });
    },
  });

  return server;
}
