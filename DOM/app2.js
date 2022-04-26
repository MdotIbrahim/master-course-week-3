const input = document.getElementById("input")
const button = document.getElementById("submit")
const list = document.getElementById("list")

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value
    list.appendChild(listItem)
    input.value = ""
    console.log(listItem)
})

//activity - hide/show button
const hideButton = document.getElementById("hide")
hideButton.addEventListener("click", () => {
    if (list.style.display == "none") {
        list.style.display = "block";
        hideButton.textContent = "hide"; //renaming hide button to hide (when the list is visible)
    }else {
        list.style.display = "none";
        hideButton.textContent = "show"; //renaming hide button to stay (stays the same)
    }
})

//activity - remove last item
const removeButton = document.getElementById("remove")
removeButton.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    list.removeChild(lastItem);
})

window.setTimeout((something) => {
    console.log(something)
}, 3000, "Hey, you were 3 seconds early.")


const listItems = document.getElementById("list")

// for (let listItem of listItems){
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent = listItem.textContent.toUpperCase()
//     })
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent = listItem.textContent.toLowerCase()
//     })
// }

list.addEventListener("mouseover", (event) => {
    event.target.textContent = event.target.textContent.toUpperCase()
})
list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase()
})

// list.addEventListener("mouseover", (event) => {
//     //console.log(event.target.tagName);
//     if( event.target.tagName.toLowerCase() == 'li' ) 
//         event.target.textContent = event.target.textContent.toUpperCase();
//     //console.log(event);
// });
// list.addEventListener("mouseout", (event) => {
//     if( event.target.tagName.toLowerCase() == 'li' ) 
//         event.target.textContent = event.target.textContent.toLowerCase();
// });

document.addEventListener("click", (event) => {
    console.log(event)
    console.log(event).target
})

let paragraph = document.getElementById("ParagraphOfLorem")
let parent = paragraph.parentNode
window.setTimeout(() => {
    parent.removeChild(paragraph)
}, 2000) 

// better way to remove items from a list
list.addEventListener("click", (event) => {
    const li = event.target
    const ul = li.parentNode
    ul.removeChild(li)
})


// here you can see how you can call getElementsByTagName() on a list element, not just the "document"

// const list = document.getElementById("list"); // list is the <ul> element
// const ex = list.getElementsByTagName('li'); // ex will be an array of the <li> elements included in the <ul>, notice how it's called on the list (the <ul>), not on the document
// console.log(ex);