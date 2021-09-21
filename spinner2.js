setTimeout(() => {
  let delay = 0;
  while (delay < 1300) {
  process.stdout.write('\r|   ');
  process.stdout.write('\r/   ');
  process.stdout.write('\r-   ');
  process.stdout.write('\r\\   ')
  delay += 50;
  }
}, delay);

