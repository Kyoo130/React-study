import './App.css';
import PostList from "./pages/PostList";
import {useState} from "react";

function App() {
  const [state, setState] = useState([
    {id: 1, writer: "효순", skill: "", url: "", }
  ]);

  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
