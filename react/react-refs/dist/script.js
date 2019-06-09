class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      fullName: '' };

  }

  handleSubmit(e) {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    var fullName = this.refs.fullName.value;
    this.setState({
      username: username,
      password: password,
      fullName: fullName });

    var result = 'Account Info<br/>';
    result += 'Username: ' + this.state.username + '<br/>';
    result += 'Password: ' + this.state.password + '<br/>';
    result += 'Full Name: ' + this.state.fullName + '<br/>';
    this.refs.result.innerHTML = result;
    e.preventDefault();
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.handleSubmit.bind(this) },
      React.createElement("table", { cellPadding: "2", cellSpacing: "2" },
      React.createElement("tr", null,
      React.createElement("td", null, "Username"),
      React.createElement("td", null, React.createElement("input", { type: "text", ref: "username" }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Password"),
      React.createElement("td", null, React.createElement("input", { type: "password", ref: "password" }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Full Name"),
      React.createElement("td", null, React.createElement("input", { type: "text", ref: "fullName" }))),

      React.createElement("tr", null,
      React.createElement("td", null, "\xA0"),
      React.createElement("td", null, React.createElement("input", { type: "submit", value: "Save" }))))),



      React.createElement("div", { ref: "result" })));


  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));