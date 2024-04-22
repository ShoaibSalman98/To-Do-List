#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Arry.
const todoList = [];
// Function.
async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["Add task", "View Task", "Delete Task", "Mark task as completed", "Exit"],
    });
    switch (action) {
        case 'Add task':
            await Addtask();
            break;
        case 'View Task':
            ViewTask();
            break;
        case 'Mark task as completed':
            await markCompleted();
            break;
        case "Delete Task":
            await markDeleted();
            break;
        case 'Exit':
            console.log("Good Bye");
            return;
    }
    mainMenu();
}
let Addtask = async () => {
    let { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: "Enter a Task",
    });
    todoList.push({ task, completed: false });
    console.log(chalk.redBright.bold("Task added Succesfully"));
};
let ViewTask = () => {
    console.log(chalk.bgGreenBright.bold("***** To Do List *****"));
    todoList.forEach((item, index) => {
        console.log(`${index + 1}.[${item.completed ? 'X' : ''}] ${item.task}`);
    });
    console.log(chalk.bgGreenBright.bold("<><><><><><><><><><><><>"));
};
let markCompleted = async () => {
    let { index } = await inquirer.prompt({
        type: "number",
        name: "index",
        message: "Which task you to want to Mark as a Completed",
    });
    if (index < 1 || index > todoList.length) {
        console.log(chalk.gray.bold(">>> Invalid Task Number <<<"));
        return;
    }
    todoList[index - 1].completed = true;
    console.log(chalk.bgBlueBright.bold("Task Completed"));
};
let markDeleted = async () => {
    let { index } = await inquirer.prompt({
        type: "number",
        name: "index",
        message: "Which task you want to Delete",
    });
    if (index < 1 || index > todoList.length) {
        console.log(chalk.gray.bold(">>> Invald Task Selection <<<"));
        return;
    }
    todoList.splice(index - 1, 1); // Remove Task fro the specified Index.
    console.log(chalk.greenBright.bold("Task Deleted"));
};
mainMenu();
