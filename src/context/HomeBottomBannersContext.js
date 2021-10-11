import { createContext, useState } from "react";

export const HomeBottomBannersContext = createContext();

export const HomeBottomBannersProvider = ({ children }) => {
  const [homeBottomBanners, setHomeBottomBanners] = useState([
    { id: Math.random() },
  ]);
  return (
    <HomeBottomBannersContext.Provider
      value={[homeBottomBanners, setHomeBottomBanners]}
    >
      {children}
    </HomeBottomBannersContext.Provider>
  );
};
