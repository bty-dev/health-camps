import './App.css';
import Authorization from "./pages/Authorization/Authorization";
import Main from "./pages/Main/Main";
import { Routes, Route, Link } from 'react-router-dom';
import CampInfo from "./pages/CampInfo/CampInfo";
import MyKids from "./pages/MyKids/MyKids";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/campInfo" element={<CampInfo />}/>
            <Route path="/main" element={<Authorization />}/>
            <Route path="/myKids" element={<MyKids />}/>
            <Route path="/chat" element={<Chat />}/>
        </Routes>
    </div>
  );
}

export default App;
