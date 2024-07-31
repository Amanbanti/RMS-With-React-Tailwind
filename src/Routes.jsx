// import React from "react";
// import { useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import Signup from "./pages/Signup";
// import SignIn from "./pages/SignIn";
// import ResetPassword from "./pages/ResetPassword";
// // import Buydetailpage from "./pages/Buydetailpage";
// // import HomeBuy from "./pages/HomeBuy";
// // import HomeRent from "./pages/HomeRent";
// // import Rentdetailpage from "./pages/Rentdetailpage";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "signup",
//       element: <Signup />,
//     },
//     {
//       path: "signin",
//       element: <SignIn />,
//     },
//     {
//       path: "resetpassword",
//       element: <ResetPassword />,
//     },


// //   {
// //     path: "buydetailpage",
// //     element: <Buydetailpage />,
// //   },
// //   {
// //     path: "homebuy",
// //     element: <HomeBuy />,
// //   },
// //   {
// //     path: "homerent",
// //     element: <HomeRent />,
// //   },
// //   {
// //     path: "rentdetailpage",
// //     element: <Rentdetailpage />,
// //   },
// ]);

// return element;
// };

// export default ProjectRoutes;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from "./pages/Home";

function ProjectRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default ProjectRoutes;
