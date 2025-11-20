import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/admin/Layout'
import Search from './pages/admin/Layout'
import Requests from './pages/admin/Layout'
import Connections from './pages/admin/Layout'
import EditProfile from './pages/admin/Layout'
import AuthLayout from './pages/AuthLayout'
const App = () => {
  
  
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/signup' element = {<AuthLayout/>}></Route>
            <Route path='/admin' element={false ? <Layout/> : <AuthLayout/>}>
              <Route index element={<Search/>}/>
              <Route path='requests' element = {<Requests/>}/>
              <Route path='connections' element = {<Connections/>}/>
              <Route path='editProfile' element = {<EditProfile/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App