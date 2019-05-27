import React from "react";
import "./App.css";
import NameTag from "./component/NameTag";

// higer order function means takes a funciton and returns a function
// higerorder component is also the same way.    
const makeEverythingGreen = BaseComponent => props => {
  const addThis = {
    style: {
      color: "green"
    }
  };

  const newProps = {
    ...props,
    ...addThis
  };

  return <BaseComponent {...newProps} />;
};

const removeInlineStyles = BaseComponent => props => {
  const newProps = { ...props };
  delete newProps.style;

  return <BaseComponent {...newProps} />;
};

const GreenNameTag = makeEverythingGreen(NameTag);
const CleanNameTag = removeInlineStyles(NameTag);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreenNameTag firstName="john" lastName="johnson" />
        <CleanNameTag
          firstName="peter"
          lastName="peterson"
          style={{ color: "red" }}
        />
        <NameTag firstName="jill" lastName="jillson" style={{ color: "red" }} />
      </header>
    </div>
  );
}

export default App;
