const curser = ['|', '/', '-', '\\' , '|'];
let interval = 0;
let endInterval = 0;
process.stdout.write('hello from spinner1.js... \rheyyy\n');
for (let char = 0; char < curser.length; char ++) {
  setTimeout(() => {
    process.stdout.write(`\r ${curser[char]}   `);
  }, interval += 500) 
  
      endInterval = interval;
}

setTimeout(() => {
  process.stdout.write('\n   ');
}, endInterval);



