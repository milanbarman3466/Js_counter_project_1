let minus = document.querySelector("#minus");
let number = document.querySelector("#number");
let plus = document.querySelector("#plus");

// Number set
let setNumber = 1;
number.innerHTML = setNumber;

// increase the value
plus.addEventListener("click", function () {
  setNumber++;
  number.innerHTML = setNumber;
});


// decrease the value
minus.addEventListener("click", function () {
    if(number.textContent>1){
        setNumber--;
        number.innerHTML = setNumber;
    }else{
        alert("you can't decreases the value")
    }
});
