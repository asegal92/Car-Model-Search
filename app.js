document.querySelector('#getVehicle').addEventListener('submit', (e) => {
  e.preventDefault()

let search = document.querySelector('input[type="text"]').value

fetch(`https://api.api-ninjas.com/v1/cars?model=${search}`, {
  method: 'GET',
  headers: { 'X-Api-Key': '/CRLZM9TIJ+VN76XFH77Zw==PlvJNGw0EuFPY2qJ'},
  contentType: 'application/json',
  })
  .then( response => response.json()
  .then( function(modelsFound){
  const car = modelsFound[0]
      // console.log(car)
      // console.log(modelsFound)
  document.querySelector('#make').innerText = car.make
  document.querySelector('#year').innerText = car.year
  document.querySelector('#class').innerText = car.class
  document.querySelector('#cylinders').innerText = car.cylinders
  document.querySelector('#combination_mpg').innerText = car.combination_mpg
  document.querySelector('#drive').innerText = car.drive
  })
  )
})


