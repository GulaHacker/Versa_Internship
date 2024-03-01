// Function to generate the array
function generateArrayBigBang() {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        numbers.push("BIGBANG");
      } else if (i % 3 === 0) {
        numbers.push("BIG");
      } else if (i % 5 === 0) {
        numbers.push("BANG");
      } else {
        numbers.push(i.toString());
      }
    }
    return numbers;
  }
  
  // Generate the array
  const outputArray = generateArrayBigBang();
  
  // Convert array to JSON format
  const outputJSON = JSON.stringify(outputArray);
  
  // Output to console (for demonstration)
  console.log(outputJSON);

  // Output to HTML
  document.getElementById("output").innerText = outputJSON;

  /* outputArray is the actual array structure, while outputJSON is 
  a string representation of that array in JSON format. The reason for 
  converting the array to JSON format might be for data transmission or 
  storage purposes, as JSON is a widely used format for exchanging data 
  between a server and a client or between different parts of a web application.*/