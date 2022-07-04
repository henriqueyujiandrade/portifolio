import { HeaderContent, LogoNavDiv } from "./styles"


export const Header = ()=> {
    return(
        <HeaderContent>
            <LogoNavDiv>
                <h1>Henrique Andrade</h1>
                <nav>
                    <a href="#aboutMe">Sobre mim</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </LogoNavDiv>
        </HeaderContent>
    )
}