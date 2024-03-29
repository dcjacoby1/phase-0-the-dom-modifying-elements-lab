//.remove removes the main and all of its child elements
main.remove()
//creates an h1 element called h1
const newHeader = document.createElement("h1")
//sets the id of newHeader to victory
newHeader.id = "victory"
//sets the textcontent equal to "Dan is the champion"
//difference between innerHTML and textContent is that innerHTML allows for inserting HTML tags as well
//for example an <li> can be added with innerHTML but not textContent
newHeader.innerHTML = "Dan is the champion"
//to add to existing: newHeader.innerHTML += "Dan is the champion"