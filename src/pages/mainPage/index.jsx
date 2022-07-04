import { AboutMe } from "../../components/aboutMe"
import { Contact } from "../../components/contact"
import { FirstSection } from "../../components/firstSection"
import { Header } from "../../components/header"
import { Projects } from "../../components/projectList"
import { Container } from "./styles"


export const MainPage = () => {
    return(
        <Container>
        <Header/>
        <FirstSection/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        </Container>
    
    )
}