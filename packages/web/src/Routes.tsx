import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Panel from './layout/Panel'

const mainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
    </Routes>
  )
}

export default mainRoutes
