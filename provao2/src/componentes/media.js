import React, { useState } from 'react';

const Media = () => {
const [nota1, setNota1] = useState();   
const [nota2, setNota2] = useState();
const [nota3, setNota3] = useState();
const [media, setMedia] = useState();

const calcularMedia = () => {
const mediaCalculada = (nota1 + nota2 + nota3) / 3;

setMedia(mediaCalculada);
if (mediaCalculada < 4) {

alert(`Média: ${mediaCalculada.parseFloat(1)} - Reprovado`);
} 

else if (mediaCalculada >= 4 && mediaCalculada < 6) {
 alert(`Média: ${mediaCalculada.parseFloat(1)} - Recuperação`);
} 

else {
 alert(`Média: ${mediaCalculada.parseFloat(1)} - Aprovado`);
}
  };
 return (
 <div>
         <h2>Calculadora de Média</h2>
     <input
      keyboardType="number"
      placeholder="Nota 1"
      value={nota1}
      onChangeText={(e) => setNota1(Number(e.target.value))
      }
      />
        
      <input
      keyboardType="number"
      placeholder="Nota 2"
      value={nota2}
      onChangeText={(e) => setNota2(Number(e.target.value))
      }
      />

     <input
      keyboardType="number"
      placeholder="Nota 3"
      value={nota3}
      onChangeText={(e) => setNota3(Number(e.target.value))
      }
      />

      <button onClick={calcularMedia}>Calcular Média</button>
  </div>
 );
 };

  export default Media;