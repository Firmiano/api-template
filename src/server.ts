import { ApiStartup } from "base-api-firmiano";
import { Startup } from "./api.startup";

const init = async (server: Startup) => {
  await server.init();
  console.log("Api iniciada na porta " + server.port);
};

init(new Startup());

