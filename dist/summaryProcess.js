"use strict";
process.on('message', (message) => {
    var _a;
    const { type, content } = message;
    if (type === 'summary') {
        console.log(`Received summary: ${content}`);
        (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, `Summary "${content}" has been recorded.`);
    }
});
