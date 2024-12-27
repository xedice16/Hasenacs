
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register.jsx';
import Error from './pages/Error/Error';
import Basket from './pages/Basket/Basket.jsx';
import WishList from './pages/WishList/WishList.jsx';
import { WishlistProvider } from "react-use-wishlist";
import { CartProvider } from "react-use-cart";
import About from './pages/About/About.jsx';
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog/Blog.jsx';
import SingleBlog from './pages/SingleBlog/SingleBlog.jsx';
import Shop from './pages/Shop/Shop.jsx';

function App() {

  return (
    <div className="App">

      <WishlistProvider>
        <CartProvider>

          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />}> */}
            {/* <Route path="blogs" element={<Blogs />} /> */}

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />

            <Route path="/" element={<Home />} />
            
            <Route path="shop" element={<Shop/>} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="basket" element={<Basket />} />
            
            {/* <Route path="/proddetail/:id/:name/:brand/:category" element={<ProductDetail />} /> */}

            <Route path='/blogdetails' element={<BlogDetails/>}/>
            <Route path='/singleblog/:id' element={<SingleBlog/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </CartProvider>
      </WishlistProvider>

    </div>
  );
}

export default App;
