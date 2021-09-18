// The browser's console is a place where we can also put messages.
// I am "logging" a message to the console.
console.log('Waiting a little bit....');
// This is a "delay" of 3 seconds (3000 milliseconds)
await new Promise(resolve => setTimeout(resolve, 3000));
console.log('I am done waiting.');
alert('The rest of the page should have loaded and rendered by the time this alert popped up.');
