//Grab the save-el paragraph and store it into variable save-El
let save_El= document.getElementById("save-el")
let Change= document.getElementById("change")
let count = 0
function increment(){
    count +=1
    Change.textContent=count
}
function save(){
    //Create a variable that contains both count and dash separator "12- "
    let entry= count + " - "
    //Render the variable in the saveEl using innertext
    //NB: Make sure to not delete the existing content of paragraph
    console.log(count)
    save_El.textContent +=entry
    Change.textContent=0
    count=0
}
