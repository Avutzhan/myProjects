class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullName: '' };

  }

  handleSubmit(e) {
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    var fullName = e.target.elements.fullName.value;
    this.setState({
      username: username,
      password: password,
      fullName: fullName });

    console.log('Account Info');
    console.log('Username: ' + this.state.username);
    console.log('Password: ' + this.state.password);
    console.log('Full Name: ' + this.state.fullName);
    e.preventDefault();
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.handleSubmit.bind(this) },
      React.createElement("table", { cellPadding: "2", cellSpacing: "2" },
      React.createElement("tr", null,
      React.createElement("td", null, "Username"),
      React.createElement("td", null, React.createElement("input", { type: "text", name: "username" }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Password"),
      React.createElement("td", null, React.createElement("input", { type: "password", name: "password" }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Full Name"),
      React.createElement("td", null,
      React.createElement("input", { type: "text", name: "fullName" }))),


      React.createElement("tr", null,
      React.createElement("td", null, "\xA0"),
      React.createElement("td", null,
      React.createElement("input", { type: "submit", value: "Save" }))))),




      React.createElement("p", null, this.state.username),
      React.createElement("p", null, this.state.password),
      React.createElement("p", null, this.state.fullName)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));