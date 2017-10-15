"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_strartup_1 = require("base-api-firmiano/src//api.strartup");
const controller_home_1 = require("./controllers/controller.home");
class Startup extends api_strartup_1.ApiStartup {
    constructor() {
        super(...arguments);
        this.controlles = this.controllers();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.controlles.push(new controller_home_1.HomeController());
            this.Run();
        });
    }
}
exports.Startup = Startup;
