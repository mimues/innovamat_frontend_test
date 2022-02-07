import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from 'context/AppContext'
import Searchbar from 'components/Layout/SearchBar/Searchbar'
import Navbar from 'components/Layout/NavBar/Navbar'
import Footer from 'components/Layout/Footer/Footer'
import Home from 'pages/Home/Home'
import SearchResults from 'pages/SearchResults/SearchResults'
import Details from 'pages/Details/Details'
import NotFound from 'components/Shared/NotFound/NotFound'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [click, setClick] = useState(true)
  const [resetSearchButton, setResetSearchButton] = useState(false)
  const [favorites, setFavorites] = useState([])

  //SearchBar
  const getInfo = (searchValue) => {
    setSearch(searchValue)
  }

  //Searchbar Button
  const getClick = (clicked) => {
    setClick(clicked)
    //Show button "back to list"
    setResetSearchButton(true)
  }

  //Reset Searchbar input after click
  const resetSearchbar = () => {
    document.querySelector('.Searchbar-input').value = ''
    setSearch('')
  }

  //Hide Button when list is reset
  const hideResetButton = () => {
    setResetSearchButton(false)
  }

  //Add Favorite
  const addFavorite = (id) => {
    let copy = [...favorites]
    copy.push(id)
    setFavorites(copy)
  }

  //Delete Favorite 
  const deleteFavorite = (id) => {
    let copy = [...favorites]
    copy.splice(copy.indexOf(id), 1)
    setFavorites(copy)
  }

  return (
    <div className="App">
      <div className='App-container'>
        <AppProvider
          value={{
            search,
            click,
            resetSearchbar,
            resetSearchButton,
            hideResetButton,
            favorites,
            addFavorite,
            deleteFavorite,
          }}
        >
          <div className='App-search'>
            <Searchbar getInfo={getInfo} getClick={getClick} />
          </div>
          <div className='App-content'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Navigate to='dinamicas/talleres' />} />
              <Route path='/dinamicas/:dynamic' element={<Home />} />
              <Route path='/search' element={<SearchResults />} />
              <Route path='/resources/:id' element={<Details />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </AppProvider>
      </div>
    </div>
  );
}

export default App