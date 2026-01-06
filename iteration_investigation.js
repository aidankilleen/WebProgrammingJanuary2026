console.log("Iterate Using forEach()");

list = [13, 1, 5, 14, 3, 2, 6, 8, 10, 7, 15, 4, 12, 9, 11];

/*
function displayElement(item) {
    console.log(item);
}
list.forEach(displayElement);
*/

list.forEach((item, index, l) => {
    console.log(`${index} : ${item}`);
});

/*
function isOdd(n) {
    if (n % 2 == 1) {
        return true;
    } else {
        return false;
    }
}
let oddNumbers = list.filter(isOdd);
*/

let oddNumbers = list.filter((n) => {
    if (n % 2 == 1) {
        return true;
    } else {
        return false;
    }
});
console.log(oddNumbers);

// we can use a few shortcuts:
// if there is only a single parameter you can leave out ()
// tighten up the logic
// if the logic is a single line you can:
//  leave out the {}
//  leave out the return
//  leave out the ;
let evenNumbers = list.filter(n => n % 2 == 0);

console.log(evenNumbers);

/*
function compareInts(a, b) {

    console.log(`Comparing ${a} and ${b}`);
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1;
    }
}


list.sort(compareInts);
*/


list.sort((a, b) => {
    console.log(`Comparing ${a} and ${b}`);
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1;
    }
})

console.log(list);

// sort the other way
// tighten up the logic
// leave out the console.log
// if logic is a single line
//  remove {}
//  remove return
//  remove ;

list.sort((a, b) => b - a);
console.log(list);


// all of this works no matter what is in the
// array!

console.log(members);

let activeMembers = members.filter(member => member.active);

console.log(activeMembers);

// will it sort?
// sort by id in reverse order
activeMembers.sort((a, b) => b.id-a.id);

console.log(activeMembers);

// sort by name in reverse order?
activeMembers.sort((a, b) => b.name.localeCompare(a.name));
console.log(activeMembers);

// map

// convert each item in the list 
let doubled = list.map(item => item * 2);

console.log(list);
console.log(doubled);


// go through the list of members 
let gdprList = members.map((member) => {

    return {
        name: member.name,
        email: "****@****.com"
    }
});

console.log(gdprList);

































