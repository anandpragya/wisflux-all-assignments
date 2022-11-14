//3.Show all the values of an array in a html webpage using DOM and forEach method?

const array1 = ["JOHN","INDIA","RITU","YES"];
let list = document.getElementById("myList");
  
array1.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})