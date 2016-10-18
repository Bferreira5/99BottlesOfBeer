// Bottle of Beer
// Version 1
var bottles = 10,
    bottle = "bottles",
    text = "";

while (bottles > 0) {
  if (bottles === 1) {
    bottle = "bottle";
  }
  
  text += bottles + " ";
  text += bottle + " of beer on the wall, ";
  text += bottles + " " + bottle + " of beer.";
    
  bottles--;
  text += "Take one down and pass it around, ";
  text += + bottles + " bottles of beer on the wall."

  if (bottles === 0) {
      bottles = "no more";
  }
  console.log(text);
  text = '';
}
// Version 2
var bottles;
for (counter = 3; counter >= 1; counter = counter - 1) 
{
    if (counter === 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall." );
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter === 1) {
        console.log("No bottles of beer on the wall.");
    }
}


// Version3 

for (var bottles = 99; bottles >= 0; bottles--) {
  if (bottles < 1) {
    var all = bottles + ' bottle of beer on the wall, ' + bottles + ' bottle of beer.' +
' Take one down and pass it around, ' + (bottles - 1) + ' bottles of beer on the wall' +'.';
    console.log(all);
} else if (bottles === 2) {
    var all = bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.' +
' Take one down and pass it around, ' + (bottles - 1) + ' bottle of beer on the wall' +'.';
    console.log(all);
} else if (bottles > 0) {
    var all = bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.' +
' Take one down and pass it around, ' + (bottles - 1) + ' bottles of beer on the wall' +'.';
    console.log(all);
  } 
}
