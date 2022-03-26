var carta1 = {
  nome: "Saint Seiya",
  imagem:
    "https://i.pinimg.com/736x/25/e0/17/25e017ead93c4cf341bf96a1d9bfb8f4.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    cosmo: 9
  }
};

var carta2 = {
  nome: "Ikki de Fênix",
  imagem: "https://pbs.twimg.com/media/FJ8Ue2-WYAEv14H.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    cosmo: 7
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirvf4w1G_p_r66pBo7ZCgBVi7bogLpGWxxA&usqp=CAU",
  atributos: {
    ataque: 7,
    defesa: 9,
    cosmo: 8
  }
};

var carta4 = {
  nome: "Saga de gêmeos",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwT9iqNPFMiQ5cRZ3mSg6tz9TOZkLQk0cJVA&usqp=CAU",
  atributos: {
    ataque: 9,
    defesa: 9,
    cosmo: 10
  }
};

var carta5 = {
  nome: "Hyoga de cisne",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTce30q5YkBhZFh_325FVUlfmlJ2Zjpo03VzA&usqp=CAU",
  atributos: {
    ataque: 6,
    defesa: 9,
    cosmo: 7
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  //  var elementoResultado = document.getElementById("resultado");
  //  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  //  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    //    elementoResultado.innerHTML = "Você venceu!";
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    // elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
    htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
  } else {
    // elementoResultado.innerHTML = "Empatou";
    divResultado = "<p class='resultado-final'>Empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //forma diferente e antiga
  // divCartaJogador.style.backgroundImage = url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //forma diferente e antiga
  // divCartaJogador.style.backgroundImage = url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}