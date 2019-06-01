class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("h1", null, this.props.chance));

  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0 };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 });

  }
  render() {
    let expression = Math.random() > .5;
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("p", null, "Game of Chance"),
      React.createElement("button", { className: "pure-button", onClick: this.handleClick }, "Click Again"),
      expression == 1 ? React.createElement(Results, { chance: "You win!" }) : React.createElement(Results, { chance: "You lose!" }),
      React.createElement("p", null, 'Turn: ' + this.state.counter)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));