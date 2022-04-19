import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Office from "./Routes/Office";
import Alabama from "./Routes/Alabama";
import Bebras from "./Routes/Bebras";
import Barsukas from "./Routes/Barsukas";
import Edit from "./Routes/Edit";

export const data = [
  { n: "barsukas", id: 5 },
  { n: "bebras", id: 9 },
  { n: "krokodilas", id: 15 },
  { n: "vilkas", id: 775 },
  { n: "zuikis", id: 29 },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Router</h1>
        <Link to="/back-office">Back Office</Link>
        <Link to="/sweet-home">Alabama</Link>
        <Link to="/bebras">Bebras</Link>
        <Link to="/barsukas">Barsukas</Link>
        <div>-------------------------------------</div>
        {
            data.map(a =><Link key={a.id} to={'/edit/' + a.n}>{a.n}</Link>)
        }

        <Routes>
          <Route path="/" element={<div>hello world!</div>}></Route>
          <Route path="/back-office" element={<Office></Office>}></Route>
          <Route path="/sweet-home" element={<Alabama></Alabama>}></Route>
          <Route path="/bebras" element={<Bebras></Bebras>}></Route>
          <Route path="/barsukas" element={<Barsukas></Barsukas>}></Route>
          <Route path="/edit/:id" element={<Edit></Edit>}></Route>
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
