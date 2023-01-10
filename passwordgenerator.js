let gen = document.querySelector('.gen')
let box = document.querySelector('.box')

function passwordgen(){
    let length = 3
    let result = ''
    let res1 = ''
    let res2 = ''
    let alp = 'AzbYCxWdEvUfGtShIrQjKpOlNmMnLoPkJqRiSHTgFuVeDwXcByaZ'
    let a = alp.length
    let chars = '!@#$%&'
    let c = chars.length
    let nos = '0123456789'
    let n = nos.length
  for(let i = 0; i<length; i++){
  result += alp.charAt(Math.floor(Math.random()*a))
  res1 += chars.charAt(Math.floor(Math.random()*c))
  res2 += nos.charAt(Math.floor(Math.random()*n))
  }
  let almostfinal = (result).substring(0,4)
  let almostfinal2 = res1.substring(0,4)
  let almostfinal3 = res2.substring(0,4)

  var final = almostfinal + almostfinal2 + almostfinal3;
  box.value = final
 }

 function weak(){
  let length = 10
  let result = ''
  let res1 = ''
  let res2 = ''
  let alp = 'AabBCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
  let a = alp.length
  let chars = '!@#$%&'
  let c = chars.length
  let nos = '0123456789'
  let n = nos.length
for(let i = 0; i<length; i++){
result += alp.charAt(Math.floor(Math.random()*10))
res1 += chars.charAt(Math.floor(Math.random()*c))
res2 += nos.charAt(Math.floor(Math.random()*n))
}
let almostfinal = (result).substring(0,6)
let almostfinal3 = res2.substring(0,2)

var final = almostfinal + almostfinal3;
box.value = final
 }

  gen.onclick =()=>{
   passwordgen()
  }
  $(".gen2").click(weak)
