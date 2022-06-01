

function funcao1()
{
    swal("No momento não há passagens disponíveis para essa viagem :( ");

}

function myFunction()
{
    swal ( "digite seu destino: " , { 
        content: "input",
})
.then((value) => {
    swal(`Passagem para ${value} comprada com sucesso!!`);
  });


}

