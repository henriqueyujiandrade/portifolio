import { ProjectProvider } from "./projects";

const Providers = ({children}) => {

    return (
        <ProjectProvider>            
                {children}      

        </ProjectProvider>
    )
}

export default Providers