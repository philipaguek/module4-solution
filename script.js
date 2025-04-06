// Array of names
var names = ["John", "Alice", "Philip", "Jaakov", "Jack", "Olivia", "Jake"];

// Loop over the array of names
names.forEach(function(name) {
    // Check if the name starts with 'J' or 'j'
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name); // Print Goodbye if the name starts with 'J'
    } else {
        console.log("Hello " + name); // Print Hello if the name starts with any other letter
    }
});
