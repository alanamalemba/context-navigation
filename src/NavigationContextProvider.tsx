import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

enum NavigationOptionsTitle {
  Unpaid = "Unpaid",
  Paying = "Paying",
  Paid = "Paid",
}

export const NAVIGATION_OPTIONS = {
  Unpaid: {
    title: NavigationOptionsTitle.Unpaid,
  },
  Paying: {
    title: NavigationOptionsTitle.Paying,
  },
  Paid: {
    title: NavigationOptionsTitle.Paid,
  },
};

type NavigationContextType = {
  currentPage: NavigationOptionsTitle;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavigationOptionsTitle>>;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

type Props = {
  children: ReactNode;
};
export default function NavigationContextProvider({ children }: Props) {
  const [currentPage, setCurrentPage] = useState<NavigationOptionsTitle>(
    NAVIGATION_OPTIONS.Unpaid.title
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage == NAVIGATION_OPTIONS.Unpaid.title) navigate("/");
    if (currentPage == NAVIGATION_OPTIONS.Paying.title) navigate("/Paying");
    if (currentPage == NAVIGATION_OPTIONS.Paid.title) navigate("/Paid");
  }, [currentPage, navigate]);

  console.log(currentPage);

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);

  if (!context)
    throw new Error(
      "useNavigationContext can only be used in a navigation context provider"
    );

  return context;
}
