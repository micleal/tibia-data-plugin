"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tibia_data_plugin_1 = __importDefault(require("tibia-data-plugin"));
function test() {
    var char = tibia_data_plugin_1.default.Character('Grun');
    console.log(char);
}
test();
