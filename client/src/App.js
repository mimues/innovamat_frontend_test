import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from 'context/AppContext'
import Searchbar from 'components/Layout/SearchBar/Searchbar'
import Navbar from 'components/Layout/NavBar/Navbar'
import Home from 'pages/Home/Home'
import SearchResults from 'pages/SearchResults/SearchResults'
import Details from 'pages/Details/Details'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [click, setClick] = useState(true)
  const [favorites, setFavorites] = useState([])
  console.log(favorites);

  //SearchBar
  const getInfo = (searchValue) => {
    setSearch(searchValue)
  }

  //Searchbar Button
  const getClick = (clicked) => {
    setClick(clicked)
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
            addFavorite,
            deleteFavorite
          }}
        >
          <div className='App-search'>
            <Searchbar getInfo={getInfo} getClick={getClick} />
          </div>
          <div className='App-content'>
            <Navbar />
            <Routes>
            {/* arreglar este navigate */}
              <Route path='/' element={<Navigate to='/talleres' />} />
              <Route path='/:dynamic' element={<Home search={search} click={click} />} />
              <Route path='/search' element={<SearchResults />} />
              <Route path='/resources/:id' element={<Details />} />
            </Routes>
          </div>
        </AppProvider>
      </div>
    </div>
  );
}

export default App