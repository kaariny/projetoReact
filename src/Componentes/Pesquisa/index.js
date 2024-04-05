import { useState } from "react"
import {pets} from "./dadosPesquisa"

function Pesquisa(){
    const [petsPesquisadas, setPetsPesquisadas] = useState([])
  
    return(
        <section>
            <h1>Encontre o produto para o seu Pet agora:</h1>
            <input
                placeholder="digite o produto desejado "
              
                onBlur={(evento=>{
                    const textoDigitado = evento.target.value;
                   
                    const resultadoPesquisa = pets.filter(pets => pets.titulo.includes(textoDigitado))
                    //salava a variavel no state 
                    setPetsPesquisadas(resultadoPesquisa)
                })}
            ></input>
            {/* */}

            {petsPesquisadas.map(pets=>(
                <div>
                    <p>{pets.titulo}</p>
                </div>
            ))

            }

        </section>
    )
}

export default Pesquisa