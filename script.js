const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const repassword = document.querySelector('#repassword')
const phone=document.querySelector("#phone")

function error (input, message) {
  input.className = 'form-control is-invalid'
  const div = input.nextElementSibling
  div.innerText = message
  div.className = 'invalid-feedback'
}


function checkEmail (input) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  if(regex.test(input.value)){
    success(input)
  }else{
    error(input,"incorrect mail format")
  }
}

function success (input) {
  input.className = 'form-control is-valid'
}



function checkRequired (inputs) {
  inputs.forEach(function (input) {
    if (input.value === '') {
      error(input, `${input.id} is required`)
    } else {
      success(input)
    }
  })
}



function checkPassword(input1,input2){
  if(input1.value!==input2.value){
      error(input2,"parolalar eşleşmiyorr")
  }
}



function checkLength(input,min,max){
  if(input.value.length<min){
    error(input,`${input.id} en az ${min} karakter olmalıdır`)
  } else if(input.value.length>max){
    error(input,`${input.id} en fazla ${max} karakter olmalıdır`)
  }else{
    success(input)
  }
}

function checkPhone(input){
  var exp=  /^\d{10}$/;
  if(!exp.test(input.value)){
    error(input,"telefon formata uygun olmalıdır")
  }

}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkRequired([username, email, password, repassword,phone])
  checkEmail(email)
  checkLength(username,7,14)
  checkLength(password,7,14)
  checkPassword(password,repassword)
  checkPhone(phone)

  
})
