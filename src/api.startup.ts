import { ApiStartup } from "base-api-firmiano/src//api.strartup";
import { HomeController } from "./controllers/controller.home";

export class Startup extends ApiStartup {

    private controlles = this.controllers();

    async init(): Promise<any> {
        this.controlles.push(new HomeController());
        this.Run();
    }
}