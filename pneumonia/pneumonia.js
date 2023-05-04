

let form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    axios.post("http://127.0.0.1:8000/pneumonia_test", formData)
       .then((res) => {
          console.log(res.data.prediction)
    if (res.data.prediction === 1) {
        result.innerHTML = "Person is Pneumonia affected";
    }
    else {
        result.innerHTML = "Person is safe";
    }

    })
    .catch((err) => console.log(err))
})
