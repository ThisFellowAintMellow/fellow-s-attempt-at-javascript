/*
for (i = 20; i> -1 ; i--)[
    console.log(i)
]
//example of a FOR loop


var list = [
    "item 1",
    "item 2",
    "item 3"
]
list.push("item 4")
list.push("item 5")

for (listIndex = 0; listIndex < list.length; listIndex++){
    console.log(list[listIndex])
}
//an example of indexing a list using a FOR loop

let cards = ["diamond", "spade", "heart", "club"]
let currentCard = ""
while (currentCard != "spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)
//example of a WHILE loop.
*/
let items = ["item1", "item2", "item3", "item4"]
const check = () =>{
if (items[3] = "item3"){
    console.log("found it")
}
else{
    console.log("it ain't here chief")
}
}
check()