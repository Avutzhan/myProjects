class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      username: '',
      password: '',
      age: '',
      email: '',
      website: '' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Username
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "This field is required.";
    }

    if (typeof fields["username"] !== "undefined") {
      var length = fields["username"].length;
      if (length < 3 || length > 10) {
        formIsValid = false;
        errors["username"] = "Please enter a value between 3 and 10 characters long.";
      }
    }

    // Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "This field is required.";
    }
    if (typeof fields["password"] !== "undefined") {
      var length = fields["password"].length;
      if (length < 3 || length > 10) {
        formIsValid = false;
        errors["password"] = "Please enter a value between 3 and 10 characters long.";
      } else {
        var passwordValid = fields["password"].match(/^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$/i);
        if (!passwordValid) {
          formIsValid = false;
          errors["password"] = "Your password does not meet complexity requirements.";
        }
      }
    }

    // Age
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "This field is required.";
    }
    if (typeof fields["age"] !== "undefined") {
      var ageValid = fields["age"].match(/^\d+$/);
      if (!ageValid) {
        formIsValid = false;
        errors["age"] = "Please enter a valid number.";
      } else {
        var age = parseInt(fields["age"]);
        if (age < 18 || age > 120) {
          formIsValid = false;
          errors["age"] = "Please enter a value between 18 and 120.";
        }
      }
    }

    // Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "This field is required.";
    }
    if (typeof fields["email"] !== "undefined") {
      var emailValid = fields["email"].match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
      if (!emailValid) {
        formIsValid = false;
        errors["email"] = "Please enter a valid email address.";
      }
    }

    // Website
    if (typeof fields["website"] !== "undefined") {
      var websiteValid = fields["website"].match(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/);
      if (!websiteValid) {
        formIsValid = false;
        errors["website"] = "Please enter a valid URL.";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(event) {
    let fields = this.state.fields;
    let field = event.target.name;
    fields[field] = event.target.value;
    this.setState({ fields });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.handleSubmit.bind(this) },
      React.createElement("table", { cellPadding: "2", cellSpacing: "2" },
      React.createElement("tr", null,
      React.createElement("td", null, "Username"),
      React.createElement("td", null,
      React.createElement("input", { name: "username", type: "text", onChange: this.handleChange, value: this.state.fields["username"] })),

      React.createElement("td", null,
      React.createElement("span", { style: { color: "red" } }, this.state.errors["username"]))),


      React.createElement("tr", null,
      React.createElement("td", null, "Password"),
      React.createElement("td", null,
      React.createElement("input", { name: "password", type: "password", onChange: this.handleChange, value: this.state.fields["password"] })),

      React.createElement("td", null,
      React.createElement("span", { style: { color: "red" } }, this.state.errors["password"]))),


      React.createElement("tr", null,
      React.createElement("td", null, "Age"),
      React.createElement("td", null,
      React.createElement("input", { name: "age", type: "text", onChange: this.handleChange, value: this.state.fields["age"] })),

      React.createElement("td", null,
      React.createElement("span", { style: { color: "red" } }, this.state.errors["age"]))),


      React.createElement("tr", null,
      React.createElement("td", null, "Email"),
      React.createElement("td", null,
      React.createElement("input", { name: "email", type: "text", onChange: this.handleChange, value: this.state.fields["email"] })),

      React.createElement("td", null,
      React.createElement("span", { style: { color: "red" } }, this.state.errors["email"]))),


      React.createElement("tr", null,
      React.createElement("td", null, "Website"),
      React.createElement("td", null,
      React.createElement("input", { name: "website", type: "text", onChange: this.handleChange, value: this.state.fields["website"] })),

      React.createElement("td", null,
      React.createElement("span", { style: { color: "red" } }, this.state.errors["website"]))),


      React.createElement("tr", null,
      React.createElement("td", null, "\xA0"),
      React.createElement("td", null, React.createElement("input", { type: "submit", value: "Save" }))))),



      React.createElement("div", { ref: "result" })));


  }}




ReactDOM.render(React.createElement(App, null), document.getElementById('root'));