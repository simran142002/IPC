"use strict";
process.on('message', (message) => {
    var _a;
    const { type, content } = message;
    if (type === 'task') {
        console.log(`Received task: ${content}`);
        (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, `Task "${content}" has been added.`);
    }
});
