import { IController } from "./../base/controller.interface";
import { Server } from "restify";

export class HomeController implements IController {
    register(server: Server): void {
        server.get("/", async (req, res, next) => {
            res.send(200, {"user": "teste"});
            next();
        });
    }

}

