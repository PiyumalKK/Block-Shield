//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Services from './pages/Services';
import Customers from './pages/Customers';
import ContactUs from './pages/ContactUs';
import RequestPage from './pages/RequestPage';
import ThankYou from './pages/ThankYou';
import ParticlesComponent from './components/particles';
import RequestUpdate from './pages/RequestUpdate';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <ParticlesComponent id='particles' />
        <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/" element={<Home />} />
         
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/reqpage" element={<RequestPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reqpage/:slug" element={<RequestPage />} />
            <Route path="/updatereq/:slug" element={<RequestUpdate/>} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
