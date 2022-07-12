// 1. Do the below programs in anonymous function & IIFE
//   A. Print odd numbers in an array
//   B. Convert all the strings to title caps in a string array
//   C. Sum of all numbers in an array
//   D. Return all the prime numbers in an array
//   E  Return all the palindromes in an array
//   F. Return median of two sorted arrays of the same size
//   G. Remove duplicates from an array
//   H. Rotate an array by k times

//A. Print odd numbers in an array:
// 1.ANONYMOUS FUNCTION

var oddNumber = function (array) {
    let odd = [];
    array.filter(num => {
        if (num % 2 !== 0)
            odd.push(num);
    })

    console.log(`${odd}`);
}
oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30]);


// 2.IIFE

(function (array) {
    let odd = [];
    array.filter(num => {
        if (num % 2 !== 0)
            odd.push(num);
    })

    console.log(`${odd}`);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30]);


// B.Convert all the strings to title caps in a string array:

//1.ANONYMOUS FUNCTION
var convert = function (array) {
    var titleCaps = [];
    for (var i = 0; i < array.length; i++) {
        titleCaps += array[i][0].toUpperCase() + array[i].slice(1);
    } console.log(titleCaps);
}
convert(["surya ", "vijay ", "ajith ", "vikram "]);


// 2.IIFE

(function (array) {
    var titleCaps = [];
    for (var i = 0; i < array.length; i++) {
        titleCaps += array[i][0].toUpperCase() + array[i].slice(1);
    } console.log(titleCaps);
})(["surya ", "vijay ", "ajith ", "vikram "]);


// C Sum of all numbers in an array

// 1.ANONYMOUS FUNCTION

var sum = function (array) {
    var tsum = 0;
    for (i = 0; i < array.length; i++) { tsum += array[i]; }
    console.log(`${tsum}`);
}
sum([1, 2, 3, 4, 5, 6]);


// 2.IIFE

(function (array) {
    var tsum = 0;
    for (i = 0; i < array.length; i++) { tsum += array[i]; }
    console.log(`${tsum}`);
})([1, 2, 3, 4, 10, 5, 6]);


// D Return all the prime numbers in an array:

// 1.ANONYMOUS FUNCTION

var primeNum = function (arr) {
    let p = [];
    arr.forEach(num => {
        if (num <= 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return p.push(num);
    })
    console.log(`${p}`);
}
primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 23, 30]);


// 2.IIFE

(function (arr) {
    let p = [];
    arr.forEach(num => {
        if (num <= 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return p.push(num);
    })
    console.log(`${p}`);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 23, 30]);


// E Return all the palindromes in an array:

// 1.ANONYMOUS FUNCTION

var ispalindrome = function (arr) {
    var palintrome = [];
    arr.filter(element => {
        var str = String(element);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] == str[j]) {
                i++;
                j--;
            }
            else
                return false;
        }
        return palintrome.push(element);
    })
    console.log(`${palintrome}`);

}
ispalindrome(["rotor", "level", "day", "class", "madam", "malayalam", "car"]);


// 2.IIFE

(function (arr) {
    var palintrome = [];
    arr.filter(element => {
        var str = String(element);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] == str[j]) {
                i++;
                j--;
            }
            else
                return false;
        }
        return palintrome.push(element);
    })
    console.log(`${palintrome}`);
})(["rotor", "level", "day", "class", "madam", "malayalam", "car"]);


// F Return median of two sorted arrays of the same size:

// 1.ANONYMOUS FUNCTION 

var Median = function (arr1, arr2) {
    var arr3 = [...arr1, ...arr2];
    arr3.sort((a, b) => a - b);
    var l = arr3.length / 2;
    if (arr3.length % 2 == 0) {
        var median = ((arr3[l - 1] + arr3[l]) / 2);
        console.log(`${median}`);
    }
    else {
        console.log(`${arr3[l - 0.5]}`);
    }

}
Median([1, 2, 5, 3, 6], [9, 9, 5, 7, 10]);


// 2.IIFE

(function (arr1, arr2) {
    var arr3 = [...arr1, ...arr2];
    arr3.sort((a, b) => a - b);
    var l = arr3.length / 2;
    if (arr3.length % 2 == 0) {
        var median = ((arr3[l - 1] + arr3[l]) / 2);
        console.log(`${median}`);
    }
    else {
        console.log(`${arr3[l - 0.5]}`);
    }

})([1, 2, 5, 3, 6], [9, 9, 5, 7, 10]);


// G Remove duplicates from an array:

// 1.ANONYMOUS FUNCTION 

var res = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(`${newArr}`);
}
res(["surya", 1, 2, 4, 5, 1, 2, 4, 5, "surya", "abi", "abi", 2, 4]);


// 2.IIFE

(function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(`${newArr}`);
})(["surya", 1, 2, 4, 5, 1, 2, 4, 5, "surya", "abi", "abi", 2, 4]);


// H Rotate an array by k times:

// 1.ANONYMOUS FUNCTION 

var rotate = function (arr) {
    var k = 4;
    var out = arr.slice(k, arr.length);
    var count = out.length;
    for (var i = 0; i < k; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(`THE ${k} TIMES ROTADED ARRAY IS - ${out}`);
}
rotate([1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13, 15]);


// 2.IIFE

(function (arr) {
    var k = 4;
    var out = arr.slice(k, arr.length);
    var count = out.length;
    for (var i = 0; i < k; i++) {
        out[count] = arr[i];
        count += 1;
    }
    console.log(`THE ${k} TIMES ROTADED ARRAY IS - ${out}`);
})([1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13, 15]);



// 3. Do the below programs in arrow functions
//    a.Print odd numbers in an array
//    b.Convert all the strings to title caps in a string array
//    c.Sum of all numbers in an array
//    d.Return all the prime numbers in an array
//    e.Return all the palindromes in an array

// A Do the below programs in arrow functions:

var PRIoddNO = (arr) => {
    let odd = [];
    arr.filter(num => {
        if (num % 2 !== 0)
            odd.push(num);
    })

    console.log(`${odd}`);
}
PRIoddNO([1, 2, 3, 4, 5, 6, 7, 8, 10, 9, 17]);


// B Convert all the strings to title caps in a string array:

var convert = (arro) => {
    var Titcapsarray = [];
    for (var i = 0; i < arro.length; i++) {
        Titcapsarray += arro[i][0].toUpperCase() + arro[i].slice(1);
    } console.log(`${Titcapsarray}`);
}
convert(["surya  ", "vijay ", "javascript ", "jack "]);


// C Sum of all numbers in an array:

var sum = (arr) => {
    var tsum = 0;
    for (i = 0; i < arr.length; i++) { tsum += arr[i]; }
    console.log(`${tsum}`);
}
sum([1, 2, 3, 4, 5]);


// D Return all the prime numbers in an array:

var pnum = (arr) => {
    let p = [];
    arr.forEach(num => {
        if (num <= 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return p.push(num);
    })
    console.log(`${p}`);
}
pnum([2, 5, 8, 9, 7, 12, 11, 16, 23, 31]);


// E Return all the palindromes in an array

var ispalindrome = (arr) => {
    var palintrome = [];
    arr.filter(element => {
        var str = String(element);
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] == str[j]) {
                i++;
                j--;
            }
            else
                return false;
        }
        return palintrome.push(element);
    })
    console.log(`${palintrome}`);

}
ispalindrome(["rotor", "level", "day", "class", "madam", "malayalam", "car"]);