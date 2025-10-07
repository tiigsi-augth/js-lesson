///functions


// function salaan(){
//     alert("hello   everyone")
// }




// function great(name){
//     alert("hello "+ name)
// }





// function calculate(a,b){
//     console.log(a+a)
// }


// calculate()




// anon function


// const  multi=  function(x,y){
//     console.log(x*y)
// }


// multi(3,4)


// const  sub=function(x,y){
//     return x/y
  
// }



// console.log(sub(6,2))


// const sum= (x,y)=>{
//     return  x+y
// }


// const firts=(x,y)=>x+y


// console.log(firts(20,40))


// console.log( sum(2,100))




// let  khudaar= ["muus", "xabxab","liin",'shamaam',"mango",`tufaax`,["bariis"]]
//  console.log(khudaar[6][0])

//     khudaar.push('baasto')
//     khudaar.unshift("suqaar")


//     console.log(khudaar)
//    khudaar.pop()
//    khudaar.shift()
//    khudaar.splice(3,0,"avacado")
//    khudaar.splice(2,2)

// console.log(khudaar)

// let nums= [2,3,4,5,5,6]

// console.log(nums)



// let  student ={
//     name:"ali",
//     grade:8,
//     address:'market'
// }

// let employee={
//     "name":"muuse",
//     'phone':"234570"

// }

// console.log("heello"+student.name)
// console.log(employee)

// student.school = "tiigsi"
// delete student.grade
// console.log(student)


// console.log(`this  is new  employee and his name is ${employee.name}`)




// console.log(document)


//  const title=  document.getElementById("cinwaan")

//  console.log( document.getElementById("cinwaan").textContent)


// title.textContent="hello  from jvascript "


// title.style.color="red"






// const  container=  document.getElementById("main")

// const newItem= document.createElement("h2")
// newItem.textContent="hell we added this in js"

// container.appendChild(newItem)





// fetch("https://fakestoreapi.com/products.")
// .then(response=> response.json())
// .then(info=>  console.log(info[0].title))
// .catch(error => {
//     console.log("khalad:", error);
//   });




async function getData(){
    
    
    try {
       const response= await  fetch("https://fakestoreapi.com/products")
      const info= await response.json()
   
      console.log(info)
    
   } catch (error) {
     console.log(error)
   }

}


getData()