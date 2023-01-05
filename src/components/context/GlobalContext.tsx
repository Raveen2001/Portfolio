import { createContext, useCallback, useContext, useState } from "react";
import { gsapCloseContactModal, gsapOpenContactModal } from "../../utils/gsap";
export type GlobalContext = {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
};
export const MyGlobalContext = createContext<GlobalContext>({
  isContactModalOpen: false,
  toggleContactModal: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

interface IGlobalProvider {
  children: React.ReactNode;
}
const GlobalContextProvider: React.FC<IGlobalProvider> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  const toggleContactModal = useCallback(() => {
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
      value={{ isContactModalOpen, toggleContactModal: toggleContactModal }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};

export default GlobalContextProvider;