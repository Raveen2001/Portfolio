import { createContext, useCallback, useContext, useState } from "react";
import { IProject, PROJECTS } from "../../data";
import { WORK_TIMELINE } from "../../data";
import { IWork } from "../../data";
export type GlobalContext = {
  selectedProject: IProject;
  setSelectedProject: (data: IProject) => void;

  selectedWorkExperience: IWork;
  setSelectedWorkExperience: (data: IWork) => void;
};
export const MyGlobalContext = createContext<GlobalContext>({
  selectedProject: PROJECTS[0],
  setSelectedProject: (data: IProject) => {},

  selectedWorkExperience: WORK_TIMELINE[0],
  setSelectedWorkExperience: (data: IWork) => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalContextProvider: React.FC<IGlobalProvider> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [selectedWorkExperience, setSelectedWorkExperience] = useState(
    WORK_TIMELINE[0]
  );
  return (
    <MyGlobalContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        selectedWorkExperience,
        setSelectedWorkExperience,
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

export default GlobalContextProvider;
