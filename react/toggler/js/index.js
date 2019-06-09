class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false };

    this.toggler = this.toggler.bind(this);
  }
  toggler() {
    this.setState({
      display: !this.state.display });

  }
  render() {
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("button", { className: "button", onClick: this.toggler }, "Click Meee"),
      this.state.display == true && React.createElement("img", { src: "https://i.imgflip.com/um3ro.jpg", alt: "React Logo" })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));