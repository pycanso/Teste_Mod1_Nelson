buttonA = document.getElementById('btnA');
buttonB = document.getElementById('btnB');
pAtextA = document.getElementById('PontosA');
pAtextB = document.getElementById('PontosB');
ptextRec = document.getElementById('Record');
blockA = document.getElementById('nav');
blockB = document.getElementById('nav');
fieldA = document.getElementById('jogA');
fieldB = document.getElementById('jogB');
pvalorJogadaA = document.getElementById('valorJogA');
pvalorJogadaA.style.color = "red";
pvalorJogadaB = document.getElementById('valorJogB');
pvalorJogadaB.style.color = "green";

let _gValArrayA = [];
let _gValArrayB = [];
let _gAlenght;
let _gBlenght;
let _gJogadaTotal = 0;
let _gRecord = localStorage.getItem('record') || [""];
let _gPA = 0;
let _gPB = 0;

function blocoA() {
  for (let i = 0; i < 9; i++) {
    valA = Math.floor(Math.random() * 20 + 1);
    _gValArrayA[i] = valA;
    localStorage.setItem('BlocoA', _gValArrayA);
    btnMaker(valA);
  }
  function btnMaker(txt) {
    let btnA = document.createElement('button');
    btnA.setAttribute('type', 'button');
    btnA.style.width = '110px';
    btnA.style.height = "110px"
    btnA.style.lineHeight = '50px';
    btnA.style.margin = '1%';
    btnA.style.fontSize = '2em';
    btnA.value = "A" + txt;
    btnA.style.backgroundColor = "red";
    btnA.textContent = txt;
    fieldA.appendChild(btnA);
  }
}
function blocoB() {
  for (let i = 0; i < 9; i++) {
    valB = Math.floor(Math.random() * 20 + 1);
    _gValArrayB[i] = valB;
    localStorage.setItem('BlocoB', _gValArrayB);
    btnMaker(valB);
  }
  function btnMaker(txt) {
    let btnB = document.createElement('button');
    btnB.setAttribute('type', 'button');
    btnB.style.width = '110px';
    btnB.style.height = "110px"
    btnB.style.lineHeight = '50px';
    btnB.style.margin = '1%';
    btnB.style.fontSize = '2em';
    btnB.value = txt;
    btnB.style.backgroundColor = "green";
    btnB.textContent = txt;
    fieldB.appendChild(btnB);
  }
}

function jogarA() {
  var jogada = Math.floor(Math.random() * 20 + 1);
  pvalorJogadaA.innerHTML = "SAIU O Nº: " + jogada + "Jog.A";
  pvalorJogadaB.innerHTML = "";
  for (let i = 0; i < _gValArrayB.length; i++) {
    let b = parseInt(_gValArrayB[i]);

    if (jogada == b && _gValArrayB[i] == jogada) {
      alert("Igual " + jogada);
      _gPA = _gPA + jogada;
      pAtextA.innerHTML = "Pontos A: " + _gPA;
      _gValArrayB.splice(i, 1);
      i--;
      const container = document.querySelector('#jogB');
      removeAllChildNodes(container);
      _gBlenght = _gValArrayB.length;
      newBlocoB();
      localStorage.setItem('BlocoB', _gValArrayB);
    } else if (jogada == 13) {
      _gPB = (_gPB * 2);
      pAtextB.innerHTML = "Pontos B: " + _gPB;
    } else if (_gJogadaTotal == 30) {
      window.location.replace("draw.html");

    } else if (_gBlenght === 0) {
      window.location.replace("WinA.html");
      var newRecord = _gPA;
      if (newRecord > _gRecord) {
        ptextRec.innerHTML = "Record: " + _gRecord;
        localStorage.setItem("record", newRecord);
        alert("Obteve um novo RECORDE!!");
      }
    }
  }
  _gJogadaTotal++;
  buttonA.style.display = "none";
  buttonB.style.display = "block";
}

function jogarB() {
  var jogada = Math.floor(Math.random() * 20 + 1);
  pvalorJogadaB.innerHTML = "SAIU O Nº: " + jogada + " Jog.B";
  pvalorJogadaA.innerHTML = "";

  for (let i = 0; i < _gValArrayA.length; i++) {
    let a = parseInt(_gValArrayA[i]);

    if (jogada == a && _gValArrayA[i] == jogada) {
      alert("Igual " + jogada);
      _gPB = _gPB + jogada;
      pAtextB.innerHTML = "Pontos B: " + _gPB;
      _gValArrayA.splice(i, 1);
      i--;
      const container = document.querySelector('#jogA');
      removeAllChildNodes(container);
      _gAlenght = _gValArrayA.length;
      newBlocoA();
      localStorage.setItem('BlocoA', _gValArrayA);
    } else if (jogada == 13) {
      _gPA = (_gPA * 2);
      pAtextA.innerHTML = "Pontos A: " + _gPA;
    } else if (_gJogadaTotal == 30) {
      window.location.replace("draw.html");
    } else if (_gAlenght === 0) {
      window.location.replace("WinB.html");
      var newRecord = _gPB;
      if (newRecord > _gRecord) {
        ptextRec.innerHTML = "Record: " + _gRecord;
        localStorage.setItem("record", newRecord);
        alert("Obteve um novo RECORDE!!");
      }
    }
  }
  _gJogadaTotal++;
  buttonB.style.display = "none";
  buttonA.style.display = "block";
}

function newBlocoA() {
  for (let i = 0; i < _gAlenght; i++) {
    na = _gValArrayA[i];
    btnMaker(na);
  }
  function btnMaker(txt) {
    let btnA = document.createElement('button');
    btnA.setAttribute('type', 'button');
    btnA.style.width = '120px';
    btnA.style.height = "120px"
    btnA.style.lineHeight = '50px';
    btnA.style.margin = '1%';
    btnA.style.fontSize = '2em';
    btnA.value = txt;
    btnA.style.backgroundColor = "red";
    btnA.textContent = txt;
    fieldA.appendChild(btnA);
  }
}
function newBlocoB() {
  for (let i = 0; i < _gBlenght; i++) {
    nb = _gValArrayB[i];
    btnMaker(nb);
  }
  function btnMaker(txt) {
    let btnB = document.createElement('button');
    btnB.setAttribute('type', 'button');
    btnB.style.width = '120px';
    btnB.style.height = "120px"
    btnB.style.lineHeight = '50px';
    btnB.style.margin = '1%';
    btnB.style.fontSize = '2em';
    btnB.value = txt;
    btnB.style.backgroundColor = "green";
    btnB.textContent = txt;
    fieldB.appendChild(btnB);
  }
}
function removeAllChildNodes(btnB) {
  while (btnB.firstChild) {
    btnB.removeChild(btnB.firstChild);
  }
}
