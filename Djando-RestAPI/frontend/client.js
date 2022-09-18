const loginForm = document.getElementById('login-form')
const baseEndpoint = 'http://localhost:8000/api'

if(loginForm) {
  loginForm.addEventListener('submit', handleLogin)
}

function handleLogin(e){
  e.preventDefault()
  const loginFormData = new FormData(e.target)
  const loginObj = Object.fromEntries(loginFormData)

  const loginEndpoint = `${baseEndpoint}/token/`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginObj)
  }

  fetch(loginEndpoint, options).then(res => {
    console.log(res)
    return res.json()
  }).then(x => {
    console.log(x);
  }).catch(err => console.log(err))
}
