import { React } from 'react';
import { useSelector } from "react-redux";
import HeaderNavigation from './components/HeaderNavigation';
import HeaderSearch from './components/HeaderSearch';
import BookList from './components/BookList';
import BookDetail from "./components/BookDetail";


function App() {
  const stateOfApp = useSelector((state) => state.stateOfApp);
  return (
    <>
      {stateOfApp === 0 ? (
        <>
          <HeaderSearch />
          <BookList />
        </>
      ) : (
        <>
          <HeaderNavigation text={"To Main Page"} />
          <BookDetail />
        </>
      )}
    </>
  );
}

export default App;