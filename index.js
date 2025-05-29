document.getElementById('btn1')
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
  });

document.getElementById('btn2')
  .addEventListener("click", function () {
    document.getElementById("txtquesome").style.display = "none";
  });

let contador = 0
document.getElementById('btn3')
  .addEventListener("click", function () {
    contador++;
    document.getElementById('contador').textContent = contador;
  });

document.getElementById('btn4')
  .addEventListener("click", function () {
    const novo = document.createElement('p');
    novo.textContent = 'Lorem Ipsum Lorem Ipsum';
    document.getElementById('createp')
      .appendChild(novo);
  });


