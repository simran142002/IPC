interface Message {
  type: string;
  content: string;
}

process.on('message', (message: unknown) => {
  const { type, content } = message as Message;

  if (type === 'summary') {
    console.log(`Received summary: ${content}`);
    process.send?.(`Summary "${content}" has been recorded.`);
  }
});
