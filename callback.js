function EmitRandomNumber(attempt = 1) {
    if (attempt > 10) {
        console.log("Maximum attempts reached. Exiting.");
        return;
    }

    console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);

    const delay = 2000; // 2 seconds

    // Delay using setTimeout
    setTimeout(() => {
        console.log(`${delay / 1000} seconds have lapsed.`);
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Random number generated is ${randomNumber}.`);

        if (randomNumber < 80) {
            console.log("- - - - -");
            EmitRandomNumber(attempt + 1); // Recursively call with incremented attempt number
        } 
        else {
            console.log("- - - - -");
            console.log("Number greater than 80 generated. Exiting.");
        }
    }, delay);
}

// Call the function to start the process
EmitRandomNumber();
