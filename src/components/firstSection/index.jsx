import { FirstContent, Image, Title } from "./styles"
import apresentacao from './../../assets/imagemApresentacao.jpg'
export const FirstSection = () => {

  return (
    <FirstContent>
      <Title>
        <section>
          <h2>Olá, eu sou</h2>
          <h2>Henrique Andrade</h2>
          <p>Desenvolvedor Front End</p>
        </section>
      </Title>
      <Image>
        <figure>
          <img src={apresentacao} alt='imagemApresentacao'/>
        </figure>
      </Image>
      
    </FirstContent>
  )
}