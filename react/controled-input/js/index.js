class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value });

  }
  render() {
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement(GetInput, { input: this.state.inputValue, handleChange: this.handleChange }),
      React.createElement(RenderInput, { input: this.state.inputValue })));


  }}


class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Get Input"),
      React.createElement("input", { value: this.props.input, onChange: this.props.handleChange, placeHolder: "Write something" })));


  }}


class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Render Input"),
      React.createElement("p", null, this.props.input)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));