import { createContext, useCallback, useContext, useState } from "react";
import { IProject, PROJECTS } from "../../data";
export type GlobalContext = {
  selectedProject: IProject;
  setSelectedProject: (data: IProject) => void;
};
export const MyGlobalContext = createContext<GlobalContext>({
  selectedProject: PROJECTS[0],
  setSelectedProject: (data: IProject) => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalContextProvider: React.FC<IGlobalProvider> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  return (
    <MyGlobalContext.Provider value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

export default GlobalContextProvider;
