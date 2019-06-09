class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      description: '',
      status: true,
      gender: 'male',
      role: 'r2',
      languages: ['lang1', 'lang3'] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    let value = target.value;
    if (target.type === 'checkbox') {
      value = target.checked;
    }
    if (target.type === 'select-multiple') {
      var options = event.target.options;
      value = [];
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
    }
    const name = target.name;
    this.setState({
      [name]: value });

  }

  handleSubmit(event) {
    event.preventDefault();
    var result = 'Account Info<br/>';
    result += 'Username: ' + this.state.username + '<br/>';
    result += 'Password: ' + this.state.password + '<br/>';
    result += 'Description: ' + this.state.description + '<br/>';
    result += 'Status: ' + this.state.status + '<br/>';
    result += 'Gender: ' + this.state.gender + '<br/>';
    result += 'Role: ' + this.state.role + '<br/>';
    result += 'Languages: ' + this.state.languages + '<br/>';
    this.refs.result.innerHTML = result;
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.handleSubmit.bind(this) },
      React.createElement("table", { cellPadding: "2", cellSpacing: "2" },
      React.createElement("tr", null,
      React.createElement("td", null, "Username"),
      React.createElement("td", null, React.createElement("input", { type: "text", name: "username", value: this.state.username, onChange: this.handleChange }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Password"),
      React.createElement("td", null, React.createElement("input", { type: "password", name: "password", value: this.state.password, onChange: this.handleChange }))),

      React.createElement("tr", null,
      React.createElement("td", null, "Description"),
      React.createElement("td", null,
      React.createElement("textarea", { name: "description", cols: "20", rows: "5", value: this.state.description, onChange: this.handleChange }))),


      React.createElement("tr", null,
      React.createElement("td", null, "Status"),
      React.createElement("td", null,
      React.createElement("input", { type: "checkbox", name: "status", checked: this.state.status, onChange: this.handleChange }))),


      React.createElement("tr", null,
      React.createElement("td", null, "Gender"),
      React.createElement("td", null,
      React.createElement("input", { type: "radio", name: "gender", value: "male", checked: this.state.gender == 'male', onChange: this.handleChange }), " Male",
      React.createElement("input", { type: "radio", name: "gender", value: "female", checked: this.state.gender == 'female', onChange: this.handleChange }), " Female")),


      React.createElement("tr", null,
      React.createElement("td", null, "Role"),
      React.createElement("td", null,
      React.createElement("select", { name: "role", value: this.state.role, onChange: this.handleChange },
      React.createElement("option", { value: "r1" }, "Role 1"),
      React.createElement("option", { value: "r2" }, "Role 2"),
      React.createElement("option", { value: "r3" }, "Role 3"),
      React.createElement("option", { value: "r4" }, "Role 4"),
      React.createElement("option", { value: "r5" }, "Role 5")))),



      React.createElement("tr", null,
      React.createElement("td", null, "Languages"),
      React.createElement("td", null,
      React.createElement("select", { name: "languages", multiple: true, value: this.state.languages, onChange: this.handleChange },
      React.createElement("option", { value: "lang1" }, "Language 1"),
      React.createElement("option", { value: "lang2" }, "Language 2"),
      React.createElement("option", { value: "lang3" }, "Language 3"),
      React.createElement("option", { value: "lang4" }, "Language 4"),
      React.createElement("option", { value: "lang5" }, "Language 5")))),



      React.createElement("tr", null,
      React.createElement("td", null, "\xA0"),
      React.createElement("td", null, React.createElement("input", { type: "submit", value: "Save" }))))),



      React.createElement("div", { ref: "result" })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));