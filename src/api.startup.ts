import { ApiStartup } from "base-api-firmiano";
import { HomeController } from "./controllers/controller.home";

export class Startup extends ApiStartup {

    async init(): Promise<any> {
        this.controllers.push(new HomeController());
        this.Run();
    }
}