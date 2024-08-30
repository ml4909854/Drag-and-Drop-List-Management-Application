
let lists = document.getElementsByClassName("list")
let left = document.getElementById("left")
let right = document.getElementById("right")

for(list of lists){
   list.addEventListener("dragstart" , function(e){
       let selected = e.target

       right.addEventListener("dragover" , function(e){
        e.preventDefault()

       })
       right.addEventListener("drop" , function(e){
        if(selected){
            right.appendChild(selected)
            selected = null
        }
       })
       left.addEventListener("dragover" , function(e){
        e.preventDefault()

       })
       left.addEventListener("drop" , function(e){
        if(selected){
            left.appendChild(selected)
            selected = null
        }
       })
   })
}