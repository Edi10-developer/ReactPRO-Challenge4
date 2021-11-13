import React from "react";
import "./styles.css";

class Counter extends React.Component {
  state = {
    defaultCounterValue: this.props.defaultCounterValue,
    incrementBy: this.props.incrementBy,
    counter: this.props.defaultCounterValue
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + (this.state.incrementBy | 1)
    });
  };

  render() {
    return (
      <div>
        <p>
          <strong> {this.state.counter}</strong>
        </p>
        <button onClick={this.handleClick}>
          increment by {this.props.incrementBy | 1}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  counterList = [
    { defaultCounterValue: 5, incrementBy: 5 },
    { defaultCounterValue: 15, incrementBy: 27 },
    { defaultCounterValue: 23, incrementBy: 3 },
    { defaultCounterValue: 35 }
  ];

  render() {
    return (
      <div className="App">
        <h1 className="">Create Account</h1>
        {this.counterList.map((item) => (
          <Counter
            incrementBy={item.incrementBy}
            defaultCounterValue={item.defaultCounterValue}
            counter={item.counter}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
