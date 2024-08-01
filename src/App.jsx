import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import ResetPassword from "./pages/ResetPassword/index.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword  />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<SignIn />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;
