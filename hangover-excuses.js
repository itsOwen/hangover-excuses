const venom = require("venom-bot");

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const compareTime = (hour, minute, second) =>
  new Date(Date.now()).getHours() === Number(hour) &&
  new Date(Date.now()).getMinutes() === Number(minute) &&
  new Date(Date.now()).getSeconds() === Number(second);

function start(client) {
  const prompt = require("prompt-sync")({ sigint: true });
  const newpnumber = prompt("Enter Your Boss Phone number? (91) : ");
  const newhour = prompt("Enter the hour you want to send your excuse? (0-23 / After 12pm Afternoon) : ");
  
  const excuses = ["Food Poisining", "Not Feeling Well", "Traffic Jam", "Family Emergency"];

  const random = Math.floor(Math.random() * excuses.length);

  function startLooking() {
    if (compareTime(newhour, 1, 1)) {
      sendMessage();
    }
  }

  setInterval(startLooking, 1000);

  const sendMessage = () => {
    client
      .sendText(`${newpnumber}@c.us`, "Gotta Work From Home "+(random, excuses[random]))
      .then((result) => {
        console.log("Result: ", result);
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro);
      });
  };
}