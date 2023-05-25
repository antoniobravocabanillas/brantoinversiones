
//Slider
const phrases = ["AAL", "AAPL", "ACBI", "ADBE", "ADI", "ADP", "ADSK", "ALGN",
"AMAT", "AMGN", "AMZN", "ASML", "ATVI", "AVGO", "BABA", "BIDU", "BIIB", "BKNG",
"BMRN", "CARA", "CDNS", "CERN", "CHKP", "CHTR", "CMCSA", "COST", "CSCO", "CSX",
"CTAS", "CTSH", "CTXS", "DLTR", "EA", "EBAY", "FISV", "GILD", "GLOB", "GOOG", "GOOGL",
"HAS", "HOLX", "HSIC", "IDXX", "ILMN", "INCY", "INTC", "INTU", "ISRG", "JBHT", "JD", "KHC",
 "KLAC", "LBTYA", "LBTYK", "LRCX", "MAR", "MCHP", "MDLZ", "MELI", "META", "MNST", "MSFT",
 "MU", "MXIM", "NFLX", "NTES", "NVDA", "NXPI", "ORLY", "PAAS", "PAYX", "PCAR", "PEP",
  "PYPL", "QCOM", "REGN", "ROST", "SBUX", "SIRI", "SNPS", "STX", "SWKS", "TCOM", "TMUS",
   "TSLA", "TTWO", "TXN", "ULTA", "VOD", "VRSK", "VRTX", "WBA", "WDAY", "WDC", "WISH","WYNN", "XRAY", "ZM"]

//const phrases = ["Inversiones", "Financiamiento", "Planificacion", "Impuestos"]; // Frases a mostrar
const textElement = document.getElementById("t-slider"); // Elemento donde se muestra el texto
let currentIndex = 0; // Índice actual de la frase

function updateText() {
  textElement.textContent = phrases[currentIndex];
  currentIndex = (currentIndex + 1) % phrases.length;
}

setInterval(updateText, 1000); // Cambiar la frase











toggle.addEventListener('click', function () {
  menu.classList.toggle('active');
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('active');
});

servicios.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});

//Mision------------------------------------------------------------//Mision
const itemNosotros = document.getElementById("itemUno"); //Div de el ITEM UNO
var nuestraMision = "Construimos relaciones sólidas basadas en la transparencia, integridad y excelencia en el servicio. Nuestro objetivo: alcanzar metas financieras a largo plazo y brindar tranquilidad y seguridad en el camino al éxito.";

//VARIABLES PARA LA FUNCION 
var completarText = document.getElementById("mision-completar");
var masSobreMision = document.getElementById("leer-mas-sobre-mision");

function mostrarTexto() {
  
  completarText.textContent = nuestraMision;
  itemNosotros.style.height = "90%";
  
}

function ocultarTexto() {
  completarText.textContent = "";
  itemNosotros.style.height = "50%";
}

masSobreMision.onmouseenter = mostrarTexto;
masSobreMision.onmouseleave = ocultarTexto;
masSobreMision.addEventListener("touchstart",mostrarTexto)
masSobreMision.addEventListener("touchend",ocultarTexto)


//Mision----------------------------------------------------//Mision


//Viision------------------------------------------------------------//Vision
const itemNosotrosDos = document.getElementById("itemDos"); //Div de el ITEM UNO
var nuestraVision = "Con experiencia sólida y un enfoque centrado en el cliente, brindamos soluciones confiables, maximizando el potencial de crecimiento y protegiendo el patrimonio. Su tranquilidad y confianza son nuestra mayor prioridad en cada paso de su viaje financiero."

//VARIABLES PARA LA FUNCION 
var completarTextVision = document.getElementById("vision-completar");
var masSobreVision = document.getElementById("leer-mas-sobre-vision");

function mostrarTextoVision() {
  
  completarTextVision.textContent = nuestraVision;
  itemNosotrosDos.style.height = "90%";
  
}

function ocultarTextoVision() {
  completarTextVision.textContent = "";
  itemNosotrosDos.style.height = "50%";
}

masSobreVision.onmouseenter = mostrarTextoVision;
masSobreVision.onmouseleave = ocultarTextoVision;
masSobreVision.addEventListener("touchstart",mostrarTextoVision)
masSobreVision.addEventListener("touchend",ocultarTextoVision)


//Vision----------------------------------------------------//Vision


/*sobre nosotros */
/*sobre nosotros */
const itemSobreNosotros = document.getElementById("itemTres"); //Div de el ITEM UNO
var sobreNosotros = "Nuestra combinación única de conocimientos nos permite ofrecer soluciones innovadoras y estratégicas a nuestros clientes. Trabajamos juntos para maximizar el potencial de crecimiento de sus inversiones y garantizar su éxito financiero a largo plazo."

 var completarTextNosotros = document.getElementById("nosotros-completar");
var masSobreNosotros = document.getElementById("leer-mas-sobre-nosotros");

function mostrarSobreNosotros() {
  
  completarTextNosotros.textContent = sobreNosotros;
  itemSobreNosotros.style.height = "90%";
  
}

function ocultarSobreNosotros() {
  completarTextNosotros.textContent = "";
  itemSobreNosotros.style.height = "50%";
}

masSobreNosotros.onmouseenter = mostrarSobreNosotros;
masSobreNosotros.onmouseleave = ocultarSobreNosotros;
masSobreNosotros.addEventListener("touchstart",mostrarSobreNosotros)
masSobreNosotros.addEventListener("touchend",ocultarSobreNosotros)


/*sobre nosotros */
/*sobre nosotros */


