import { ApiStartup } from "base-api-firmiano";
import { Startup } from "./api.startup";

const init = async (server: ApiStartup) => {
  await server.Run();
  console.log("Api iniciada na porta " + server.port);
};

init(new Startup());

