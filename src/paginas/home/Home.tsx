import React from 'react';
import './Home.css';

function Home(){ //chamando nosso componente e dando um nome a ele!
    return( /*método return que irá retornar o conteúdo Html que precisa ser renderizado na tela, lembrando que
    o componente só poderá retornar 1 elemento, então se eu quiser ter mais de um elementos na minha tela eu 
    preciso colocar eles dentro de um container como p.ex o <div>, embaixo eu tenho 2 elementos dentro de 1 
    container que será retornada para ser montada em tela.*/
        <>
        <h1 className="titulo">Home</h1>
        <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
        </>
        /*Se apagarmos a div e deixarmos somente a tag de abertura e fechamento, isso se torna um caminho 
        abreviado, chamado de "fragment" que é uma forma abreviada que o React utiliza para poder retornar 
        uma lista de elementos*/
    );
}

export default Home;