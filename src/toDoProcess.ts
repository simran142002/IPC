interface Message {
  type: string;
  content: string;
}

process.on('message', (message: unknown) => {
  const { type, content } = message as Message;

  if (type === 'task') {
    console.log(`Received task: ${content}`);
    process.send?.(`Task "${content}" has been added.`);
  }
});
