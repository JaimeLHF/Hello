import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/Menu'
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Footer from "components/Footer";
import PagePadrao from "components/PagePadrao";
import Post from "Pages/Post";
import NotFound from "Pages/NotFound";
import ScrollToTop from "react-scroll-to-top";


function AppRoutes() {




    return (
      <BrowserRouter>
        <ScrollToTop smooth />
        <Menu />

        <Routes>
          <Route path="/" element={<PagePadrao />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />

          </Route>
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  export default AppRoutes;
