import { ApiStartup } from "./api.strartup";

const init = async (server: ApiStartup) => {
  await server.Run();
  console.log("Api iniciada na porta " + server.port);
};

init(new ApiStartup());

