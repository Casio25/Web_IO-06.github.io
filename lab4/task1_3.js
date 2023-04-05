const elementQty = document.querySelector("#elementQty");
const countButton = document.querySelector("#count-button");
const result = document.querySelector(".result");

const myArray = new Array()
const randomInt = max => {
    return Math.floor(Math.random() * max);
}

countButton.addEventListener('click', task1);

function task1() {
  for(let i = 0; i < elementQty.value; i++) {
    myArray.push(randomInt(20))
  }

  result.innerHTML = "Початковий масив: " + myArray

  const minNum = Math.min(...myArray)
  const minNumIndex = myArray.indexOf(minNum);
  myArray.splice(minNumIndex,1);
  myArray.unshift(minNum)

  result.innerHTML += "<br>Запис мін. елементу на початок масиву: " + myArray

  const selectionSort = (array) => {
	const n = array.length;
	for (let i = 0; i < n - 1; i++) {
	  let max = i;
	  for (let j = i + 1; j < n; j++) {
		if (array[j] > array[max])
		  max = j;
	  }
	  let temp = array[i];
	  array[i] = array[max];
	  array[max] = temp;
	}
	return array;
  }

  result.innerHTML += "<br>Упорядкований масив у порядку зменшення: " + selectionSort(myArray);
}