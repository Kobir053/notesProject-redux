import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface PrivatePageProps {
  children: ReactNode;
  isLoggedIn: boolean;
}

const PrivatePage: React.FC<PrivatePageProps> = ({ children, isLoggedIn }) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
      setIsLoading(false)
    }, 1500);
  }, []);

  return <>
  {isLoading ? <h1>Loading...</h1>: children}
  </>;
};

export default PrivatePage;