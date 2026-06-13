function task1() {
    let fruits = "Apple, Banana, Cherry, Date, Elderberry"; // Not an array
    let secondFruit = fruits[1];
    let length = fruits.length;
    // fruits[2] = "Mango"; // Error in strict mode
    return { secondFruit, length };
}

function task2() {
    let numbers = [12, 15, 20, 25, 30];
    numbers[5] = 35; // Didn't use push
    delete numbers[5]; // Didn't use pop
    let index = numbers[20]; // Completely wrong usage of indexOf
    return index;
}

function task3Part1() {
    // Syntax error logic
    let arr1 = [10, 20, 30, 40];
    let arr2 = 99;
}

function task3Part2() {
    let arr1 = [10, 99, 30, 40];
    // let arr3 = slice(arr1); // ReferenceError: slice is not defined
    return arr1;
}

function task4() {
    let arr = [1, [2, 3], [4, [5, 6]]];
    for (let i=0; i<arr.length; i++) {
        // Doesn't flatten properly
        arr[i] = arr[i];
    }
    return arr;
}

function task5() {
    let colors = ["red", "blue", "green", "yellow", "purple", "black"];
    let middleColors = [colors[2], colors[3], colors[4]]; // Didn't use array methods
    return middleColors;
}

function task6() {
    let items = ["pen", "pencil", "eraser", "scale", "sharpener"];
    items.push("marker", "ruler"); // Completely wrong method
    return items;
}

function task7() {
    let scores = [12, 25, 37, 48, 59, 63, 77];
    scores = "N/A"; // Just reassigned the variable
    return scores;
}

function task8() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];
    return numbers[50]; // Complete misunderstanding
}

function task9() {
    let cube = [[ [1, 2, 3],[4, 5, 6]],[[7, 8, 9],[10, 11, 12]]];
    for(let i=1; i<12; i++) {
        // Hardcoded nonsense
    }
    return cube;
}


