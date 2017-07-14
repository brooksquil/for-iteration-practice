// console.log("hi");

// /*Increment by 10

// Write a for loop that uses a counter variable initialized at 5 and then 
// increments it by 10 every time it executes. Use console.log() to output 
// the value of the counter variable each time through the loop. 
// Stop execution of the loop if the counter variable's value is greater than 120.

// Example output:

// Current value is 5

// Current value is 15

// Current value is 25*/


// ****The following is my code:


let counter;

for (counter = 5; counter <=120; counter +=10) {
  console.log(counter);
}

// **************************************************

// /*Decrement by division

// Write a for loop with a counter variable initialized at 4096. 
// Each time the loop executes divide the counter variable's value by 2. 
// Use console.log() to output its value every time. 
// When the counter variable's value is 1, stop execution.

// Example output:

// Current value is 4096

// Current value is 2048

// Current value is 1024*/


// ***************************************************




// ****The following is my code:



let i;

for (i = 4096; i >=1; i /=2) {
  console.log(i);
}



// ***************************************************

// Array iteration

// Create an array that contains the names of American Presidents. 
// Loop over that array with a for loop, and use string concatenation with console.log() 
// to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson



// ****The following is my code:



let pres = ["#1 Washington", "#2 Adams", "#3 Jefferson"];

	for (let i = 0; i < pres.length; i++) {

  console.log("President", pres[i]);
}




/*let Presidents = ["1 was George Washington", "2 was John Adams", "3 was Thomas Jefferson"];
for (let i = 0; i < Presidents.length; i ++) {
    console.log("President #", Presidents[i]);
}*/


// let president = ["#1 Georgie", "#2 Tommy", "#3 Bertha"];
// president.forEach(function(pres, index) {
//     console.log("President", pres, index+1);
// });
    
/*let presidents = [];
    presidents.push({
        number: "#1", 
        name: "George Washington",
        dates: "(1789-1797)"
    });
    presidents.push({
        number: "#2", 
        name: "John Adams", 
        dates: " (1797-1801)"
    });
    presidents.push({
        number: "#3", 
        name: "Thomas Jefferson", 
        dates: "(1808-1809)"
    });
    presidents.push({
        number: "#4", 
        name: "James Madison", 
        dates: "(1809-1817)"
    });
    presidents.push({
        number: "#5", 
        name: "James Monroe", 
        dates: "(1817-1825)"
    });
    presidents.push({
        number: "#6", 
        name: "John Quincy Adams", 
        dates: "(1825-1829)"
    });
    

presidents.forEach(function(item, index){
    console.log("President", `${item.number} ${index+1}: ${item.name} was president ${item.dates}`);
    
});*/


// hi






















