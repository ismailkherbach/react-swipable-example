import { Table } from "react-bootstrap";
import Draggable from "react-draggable"; // The default
import "./App.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const initialState = { pos: 0, sliding: false };

function App() {
  const [clicked, setClicked] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [swiping, setSwiping] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setNav1(true);
      setSwiping(false);
    },
    onSwipedRight: () => {
      setNav1(false);
      setSwiping(false);
    },
    onSwiping: () => setSwiping(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div className="App">
      <div
        className="testCont"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img
          alt="spation"
          src="https://content.screencast.com/users/gi_kherbach/folders/Default/media/4bee70d5-ae18-4073-8baf-bf4b8a351dab/default.png"
        />
        <h4>Welcome to Ismail KHERBACH Demo!</h4>
        <p>Please switch to mobile view to do the demo</p>
      </div>
      <div
        className="ProccedBloc flex fdc jcc aic"
        {...handlers}
        onClick={() => {
          if (!clicked) {
            setClicked(true);
          }
        }}
      >
        <div className="dots fdr flex jcc aic">
          <div className={!nav1 ? "circleDotActive" : "circleDotGray"}></div>
          <div className={nav1 ? "circleDotActive" : "circleDotGray"}></div>
        </div>
        {clicked && (
          <PerfectScrollbar>
            <div className={swiping ? "scroll-cards-swiping" : "scroll-cards"}>
              {!nav1 ? (
                <div className="handle">
                  <div className={"navCard"}></div>
                  <div className="navCard"></div>
                  <div className="navCard"></div>
                </div>
              ) : (
                <div className="handle">
                  <div className={"navCardDragged"}></div>
                  <div className="navCardDragged"></div>
                  <div className="navCardDragged"></div>
                </div>
              )}
            </div>
          </PerfectScrollbar>
        )}
      </div>
    </div>
  );
}

export default App;
