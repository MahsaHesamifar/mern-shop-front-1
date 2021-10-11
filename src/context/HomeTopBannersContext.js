import { createContext, useState } from "react";

export const HomeTopBannersContext = createContext();

export const HomeTopBannersProvider = ({ children }) => {
  const [homeTopBanners, setHomeTopBanners] = useState([{ id: Math.random() }]);
  return (
    <HomeTopBannersContext.Provider value={[homeTopBanners, setHomeTopBanners]}>
      {children}
    </HomeTopBannersContext.Provider>
  );
};
