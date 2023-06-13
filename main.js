let inputElement = document.getElementById('userNameInput')
inputElement.placeholder= 'Enter usernsme'
inputElement.style.fontSize='20px'

//2.
let ulElement= document.getElementById('list')
for (let i = 1; i <= 4; i++) {
    const liElement = document.createElement('li')  
    ulElement.appendChild(liElement)
    liElement.textContent='lorem'
}

//3.
const myUlElement = document.getElementById('myList')
let liCount = myUlElement.children.length
let middleIndex = Math.floor(liCount/2)
let middleLiElement = ulElement.children[middleIndex]
middleLiElement.textContent='Modified Item'


//בונוס
const thirdChild = ulElement.children[2]
thirdChild.style.color = 'blue'
thirdChild.style.fontFamily = "Arial"
