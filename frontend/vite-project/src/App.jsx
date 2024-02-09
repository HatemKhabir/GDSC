import Header from '../components/header.jsx'
import Home from '../pages/Home.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
 

  return (
    <>
         <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
