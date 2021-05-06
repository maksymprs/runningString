const runString = function (message: string, windowSize: number) {
  
  let winString = new Array(windowSize + 1).join(" ");
  let newString = winString + message + winString;
  //console.log(newString);
  let tempString = "";
  let counter = 0;
  for(let i = windowSize; i <= newString.length - windowSize; i++){
    
    tempString = newString.slice(counter, i);
    console.log(tempString);
    counter += 1;



  }
}
runString('Hello world', 7);