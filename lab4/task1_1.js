const max = document.querySelector("#max-input");
const min = document.querySelector("#min-input");
const len = document.querySelector("#length-input");
const countButton = document.querySelector("#count-button");

function createArrays(length) {
    const maxValue = parseInt(max.value);
    const minValue = parseInt(min.value);
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < length; i++) {
        const num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        const num2 = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        arr1.push(num);
        arr2.push(num2);
    }
    const result = document.getElementById("result");
    result.innerHTML = `Array 1: ${arr1.join(", ")}
    <br>
    <br>Array 2: ${arr2.join(", ")}`;

    let smallestCommon = undefined;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && (smallestCommon === undefined || arr1[i] < smallestCommon)) {
                smallestCommon = arr1[i];
            }
        }
    }

    // sort both arrays by bubble method
    const arr1Sorted = bubbleSort(arr1);
    const arr2Sorted = bubbleSort(arr2);

    function bubbleSort(array) {
        const arr = [...array];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    if (smallestCommon !== undefined) {
        result.innerHTML += `<br><br>The smallest value that both arrays have in common is ${smallestCommon}.`;
    } else {
        result.innerHTML += "<br><br>The arrays have no values in common.";
    }

    result.innerHTML += `<br><br>Array 1 sorted: ${arr1Sorted.join(", ")}
  <br>
  <br>Array 2 sorted: ${arr2Sorted.join(", ")}`;
}

countButton.addEventListener("click", function () {
    createArrays(parseInt(len.value)); // change the length as desired
});