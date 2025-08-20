console.log('the js file added');

const count = document.getElementById("count-number");
console.log(count.innerText);

const counter = document.getElementById('counter');
counter.addEventListener('click', function(){
    console.log('clicking the whole box');

    if(increaseBtn.getAttribute("disabled") == null){

            // Pause the increment and decrement
            increaseBtn.setAttribute("disabled", true);
            decreaseBtn.setAttribute("disabled", true);
            counter.classList.add("bg-red-500");
    }
    else{

            increaseBtn.removeAttribute("disabled", true);
            decreaseBtn.removeAttribute("disabled", true);
            counter.classList.remove("bg-red-500");
            count.innerText = 0;

    }

});


// Declaring the constant
const increaseBtn = document.getElementsByClassName('increase-btn')[0];
const decreaseBtn = document.getElementsByClassName('decrease-btn')[0];

increaseBtn.addEventListener('click', function(event){
    // console.log('increase clicked');

    // 1st: converting the string to a number
    let currentCount = Number(count.innerText);
    // 2nd: Doing the increment
    currentCount++;
    // 3rd: Setting the new value in the UI
    count.innerText = currentCount;
    event.stopPropagation();
    console.log(currentCount);
});

decreaseBtn.addEventListener('click', function(event){
     // console.log('decrease clicked');

    // 1st: converting the string to a number
    let currentCount = Number(count.innerText);
    // Doing the decrement 
    currentCount--;
    // 3rd: Stetting the new value in the UI
    count.innerText = currentCount;
    event.stopPropagation();
    console.log(currentCount);
});

