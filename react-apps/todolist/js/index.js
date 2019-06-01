class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray });

  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value });

  }
  render() {
    const items = this.state.toDoList.map(items => React.createElement("li", { key: items + 1 }, items));
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("textarea", {
        placeholder: "Separate Items With Commas",
        onChange: this.handleChange,
        value: this.state.userInput }), " ",
      React.createElement("br", null),
      React.createElement("button", { className: "pure-button", onClick: this.handleSubmit }, "Create List"),
      React.createElement("h3", null, "My \"To Do\" List: "),
      React.createElement("ul", { className: "exception" },
      items)));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));