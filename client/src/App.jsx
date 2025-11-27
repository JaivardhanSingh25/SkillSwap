import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/admin/Layout'
import Search from './pages/admin/Search'
import Requests from './pages/admin/Requests'
import Connections from './pages/admin/Connections'
import EditProfile from './pages/admin/EditProfile'
import AuthLayout from './pages/AuthLayout'
import {Toaster} from 'react-hot-toast';
import { useSelector } from 'react-redux';
const App = () => {
  
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <div>
      <Toaster/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/signup' element = {<AuthLayout/>}></Route>
            <Route path='/admin' element={isLoggedIn ? <Layout/> : <AuthLayout/>}>
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