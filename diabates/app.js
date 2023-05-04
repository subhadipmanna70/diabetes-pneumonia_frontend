
const form = document.querySelector('form');
const result = document.getElementById('result');


form.addEventListener('submit',(event) => {

  event.preventDefault();

  const preg = parseInt(document.getElementById('preg').value);
  const glucose = parseInt(document.getElementById('glucose').value);
  const bp = parseInt(document.getElementById('bp').value);
  const st = parseInt(document.getElementById('st').value);
  const insulin = parseInt(document.getElementById('insulin').value);
  const bmi = parseFloat(document.getElementById('bmi').value);
  const dpf = parseFloat(document.getElementById('dpf').value);
  const age = parseInt(document.getElementById('age').value);
  fetch('http://127.0.0.1:8000/diabetes_test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      preg,
      glucose,
      bp,
      st,
      insulin,
      bmi,
      dpf,
      age
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.prediction);
    if (data.prediction === 1) {
      result.innerHTML = "Person is affected by diabetes";
  }
  else {
      result.innerHTML = "Person is safe";
  }
  })
  .catch(error => console.error(error));
});