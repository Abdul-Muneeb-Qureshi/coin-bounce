import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import styles from './App.module.css'
import Protected from './components/Protected/Protected'
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import Signup from "./Pages/Signup/Signup";
import Crypto from "./Pages/Crypto/Crypto";
import Blog from './Pages/Blog/Blog'
import SubmitBlog from "./Pages/SubmitBlog/SubmitBlog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import UpdateBlog from "./Pages/UpdateBlog/UpdateBlog";
import useAutoLogin from "./hooks/useAutoLogin"
import Loader from "./components/Loader/Loader";

function App() {

  const isAuth = useSelector((state) => state.user.auth);
  const Loading = useAutoLogin();
  console.log(Loading)
  return Loading ? (<Loader text="....."/>) :(
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route path="/"
              exact
              element={<div className={styles.main}> <Home /> </div>} />

            <Route path="crypto"
              exact
              element={<div className={styles.main}> <Crypto /> </div>} />

            <Route path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}> <Blog /> </div>
                </Protected>
              } />

            <Route path="blog/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}> <BlogDetails /> </div>
                </Protected>
              } />

            <Route path="blog-update/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}> <UpdateBlog /> </div>
                </Protected>
              } />
            <Route path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}> <SubmitBlog /> </div>
                </Protected>} />

            <Route path="login"
              exact
              element={<div className={styles.main}> <Login /> </div>} />

            <Route path="signup"
              exact
              element={<div className={styles.main}> <Signup /> </div>} />

            <Route path="*"
              exact
              element={<div className={styles.main}> <Error /> </div>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
