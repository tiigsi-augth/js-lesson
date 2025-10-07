
const inputs=  document.getElementById("inputs")
const btn = document.getElementById('btn')
const ul = document.querySelector('.ul')

btn.addEventListener('click',todoList)



function todoList(){
    if(inputs.value.trim() ===""){
        alert("please enter data")
    }
const data= inputs.value
  const li= document.createElement("li")
  li.textContent=data


  ul.appendChild(li)
  inputs.value=''

}