/**
 * Section 6: Recap and Mini-Project
 * 
 * This section is dedicated to revising the concepts covered today through a practical mini-project.
 * We'll be building a simple CLI (Command Line Interface) tool using Node.js that performs basic tasks,
 * integrating various JavaScript features we've explored.
 */

// Mini-Project: CLI Task Manager

// This mini-project assumes you have Node.js installed. 
// We'll create a simple CLI tool that allows adding, viewing, and deleting tasks stored in a JSON file.

const fs = require('fs');
const process = require('process');

// File where tasks will be stored
const tasksFile = './tasks.json';

// Function to read tasks from the file
function readTasks() {
    if (!fs.existsSync(tasksFile)) {
        return [];
    }
    const tasksJson = fs.readFileSync(tasksFile);
    return JSON.parse(tasksJson);
}

// Function to save tasks to the file
function saveTasks(tasks) {
    const tasksJson = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFile, tasksJson);
}

// Function to add a new task
function addTask(taskDescription) {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length + 1,
        description: taskDescription,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log('Task added successfully.');
}

// Function to list all tasks
function listTasks() {
    const tasks = readTasks();
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.description} [${task.completed ? 'Completed' : 'Not Completed'}]`);
    });
}

// Function to mark a task as completed
function completeTask(taskId) {
    const tasks = readTasks();
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        console.log('Task not found.');
        return;
    }
    task.completed = true;
    saveTasks(tasks);
    console.log('Task completed successfully.');
}

// CLI Interaction
// Using process.argv to handle simple command line arguments for task management.
const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
    case 'add':
        addTask(argument);
        break;
    case 'list':
        listTasks();
        break;
    case 'complete':
        completeTask(parseInt(argument, 10));
        break;
    default:
        console.log('Invalid command. Available commands are: add, list, complete');
}

/**
 * This mini-project integrates various JavaScript features and Node.js basics, providing a practical application
 * of the concepts discussed. Feel free to expand this tool with more features as you progress in your learning.
 */
