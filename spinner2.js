const spinToWin = "\r|\r/\r-\r\\\r|";
let delay = 0;
for (const i of spinToWin) {
  setTimeout(() => {
    process.stdout.write(`\r ${i}`);
  }, delay)
  delay += 50
};
