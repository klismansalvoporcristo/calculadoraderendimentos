

function calcular(){
    var moagem = document.getElementById("moagem").value;
    var umidade = document.getElementById("umidade").value;
    var anidro = document.getElementById("anidro").value;
    var ddgs = document.getElementById("ddgs").value;

    var moagemcor = ((100 - umidade)/86)*moagem
    var rendetanol = (anidro/moagemcor)*100
    var rendddgs = (ddgs/moagemcor)*100

    document.getElementById("rendimentoetn").innerText="RENDIMENTO DO ETANOL : "+rendetanol.toFixed(3)
    document.getElementById("rendimentodd").innerText="RENDIMENTO DO DDGS : "+rendddgs.toFixed(3) 
}