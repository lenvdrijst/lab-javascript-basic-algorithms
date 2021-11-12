/*
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.
*/

let hacker1 = "Elmehdi";
console.log(`"The driver's name is ${hacker1}."`);

let hacker2 = "Len";
console.log(`"The navigator's name is ${hacker2}."`);


/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log("Oops, something went wrong...");
}


//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driversName = ''; 

for (let letter of hacker1) {
    driversName += `${letter.toUpperCase()} `  
}
  
console.log(driversName)  


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let splitName = hacker2.split('') // convert string to an array
let reverseName = splitName.reverse() // reverse the order
let joinName = reverseName.join('') // convert it back to a string
console.log(`"${joinName}"`)

// The above solution didn't 'feel good' because I googled it. I wanted to see if I could also manage with a simple for loop.
// And I could! And that makes me so happy! haha :)

let reverseNavigatorName = "";

for (i = hacker2.length -1; i >= 0; i--) {
    reverseNavigatorName += hacker2[i]
}

console.log(`"${reverseNavigatorName}"`)


/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

let alphabeticOrder = hacker1.localeCompare(hacker2);

if (alphabeticOrder < 0) {
  console.log("The driver's name goes first.")
} else if (alphabeticOrder > 0) {
  console.log("Yo, the navigator goes first definitely."); 
} else {
  console.log("What?! You both have the same name?")
}

/*
BONUS 1
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let lorum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod tristique sollicitudin. Nam convallis sem sed est ultrices, et facilisis ante maximus. Phasellus bibendum lobortis ipsum. Duis pretium pharetra aliquam. Nulla efficitur elit lacus, sit amet rhoncus diam vulputate a. Maecenas aliquam, orci id elementum accumsan, mi purus sollicitudin augue, et interdum risus ipsum at nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus sollicitudin velit, nec varius lectus lacinia et. Quisque fringilla ornare mauris in ultricies. Duis pellentesque leo felis, id commodo risus elementum eget. 

Nam viverra mi sed urna vulputate ultricies. Praesent eu odio magna. Cras euismod pulvinar purus, sit amet blandit turpis porta non. Aliquam vitae eros dapibus, pellentesque urna ac, egestas velit. Proin ut urna auctor, vehicula tellus non, consequat quam. Curabitur ullamcorper rhoncus aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam at purus vulputate, vehicula sapien vitae, semper leo. Etiam posuere varius varius. Nunc lorem urna, mollis eu dui a, pulvinar pharetra enim. Phasellus pharetra et eros eget rutrum. Suspendisse a dignissim mauris, vulputate luctus libero. Proin porta consectetur lacus faucibus semper. 

Duis gravida, augue ac posuere dapibus, leo urna sagittis lorem, vitae aliquet dolor arcu in risus. Nunc eleifend justo quis pretium aliquet. Nullam at consequat tortor, at tempus lorem. Mauris quis ex mattis, lacinia purus eu, malesuada lacus. Sed nec lorem sem. Quisque dapibus tortor ac nisi dictum lobortis. Ut laoreet sed dolor vitae dapibus. Maecenas sagittis sed sem eget ultrices. Suspendisse rhoncus, risus id luctus laoreet, ligula quam porttitor turpis, in ultricies lectus mauris vitae eros.`

let countWords = 1; // after the last word, there is no space. So that's why I set it to 1

for (let i = 0; i < lorum.length; i++) {
    if (lorum[i] === ' ') {
      countWords ++; 
    }
  }

//this also works:
//let countWords2 = lorum.split(" ").length;
//console.log(countWords2)

console.log(countWords) 
/*
I got this to work, but only by adding a space at the end of the paragraphs. Otherwise I would miss 2 words, 
because the paragraph break is not seen as a space. This feels like cheating... Is there a way to refer to these 
paragraph breaks in an if statement? Or should I use \n?
*/


let foundEt = 0;

for (let i = 0; i < lorum.length; i++) {
    if (lorum[i] === " " && lorum[i+1] === "e" && lorum[i+2] === "t" && lorum[i+3] === " ") {
        foundEt ++;
    }
}

console.log(foundEt);
// It works, but it feels a bit abundant...


/*
BONUS 2
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value 
we assigned to this variable is a Palindrome.
*/

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseNoSpace = "";
let phraseReversed = "";

for (let i = 0; i < phraseToCheck.length; i++ ) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!") {
        continue;
    } else {
        phraseNoSpace += phraseToCheck[i].toLowerCase();
    }
}

for (let i = phraseToCheck.length -1; i >= 0; i--) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!") {
      continue;
    } else {
      phraseReversed += phraseToCheck[i].toLowerCase();
    }
  }

if (phraseNoSpace === phraseReversed) {
    console.log("Wow how cool, it's a palindrome!");
 } else {
    console.log("This phrase is not a palindrome.");
}