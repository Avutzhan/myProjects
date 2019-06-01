class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: '' };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      userAge: '' });

  }
  submit() {
    this.setState({
      userAge: this.state.input });

  }
  render() {
    const buttonOne = React.createElement("button", { className: "pure-button", onClick: this.submit }, "Submit");
    const buttonTwo = React.createElement("div", null,
    React.createElement("button", { className: "pure-button" }, "You May Enter"),
    React.createElement("img", { src: "https://www.telegraph.co.uk/content/dam/music/2016/11/30/drake_trans_NvBQzQNjv4BqZPnXlBHEdt8AtjizIYNgmZhw_iIPZqUNP2EjAIFcGyw.jpg?imwidth=450" }));

    const buttonThree = React.createElement("div", null,
    React.createElement("button", { className: "pure-button" }, "You Shall Not Pass"),
    React.createElement("img", { src: "http://i.imgur.com/wjp1xVE.jpg" }));

    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("h3", null, "Enter Your Age to Continue"),
      React.createElement("input", { type: "number", value: this.state.input, onChange: this.handleChange, min: "0", max: "999" }), React.createElement("br", null),
      this.state.userAge == '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));