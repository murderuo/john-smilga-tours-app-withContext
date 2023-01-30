import { createContext, useState } from 'react';
import tours from '../data/data';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [data, setData] = useState(tours);

  const props = { basket, setBasket, data,setData };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;

export { GlobalContextProvider };
