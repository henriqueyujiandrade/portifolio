import { useContext } from "react"
import { ProjectContext } from "../../providers/projects"
import { Project } from "../project"
import { ProjectContent, UlProject } from "./styles"






export const Projects = () => {
    const {project} = useContext(ProjectContext)
    console.log(project)
  return (
    <ProjectContent>
        <h2 id='projects'>Projetos</h2>
      <UlProject>
       {project.map((prd)=> <Project key={prd.id} project={prd}  />)}
      </UlProject>
      
      
    </ProjectContent>
  )
}