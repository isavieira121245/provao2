import React, { useState } from 'react';

const Media = () => {
  const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
      const [nota3, setNota3] = useState(0);
        const [media, setMedia] = useState(0);

          const calcularMedia = () => {
              const mediaCalculada = (nota1 + nota2 + nota3) / 3;
                  setMedia(mediaCalculada);

                      // Lógica para exibir o resultado com base na média
                          if (mediaCalculada < 4) {
                                alert(`Média: ${mediaCalculada.toFixed(1)} - Reprovado`);
                                    } else if (mediaCalculada >= 4 && mediaCalculada < 6) {
                                          alert(`Média: ${mediaCalculada.toFixed(1)} - Recuperação`);
                                              } else {
                                                    alert(`Média: ${mediaCalculada.toFixed(1)} - Aprovado`);
                                                        }
                                                          };

                                                            return (
                                                                <div>
                                                                      <h2>Calculadora de Média</h2>
                                                                            <input
                                                                                    type="number"
                                                                                            placeholder="Nota 1"
                                                                                                    value={nota1}
                                                                                                            onChange={(e) => setNota1(Number(e.target.value))}
                                                                                                                  />
                                                                                                                        <input
                                                                                                                                type="number"
                                                                                                                                        placeholder="Nota 2"
                                                                                                                                                value={nota2}
                                                                                                                                                        onChange={(e) => setNota2(Number(e.target.value))}
                                                                                                                                                              />
                                                                                                                                                                    <input
                                                                                                                                                                            type="number"
                                                                                                                                                                                    placeholder="Nota 3"
                                                                                                                                                                                            value={nota3}
                                                                                                                                                                                                    onChange={(e) => setNota3(Number(e.target.value))}
                                                                                                                                                                                                          />
                                                                                                                                                                                                                <button onClick={calcularMedia}>Calcular Média</button>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      };

                                                                                                                                                                                                                      export default Media;