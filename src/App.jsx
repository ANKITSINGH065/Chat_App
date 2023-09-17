import "./App.css";
// import socketIO from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transportOptions: ["websocket"] });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
