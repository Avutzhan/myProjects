class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }
  render() {
    let style = {
      border: '1px solid black' };

    if (this.state.input.length > 5) {
      style.border = '5px solid red';
    }
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("h3", null, "Don't Type Too Much"),
      React.createElement("input", { onChange: this.handleChange, style: style })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));