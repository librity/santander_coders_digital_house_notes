function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function isStraight() {
  console.log("sup");
  await sleep(5000);
  console.log("5 second + sup");
}

isStraight();

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
