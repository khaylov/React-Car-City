import {createContext, useEffect, useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/Main/MainPage";
import CatalogPage from "./Components/Catalog/CatalogPage";
import ServicesPage from "./Components/Services/ServicesPage";
import FeedbackPage from "./Components/Feedback/FeedbackPage";
import ContactsPage from "./Components/Contacts/ContactsPage";

export const ActivePageContext = createContext(undefined)

function App() {
  const [activePage, setActivePage] = useState('main')
  console.log(activePage)

  const scrollToTop = () => {
    window.scrollTo({top: 0})
  }

  useEffect(scrollToTop,[activePage])

  return (
    <div id='wrapper'>
      <div className="container">
        <ActivePageContext.Provider value={{activePage, setActivePage}}>
          <Header/>

          {activePage === 'main' && <MainPage/>}

          {activePage === 'catalog' && <CatalogPage/>}

          {activePage === 'services' && <ServicesPage/>}

          {activePage === 'feedback' && <FeedbackPage/>}

          {activePage === 'contacts' && <ContactsPage/>}
        </ActivePageContext.Provider>
      </div>

      <footer>
        <div className="container">
          <Footer/>
        </div>
      </footer>
    </div>  );
}

export default App;