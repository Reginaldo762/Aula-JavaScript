
const renderiza_string = function(elemento){
    const valor = elemento.value;
    const outro_valor = valor.concat("...");
    const city = 'Brasil';
    const vetor_da_string = valor.split('@');
    
        
    const last4Digits = vetor_da_string[0].substring(0,2);
    vetor_da_string[0] = last4Digits.padEnd(vetor_da_string[0].length, '*');
    const maskedNumber = vetor_da_string.join('@');
    console.log(valor);
    console.log(valor.trim());
    console.log(valor.valueOf());
    console.log(vetor_da_string);
    console.log(maskedNumber);
    

    const render = document.getElementById('render_string');
    render.innerHTML = `
        <p>${valor.toUpperCase()}</p> <!--converte para maiúsculas-->
        <p>${valor.toLowerCase()}</p> <!--converte para minúsculas -->
        <p>${valor.substring(0,4)}....</p> <!--mostra apenas os primeiros caracteres -->
        <p>Começa com Script?${valor.startsWith("Script")}....</p> <!-- mostra se começa com uma determinada palavra, nesse caso Script -->
        <p>Termina com legal?${valor.endsWith("legal")}....</p><!--mostra se termina com uma determinada palavra, no caso legal -->
        <p>Existe a palavra chuva?${valor.trim().toLowerCase().includes("chuva")}....</p> <!-- -->
        <p>${outro_valor}</p><!-- -->
        <p>${valor.replace("[email]", "reginaldogrellmann@gmail.com")}</p> <!-- -->
        <p>${valor.replaceAll("[telefone]", 988482726)}</p> <!-- -->
        <p>${valor.repeat(60)} </p>
        <p> A texto <b>${valor}</b> possui ${valor.length}caracteres</p>
        <p>${maskedNumber}</p>
        
    `;
}