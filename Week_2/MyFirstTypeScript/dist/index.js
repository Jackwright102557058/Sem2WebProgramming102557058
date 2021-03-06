"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var axios_1 = __importDefault(require("axios"));
console.log(chalk_1.default.blue("Hello World"));
function whenResponded(response) {
    console.log(response.data.title);
}
axios_1.default.get("https://jsplaceholder.typicode.com.todos/1").then(whenResponded);
