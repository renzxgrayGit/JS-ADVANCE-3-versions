// Function to create a delay using a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to generate a random number between 0 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}

// Asynchronous function to emit a random number after a delay
async function EmitRandomNumber() {
    for (let attempt = 1; attempt <= 10; attempt++) {
        console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
        
        await delay(2000); // Wait for 2 secs using delay()
        
        console.log("2 seconds have lapsed.");

        const randomNumber = getRandomNumber();
        console.log(`Random number generated is ${randomNumber}.`);

        // Check if the generated random number is greater than 80
        if (randomNumber > 80) {
            console.log("- - - - -");
            console.log("Number greater than 80 generated. Exiting.");
            break;
        } 
        else {
            console.log("- - - - -");
        }
    }
}

// Call the function to start the process
EmitRandomNumber();
