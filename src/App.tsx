import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootReducerType} from './Store';
import {fetchApiData} from './actions/ApiActions';
import styled from 'styled-components';
import {GithubOutlined} from '@ant-design/icons';
interface ButtonPropsType {
  primary?: boolean;
}

function App() {
  const catReducer = useSelector((state:RootReducerType) => state.ApiReducer)
  const dispatch = useDispatch()

  const searchButtonTapped = () => {
    dispatch(fetchApiData())
  }

  const alertButton = () => {
    alert('☠ 당신은 시체로 발견되었읍니다.');
  }

  return (
    <div className="App">
      <Wrap>
      <img src='https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/657/08fc50e4602bfe6da516bc0e7184b9b1.jpeg' height="250" width="350" /><br /><br />
      <Button primary onClick={searchButtonTapped}>준다.</Button>
      <Button onClick={alertButton}>주지 않는다.</Button>
      {catReducer.success && <Container>
        <br /><br /><p>✨후훗!✨ 귀여우니 목숨은 살려두지.</p><br /><br /><img src={catReducer.cat?.url} />
      </Container>}
      <br /><br /><br />made by<a href="https://github.com/ianlee92" target="_blank"><GithubOutlined style={{ fontSize: '20px', marginLeft:'10px', color: 'black' }}/></a>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  margin-top: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  width:100%;
`;

const Button = styled.button<ButtonPropsType>`
  border-radius: 50px;
  padding: 5px;
  margin-left: 10px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.primary ? "#2ecc71" : "#e74c3c"}
`;

export default App;
