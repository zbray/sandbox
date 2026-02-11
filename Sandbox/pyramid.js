const n = 4;

//create a for loop that will run from 1 (first iteration) to the number n
// on each iteration the for loop will console log out that iteration number's worth of # characters (1 # for the first loop, etc)

for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i));
}

//Output logic:
// #
// ##
// ###
// ####
