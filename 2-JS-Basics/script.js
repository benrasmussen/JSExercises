
// lecture: variables
/**
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(name + ' ' + lastName);

var age =  26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// lecture: variables 2
/**
var name = 'John';
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);
job =  'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is your last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

// lecture: operators
/**
var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2018 - 52
//1966

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6; //left to right precedence

ageJohn++;
ageMark *= 2;

console.log(ageJohn, ageMark);
*/

// lecture: if/else statements
/**
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;
 if (isMarried) {
     console.log('YES!')
 } else {
     console.log('NO!')
 }

=== strict comparison no type coercion vs. == type coercion
*/

// lecture: boolean logic and switch statements
/**
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('john teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in lisbon');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}
*/

// coding challenge 1
/**
var johnHeight = 72;
var benHeight = 74;
var andrewHeight = 68;

var johnAge = 26;
var benAge = 32;
var andrewAge = 35;

var johnScore = johnHeight + (johnAge * 5);
var benScore = benHeight + (benAge * 5);
var andrewScore = andrewHeight + (andrewAge * 5);

if (benScore > johnScore && benScore > andrewScore) {
    console.log('Ben wins with a score of ' + benScore);
} else if (johnScore > benScore && johnScore > andrewScore) {
    console.log('John wins with a score of ' + johnScore);
} else if (andrewScore > benScore && andrewScore > johnScore) {
    console.log('Andrew wins with a score of ' + andrewScore);
} else if (benScore === andrewScore && benScore === johnScore) {
    console.log('its a three way tie');
}

console.log(benScore, johnScore, andrewScore);
*/

// lecture: functions
/**
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageBen = calculateAge(1985);
var ageDave = calculateAge(1987);
var ageAndrew = calculateAge(1973);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('Ben', 1985);
yearsUntilRetirement('Andrew', 1978);
yearsUntilRetirement('Mary', 1960);
*/

// lecture: statements and expressions
/**
//statement performs an action but does not produce an immediate value/outcome
function someFunction(parameter) {
    //code goes here
}

//expression produces a value/outcome
var someFunction = function (parameter) {
    //code goes here
};

//statements
if (x === 5) {
    //do something
}

//expressions//
3 + 4;
var x = 3;
*/

// lecture: arrays
/**
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';

console.log(names);
console.log(years);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //adds to the end of an array
john.unshift('Mr.'); // adds to the beginning of an array
john.pop(); //takes away the last index of an array
john.shift(); //takes away the first index of an array

console.log(john);

if (john.indexOf('teacher') === -1) { //if the element is not there it returns -1
    console.log('John is not a teacher');
}
*/

//lecture: objects
/**
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

//two main ways to read values out of an object
console.log(john.lastName);
console.log(john['lastName']);

//another way
var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

//lecture: objects and methods

//v1.0

/**
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        return 2018 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v2.0
/**
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        this.age = 2018 - this.yearOfBirth;
    }
};
john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function () {
        this.age = 2018 - this.yearOfBirth;
    }
};
mike.calculateAge();
console.log(mike);
*/

//lecture: loops

for (var i = 0; i <= 9; i += 1) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length -1; i >= 0;  i-= 1) {
    console.log(names[i]);
}

function someFunction() {
    return true;
}
someFunction();
