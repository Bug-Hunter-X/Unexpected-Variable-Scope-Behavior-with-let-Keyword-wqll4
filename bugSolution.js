function myFunc() {
  let x = 10;
  if (true) {
    //To avoid confusion and unexpected behavior, use a different variable name.
    let y = 20; 
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
}

myFunc();