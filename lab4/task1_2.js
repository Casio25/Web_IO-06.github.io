const inputValue = document.querySelector("#length-input");
const countButton = document.querySelector("#count-button");
const result = document.querySelector(".result");


function getRandom(r){
    return Math.floor(Math.random() * r)
}

function count() {
    console.log(inputValue.value);
    let evenIndexArr = [];
    let evenArr = [];
    let randomArray = new Array(Number(inputValue.value)).fill(null).map(() => { return getRandom(inputValue.value); });
    for (let i = 0; i < randomArray.length-1; i++){
        if (i%2 == 0){
            evenIndexArr.push(randomArray[i])
        }
    } for (let i = 0; i < randomArray.length - 1; i++){
        if (randomArray[i] % 2 == 0) {
            evenArr.push(randomArray[i]);
    }
}
    function insertionSort(arr){
        for (let i = 1, l = arr.length; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = current;
        }
        return arr;
    };

    function swapElements(arr, i1, i2) {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
        return arr;
    }

    const maxEvenIndex = Math.max(...evenIndexArr);
    const maxEven = Math.max(...evenArr);
    result.innerHTML = "Початковій масив, довжинна якого задана користувачем: " + randomArray + '</br>'
    + "</br>" + `Масив з парними індексами елементів: ` + evenIndexArr + "</br>"
    + "</br>" + "Максимальне значення цього масиву: " +  maxEvenIndex + "</br>"
    + "</br>" + "Індекс цього значення в початковому масиві: " + randomArray.indexOf(maxEvenIndex) + "</br>"
    + "</br>" + "Масив з парними елементами: " + evenArr + "</br>"
    + "</br>" + "Максимальне значення цього масиву: " + maxEven + "</br>"
    + "</br>" + "Індекс цього значення в початковому масиві: " + randomArray.indexOf(maxEven) + "</br>"
    + "</br>" + "Початковий масив, в якому елементи з максимальними значеннями, помінялись місцями: " + swapElements(randomArray, randomArray.indexOf(maxEvenIndex), randomArray.indexOf(maxEven)) + "</br>"
    + "</br>" + "Ще раз цей масив, але тепер відсортованний методом вставки: " + insertionSort(swapElements(randomArray, randomArray.indexOf(maxEvenIndex), randomArray.indexOf(maxEven))) + "</br>"
}

countButton.addEventListener('click', count);