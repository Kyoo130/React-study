import React, {useState, useRef} from "react";
import {Route, Routes} from "react-router-dom";
import BucketList from "./components/BucketList";
import styled from "styled-components";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  const [list, setList] = useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
  const textRef = useRef(null);

  const addBucketList = () => {
    setList([...list, textRef.current.value]);
  }
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line/>
        <Routes>
          <Route path="/" element={<BucketList list={list}/>}/>
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Input>
        <input type="text" ref={textRef}/>
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0;
  border: 1px dotted #ddd;
`;

export default App;