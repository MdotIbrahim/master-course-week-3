const myHeading = document.getElementById("heading")
const input1 = document.getElementById("input1")
const button = document.getElementById("button1")
// const drinks = document.getElementsByTagName("li")[0] // list from html becomes an array in javascript
const list = document.getElementsByTagName("li")

myHeading.addEventListener("click", () => {
    myHeading.style.color = "red"
})

button.addEventListener("click", () => {
    myHeading.style.color = input1.value
    // drinks.style.color = "violet"
    
});
console.log(list.length) //output showing all lists length..
list[0].style.color = "red" //type this directly into console to change the first item in the list to red (letter C is this case)
console.log(list[1])
console.log(list[2])
console.log(list[3])

//activity  - change list items to orange colour

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange"
}

// activity - change any class called not-orange to red colour
const notOrange = document.getElementsByClassName("not-orange")

for (let i = 0; i < notOrange.length; i++) {
    notOrange[i].style.color = "red"
}

//query selector lets class/id text include # or . respectively 
const listItems = document.querySelectorAll("li:nth-child(even)") // select any of the li items and inside that select even ones...
console.log(document.querySelectorAll(".green"))
console.log(listItems)
console.log(listItems.length)

for (let i = 0; i< listItems.length; i++) {
    listItems[i].style.color = "lightgreen"
    }

const placeholder = document.getElementById("placeholder")
const input2 = document.getElementById("input2")
const button2 = document.getElementById("button2")
const list2 = document.getElementById("list")

// button2.addEventListener("click", () => {
//     placeholder.style.color = "goldenrod"
//     placeholder.textContent = input2.value // this version replaces the full heading with whatever is in text box
// })

button2.addEventListener("click", () => {
    placeholder.style.color = "goldenrod"
    placeholder.textContent = `I like ${input2.value}`
    // code below replaces contents of ALL inside this ID
    list2.innerHTML = `<li>${input2.value}</li>`
})

const image = document.getElementById("image")
const input3 = document.getElementById("input3")
const button3 = document.getElementById("button3")

console.log(image)

button3.addEventListener("click", () => {
    image.src = input3.value
})

// console.log(image.style)

const image2 = document.getElementById("image")
const button4 = document.getElementById("button4")

button4.addEventListener("click", () => {
    if (image2.style.display == "none") {
        image2.style.display = "block"; //dont render the image
        button4.textContent = "Hide The Picture again";     
    }else {
        image.style.display = "none";
        button4.textContent = "Show The Picture";
    }
})