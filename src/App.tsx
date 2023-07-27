import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Mui from './Lecture/Mui';
import Component from './components/MenuAppBar';
import Component2 from './components/MenuAppBar';

interface ReactProps {
  name: string;
  color: string;
}

const App: React.FC = () => {

  return (
   <>
    <Mui />
    <Component  color='red' name='react' />
    <Component2 color='red' />
   </>
  );
}

export default App;
