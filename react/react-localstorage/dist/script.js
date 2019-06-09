class App extends React.Component {
  constructor() {
    super();
    this.state = {
      works: JSON.parse(localStorage.getItem('works')) != null ? JSON.parse(localStorage.getItem('works')) : '' };

  }

  add() {
    var title = this.refs.title.value;
    if (localStorage.getItem('works') == null) {
      var works = [];
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    } else {
      var works = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({
      works: JSON.parse(localStorage.getItem('works')) });

  }

  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('works'));
    list.splice(index, 1);
    this.setState({
      works: list });

    localStorage.setItem('works', JSON.stringify(list));
  }

  render() {
    let workList = '';
    if (localStorage.getItem('works') != null) {
      workList =
      React.createElement("ul", null,
      this.state.works.map(function (work, index) {
        return (
          React.createElement("li", { key: index }, work, " ", React.createElement("input", { type: "button", value: "X", onClick: this.delete.bind(this), "data-key": index })));

      }, this));


    }

    return (
      React.createElement("div", null,
      React.createElement("h3", null, "My To Do List"),
      React.createElement("input", { type: "text", placeholder: "Title...", ref: "title" }),
      React.createElement("input", { type: "button", value: "Add", onClick: this.add.bind(this) }),
      React.createElement("br", null), React.createElement("br", null),
      workList));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));