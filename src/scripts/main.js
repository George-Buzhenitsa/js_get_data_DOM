'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const getPopulationAmount = Array.from(population)
  .map((n) => n.innerHTML.split(',').join(''))
  .map((n) => Number(n));

const getTotal = getPopulationAmount.reduce((total, n) => total + n, 0);
const getAverage = Math.floor(getTotal / 9);

totalPopulation.textContent = transformAmount(getTotal);
averagePopulation.textContent = transformAmount(getAverage);

function transformAmount(value) {
  const valueToString = String(value);
  const startIndex = valueToString.length % 3 === 0 ? 0 : 1;
  const tempArray = [];
  let tempStr = '';

  if (startIndex === 1) {
    tempArray.push(valueToString[0]);
  }

  for (let i = startIndex; i <= valueToString.length; i++) {
    if (tempStr.length === 3) {
      tempArray.push(tempStr);
      tempStr = '';
    }

    tempStr += valueToString[i];
  }

  return tempArray.join(',');
}
