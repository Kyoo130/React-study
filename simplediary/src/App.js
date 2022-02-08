import './App.css';
import DiaryEdit from "./components/DiaryEdit";
import DiaryList from "./components/DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Kyoo1",
    content: "Hello React 1",
    emotion: 5,
    create_date: new Date().getTime()
  },
  {
    id: 1,
    author: "Kyoo2",
    content: "Hello React 2",
    emotion: 2,
    create_date: new Date().getTime()
  },
  {
    id: 1,
    author: "Kyoo3",
    content: "Hello React 3",
    emotion: 1,
    create_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEdit/>
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
