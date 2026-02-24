import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ListPage from './pages/ListPage'
import DetailsPage from './pages/DetailsPage'
import PhotoResultPage from './pages/PhotoResultPage'
import SalaryChartPage from './pages/SalaryChartPage'
import CityMapPage from './pages/CityMapPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/photo" element={<PhotoResultPage />} />
      <Route path="/salary-chart" element={<SalaryChartPage />} />
      <Route path="/map" element={<CityMapPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
