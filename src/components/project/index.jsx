import { FigureProject, Li, Links, Ol } from "./styles"

export const Project = ({project}) => {


    const {img,name,github, vercel, tecnologies} = project
    
    return(
    
        <Li>
           <FigureProject>
            <img src={img} alt='imagemProjeto'/>
           </FigureProject>
           <h3>{name}</h3>
           <Links>
            <a href={github} target='blank'>Github Repositório</a>
            <a href={vercel} target='blank'>Link Projeto Vercel</a>
           </Links>
           <Ol>{tecnologies.map((tec,i)=> <li key={i}>{tec}</li>)}</Ol>
        </Li>
    )
    
    }