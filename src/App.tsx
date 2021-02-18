import React from 'react';
import './App.css';
import Board from "./components/Board/Board";
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from "react-dnd-html5-backend";
import Alphabet from "./components/Alphabet/Alphabet";

const App = () => {
  return (
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Board size={5} />
          <Alphabet />
        </DndProvider>
      </div>
  );
}

export default App;
