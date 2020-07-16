//Q # 1
document.write("<h1>The Power Calculator</h1>");

function power(a, b) {
    var result = 1;
    if (b == undefined)
        exponent = 2;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}

document.write(power(prompt("Enter a number to get power applied onto:"), prompt("Enter the power to be applied:")));
document.write("<br/><br/><br/>");

//Q # 2
document.write("<h1>Determine Leap Year</h1>");

function leapYear(year) {
    var year1 = parseInt(year);
    switch (year1 % 4 == 0) {
        case true:
            document.write("Year " + year + " is a leap year");
            break;
        case false:
            document.write("Year " + year + " is not a leap year");
            break;
        default:
            document.write("Invalid input detected");
            break;

    }
}
leapYear(prompt("Enter any year to check leap year:"));

//Q # 3
document.write("<br/><br/><br/>");
document.write("<h1>Calculate Area</h1>");
var a = prompt("Enter value of first side of triangle:");
var b = prompt("Enter value of second side of triangle:");
var c = prompt("Enter value of third side of triangle:");

function calcS(a, b, c) {
    var S = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
    return S
}
var S = calcS(a, b, c);

function calcArea(a, b, c, S) {
    var area = S * ((S - parseInt(a)) * (S - parseInt(b)) * (S - parseInt(c)));
    document.write(area);
}
calcArea(a, b, c, S);

//Q # 4
document.write("<br/><br/><br/>");
document.write("<h1>Calculate Average and Percentage</h1>");
var marks1 = prompt("Enter marks for subject 1:");
var marks2 = prompt("Enter marks for subject 2:");
var marks3 = prompt("Enter marks for subject 3:");

function avePer(marks1, marks2, marks3) {
    var average = (parseInt(marks1) + parseInt(marks2) + parseInt(marks3)) / 3;
    var percentage = ((parseInt(marks1) + parseInt(marks2) + parseInt(marks3)) / 300) * 100;
    document.write("Average of entered marks is: " + average);
    document.write("<br/>Percentage of entered marks is: " + percentage);
}
avePer(marks1, marks2, marks3);

//Q # 5
//Q # 6
document.write("<br/><br/><br/>");
document.write("<h1>Vowel Remover</h1>");
var str = prompt("Enter any string to remove vowels:");

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
var answer = removeVowels(str);
document.write("Output String: " + answer);

//Q # 7
document.write("<br/><br/><br/>");
document.write("<h1>Vowel Occurence</h1>");

function isVowel(ch) {
    switch (ch) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return 1;
        default:
            return 0;
    }
}