const veiculos = [
    {modelo:"passeio", marca:"nissam"},
    {modelo:"passeio", marca:"bmw"},
    {modelo:"passeio", marca:"honda"},
    {modelo:"passeio", marca:"porche"},
    {modelo:"passeio", marca:"hyundai"},
    {modelo:"passeio", marca:"tesla"},
    {modelo:"passeio", marca:"maserati"},
    {modelo:"passeio", marca:"mercedes"},
    {modelo:"passeio", marca:"audi"},
    {modelo:"passeio", marca:"kia"},

];
const exibe_veiculos = function(){
    const veiculos_html =document.querySelector('#render');
        render.innerText = "";
    for(veiculo of veiculos){
        render.innerHTML += `
        <div style="width:25%; margin: 10px;">
            <h1>Modelo: <b>${veiculo.modelo}</br></h1>
            <h2>Marca: <b>${veiculo.marca}</br></h2>
        </div>
        `;
    }
}