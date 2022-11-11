// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var arr = [1, 2, 1, 2, 3, 1, 5, 2, 5, 4, 6, 7, 8, 9, 10];
function removeDuplicates() {
  arr = arr.filter((item, index, srcArr) => {
    return index === srcArr.indexOf(item);
  });
}

removeDuplicates();
console.log(arr);
