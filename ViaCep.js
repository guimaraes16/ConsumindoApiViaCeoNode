const axios = require('axios');

axios.get("https://viacep.com.br/ws/12412650/json/")
.then(function(res) {
    const endereco = res.data;

    if(endereco.logradouro){
        
        console.log(`CEP: ${endereco.cep}`);
        console.log(`Logradouro: ${endereco.logradouro}`);
        if(endereco.complemento)
             console.log(`Complemento: ${endereco.complemento}`);
        console.log(`Bairro: ${endereco.bairro}`);
        console.log(`Localidade: ${endereco.localildade}`);
        console.log(`UF: ${endereco.uf}`);
        console.log(`Unidade: ${endereco.unidade}`);
        console.log(`IBGE: ${endereco.ibge}`);
        console.log(`GIA: ${endereco.gia}`);
    
    } else{
        console.log(`CEP: ${endereco.cep}`);
        console.log(`Localidade: ${endereco.localildade}`);
        console.log(`UF: ${endereco.uf}`);
    }

    
    // endereco.forEach(function(endereco,index){
   
    //     console.log(`cep :${index+1} ${endereco.cep} Logradouro :
    //      ${endereco.logradouro} Complemento : ${endereco.complemento}
    //       Bairro : ${endereco.bairro} 
    //       Localidade: ${endereco.localidade} UF : ${endereco.uf} Unidade : ${endereco.unidade}
    //      Ibge : ${endereco.ibge} Gia : ${endereco.gia} `);
    // });
});