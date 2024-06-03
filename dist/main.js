"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
function startProcess(script, label) {
    const processPath = path_1.default.join(__dirname, script);
    const proc = (0, child_process_1.fork)(processPath);
    proc.on('message', (message) => {
        console.log(`[${label} Process]: ${message}`);
    });
    proc.on('exit', (code) => {
        console.log(`[${label} Process] exited with code ${code}`);
    });
    return proc;
}
const toDoProcess = startProcess('toDoProcess.js', 'ToDo');
const summaryProcess = startProcess('summaryProcess.js', 'Summary');
// Simulating sending tasks to child processes
toDoProcess.send({ type: 'task', content: 'Add new to-do item: Complete homework' });
summaryProcess.send({ type: 'summary', content: 'Summary of today\'s class: Math and Science' });
