import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category/Category";
import Courses from "./Components/categoryTabs/Courses";
import Explores from "./Components/ExplorPrograms/Explores";
import Hero from "./Components/Hero/Hero";
import HomeFooter from "./Components/Homefooter/HomeFooter";
import Logo from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers/Offers";
import Students from "./Components/Student/Students";
import AboutOne from "./Components/About-One/AboutOne";
import CoursesOne from "./Components/pages/coursesone/CoursesOne";
import FaqPage from "./Components/pages/coursesone/Faq/FaqPage";
import Pricing from "./Components/pages/coursesone/pricing/Pricing";
import Career from "./Components/pages/coursesone/Creere/Career";
import Event from "./Components/pages/coursesone/event/Event";
import Team from "./Components/pages/team/Team";
function App() {
  return (
    <>
      {/* main component of router */}
      <BrowserRouter>
        <Navbar />
        {/* sub component of router */}

        <Routes>
          {/* router path and main url */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Logo />
                <Category />
                <Courses />
                <Offers />
                <Students />
                <Explores />
              </>
            }
          />
          <Route
            path="/CoursesOne"
            element={
              <>
                <CoursesOne />
              </>
            }
          />
          {/* route for abute page */}
          <Route
            path="/aboutone"
            element={
              <>
                <AboutOne />
              </>
            }
          />
          <Route
            path="/FAQ"
            element={
              <>
                <FaqPage />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Pricing />
              </>
            }
          />
          <Route
            path="/career"
            element={
              <>
                <Career />
              </>
            }
          />
          <Route
            path="/Event"
            element={
              <>
                <Event />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Team />
              </>
            }
          />
        </Routes>
        <HomeFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
