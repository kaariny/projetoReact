import "./Inicio.css";

function Inicio() {
  return (
    <section className="area-pet">
      <h1>Escolha o produto para seu PET!</h1>
      <ul>
        <li>
          <img src="imagens/foto1.jpg" alt="Imagem 1" />
          <p>Banho & Tosa:</p>
          Aqui você vai encontrar profissionais de qualidade que cuidarão do seu pet com muito amor.
        </li>
        <li>
          <img src="imagens/foto2.jpg" alt="Imagem 2" />
          <p>Remedios:</p>
          Remedios variados para o maior cuidado do seu pet.
        </li>
        <li>
          <img src="imagens/foto3.jpg" alt="Imagem 3" />
          <p>Brinquedos:</p>
            Uma variedade enorme para seu pet brincar, bolas, cordas, e etc.
        </li>
        <li>
          <img src="imagens/foto4.jpg" alt="Imagem 3" />
          <p>Rações:</p>
          Rações premium, gold, pedigree, entre outras marcas conhecidas no mercado.
        </li>
        <li>
          <img src="imagens/foto5.jpg" alt="Imagem 3" />
          <p>Acessorios:</p>
            Aqui você encontra de tudo, coleiras, roupas, laços, cama, vasilhas e etc.
        </li>
        <li>
          <img src="imagens/foto6.jpg" alt="Imagem 3" />
          <p>Higiene e limpeza:</p> 
         Produtos de Higiene para o seu pet de diversas marcas.
        </li>
      </ul>
    </section>
  );
}

export default Inicio;
