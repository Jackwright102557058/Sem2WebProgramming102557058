import Chalk from "chalk";
import axios, { AxiosResponse } from "axios";

console.log(Chalk.blue("Hello World"));

interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


function whenResponded(response: AxiosResponse<any>) {
    console.log(response.data.title);
}

axios.get("https://jsplaceholder.typicode.com.todos/1").then(whenResponded);