import { useContext, createContext, useState } from "react";

const CreatingContext = createContext();

export const CreatingProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  console.log(favorite);

  const addFavorite = (movie) => {
    if (!favorite.find((fav) => fav.id === movie.id)) {
      setFavorite([...favorite, movie]);
    }
  };
  const removeFavorite = (id) => {
    setFavorite(favorite.filter((movie) => movie.id !== id));
  };
  return (
    <CreatingContext.Provider value={{ addFavorite, removeFavorite, favorite }}>
      {children}
    </CreatingContext.Provider>
  );
};

export const useFavouite = () => useContext(CreatingContext);
