import { fork, ChildProcess } from 'child_process';
import path from 'path';

function startProcess(script: string, label: string): ChildProcess {
  const processPath = path.join(__dirname, script);
  const proc = fork(processPath);

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
