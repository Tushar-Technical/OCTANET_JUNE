
var ab = 0;
function adddiv1() {
    if (input.value == "") {

    }
    else {

        let i = ab
        console.log(ab)
        let a = document.body.getElementsByClassName("container1")[0]
        var div = document.createElement("div")
        div.setAttribute("class", "div1")
        div.setAttribute("id", `id${i}`)
        a.appendChild(div)
        
        ab++;
      

        div.appendChild(document.createTextNode(input.value));
        input.value = ""; 


        div.addEventListener("click", changecolor)



        var btn = document.createElement("div")
        btn.innerHTML = "X"
        btn.setAttribute("class", "buttoninner")
        btn.setAttribute("id", "id2")
        div.appendChild(btn)
       
        btn.addEventListener("click", remove);


        function remove() {
            var c = div.getAttribute("id")
          
            document.getElementById(`${c}`).remove();

        }


        function changecolor() {
            div.classList.add("yellow")
            btn.classList.add("buttoncolor");

        }


    }
}


let btnn = document.getElementsByClassName("button1")[0]
btnn.addEventListener("click", adddiv1);


