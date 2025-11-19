import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const api = "0ff7d4f32be545bf9d923d7524e0526a";

  const [bg, setBg] = useState("white");
  const [color, setColor] = useState("black");
  const [progress, setProgress] = useState(0);
  function DarkModeFunc() {
    setBg(bg === "white" ? "black" : "white");
    setColor(color === "black" ? "white" : "black");
  }
  return (
    <>
      <Router>
        <div style={{ backgroundColor: bg, color: color }}>
          <Nav color={bg} DarkModeFunc={DarkModeFunc} />

          <Routes>
            <Route
              path="/game"
              element={<News pageSize={6} category="gaming" api={api} />}
            />
            <Route
              path="/bitcoin"
              element={<News pageSize={6} category="bitcoin" api={api} />}
            />
            <Route
              path="/general"
              element={<News pageSize={6} category="general" api={api} />}
            />
            <Route
              path="/health"
              element={<News pageSize={6} category="health" api={api} />}
            />
            <Route
              path="/sports"
              element={<News pageSize={6} category="sports" api={api} />}
            />
            <Route
              path="/entertainment"
              element={<News pageSize={6} category="entertainment" api={api} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

// import "./App.css";
// import React, { useState } from "react";
// import Nav from "./components/Nav";
// import News from "./components/News";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function App() {
//   const [bg, setBg] = useState("white");
//   const [color, setColor] = useState("black");

//   const DarkModeFunc = () => {
//     setBg(bg === "white" ? "black" : "white");
//     setColor(color === "black" ? "white" : "black");
//   };

//   return (
//     <Router>
//       <Nav color={bg} DarkModeFunc={DarkModeFunc} />
//       <Routes>
//         <Route path="/game" element={<News pageSize={6} category="gaming" />} />
//         <Route path="/bitcoin" element={<News pageSize={6} category="bitcoin" />} />
//         <Route path="/" element={<News pageSize={6} category="general" />} />
//       </Routes>
//     </Router>
//   );
// }
