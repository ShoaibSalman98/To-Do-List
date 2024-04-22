import inquirer from "inquirer";
import chalk from "chalk";
let toDo = [];
async function Todos(task) {
    do {
        let task1 = await inquirer.prompt({
            type: "list",
            message: "Enter the task you want to do",
            name: "select",
            choices: ["Add", "View", "Update", "Delete"],
        });
        if (task1.select === "Add") {
            let addTask = await inquirer.prompt({
                type: "input",
                message: "Enter the task you want to add",
                name: "todo",
            });
            toDo.push(addTask.todo);
            toDo.forEach(todo => console.log(todo));
        }
        if (task1.select === "Update") {
            let updateTask = await inquirer.prompt({
                type: "list",
                message: "Enter the task you want to update",
                name: "todo",
                choices: toDo.map(item => item)
            });
            let addTask = await inquirer.prompt({
                type: "input",
                message: "Enter the task you want to add",
                name: "todo",
            });
            let newtoDo = toDo.filter(value => value !== updateTask.todo);
            toDo = [...newtoDo, addTask.todo];
            newtoDo.forEach(todo => console.log(todo));
        }
        if (task1.select === "View") {
            console.log(chalk.bgRedBright.bold("\t>>>>>>> To Do List <<<<<<<<"));
            toDo.forEach(todo => console.log(todo));
            console.log(chalk.green.bold("\t<><><><><><><><><><><><><><>"));
        }
        if (task1.select === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "Enter the task you want to update",
                name: "todo",
                choices: toDo.map(item => item)
            });
            let newtoDo = toDo.filter(value => value !== deleteTask.todo);
            toDo = [...newtoDo];
            newtoDo.forEach(todo1 => console.log(chalk.redBright.bold(todo1)));
        }
    } while (true);
}
;
Todos(toDo);
