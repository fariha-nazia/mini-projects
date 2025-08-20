// console.log('js of nav added');

// 1st: Fetching the parent ul so that I can make all the li do some work.
const ulTag = document.getElementById("nav-container");
console.log(ulTag);

// 2nd: Fetching the children
 const listItems = ulTag.getElementsByTagName("li");
 console.log(listItems);

//  5th: setting the last click to null so that when clicked once the value become 0
let lastClicked = null;
//  3rd: Making a for loop so that I can get one item from list of items
for( let singleListItem of listItems){

    singleListItem.addEventListener("click", function(){
        // console.log(singleListItem.innerText);

        // 6th: now making a if so that the style works
        if(lastClicked == null){
            // 4th: putting color (for style)
            singleListItem.style.backgroundColor = "purple";
            singleListItem.style.color = "white";
            lastClicked = singleListItem;
        }
        else{
            lastClicked.style.backgroundColor = "transparent";
            lastClicked.style.color = "black";

            singleListItem.style.backgroundColor = "purple";
            singleListItem.style.color = "white";
            lastClicked = singleListItem;

        }
     

    });
}