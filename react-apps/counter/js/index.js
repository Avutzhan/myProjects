class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1 });

  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1 });

    } else {
      this.setState({
        count: this.state.count - 0 });

    }
  }
  reset() {
    this.setState({
      count: 0 });

  }
  handleChange(event) {
    this.setState({ count: Number(event.target.value) });
  }

  render() {
    return (
      React.createElement("div", { className: "jumbotron" },
      React.createElement("form", null,
      React.createElement("input", { className: "jumbotron__window", type: "number", value: this.state.count, onChange: this.handleChange, min: "0" })),

      React.createElement("div", { className: "jumbotron__plus-minus" },
      React.createElement("button", { className: "jumbotron__plus", onClick: this.increment }, React.createElement("i", { class: "fas fa-plus" })),
      React.createElement("button", { className: "jumbotron__minus", onClick: this.decrement }, React.createElement("i", { class: "fas fa-minus" }))),

      React.createElement("button", { className: "jumbotron__delete", onClick: this.reset }, React.createElement("i", { class: "fas fa-trash" }))));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));