import { createContext, useCallback, useContext, useState } from "react";
import { gsapCloseContactModal, gsapOpenContactModal } from "../../utils/gsap";
export type GlobalContext = {
  isContactModalOpen: boolean;
  toggleContackModal: () => void;
};
export const MyGlobalContext = createContext<GlobalContext>({
  isContactModalOpen: false,
  toggleContackModal: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

interface IGlobalProvider {
  children: React.ReactNode;
}
const GlobalContextProvider: React.FC<IGlobalProvider> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  const toggleContackModal = useCallback(() => {
    setIsContactModalOpen((value) => {
      if (value) {
        gsapCloseContactModal();
      } else {
        gsapOpenContactModal();
      }
      return !value;
    });
  }, []);

  return (
    <MyGlobalContext.Provider
      value={{ isContactModalOpen, toggleContackModal }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

export default GlobalContextProvider;
