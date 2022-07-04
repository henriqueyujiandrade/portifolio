import { createContext, useState } from "react";
import defaultProjects from "../../db/db";


export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {
    const [project, setProject] = useState(defaultProjects)

    return(
        <ProjectContext.Provider value={{project}}>
            {children}
        </ProjectContext.Provider>
    )
}

