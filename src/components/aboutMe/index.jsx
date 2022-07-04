import { AboutMeContent, MyImage, Title } from "./styles"
import myImage from './../../assets/myImage.jpg'

export const AboutMe = () => {

  return (
    <AboutMeContent>
      <MyImage>
      <figure>
        <img src={myImage} alt='imagemApresentacao'/>
      </figure>
      </MyImage>
      <Title>
        <section>
          <h2 id='aboutMe'>Sobre mim</h2>
          <p>Bacharelado em Engenharia Mecânica, atualmente estou migrando para a área de Desenvolvimento Web. Fazendo o curso de Desenvolvedor Web Full Stack na Kenzie Academy Brasil. </p>
          <p>Atualmente busco me tornar um Desenvolvedor Web Full Stack. Como Desenvolvedor Front End estou constantemente criando aplicações web para evoluir progressivamente. Busco sempre aplicar boas práticas, me atualizar com as novas tecnologias e me empenhar ao máximo para desenvolver soluções simples e eficazes para empresas e sociedade.</p>
        </section>      
      </Title>      
    </AboutMeContent>
  )
}