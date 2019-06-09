//Redux Code
//action type
const ADD = 'ADD';
//action creator
const addMessage = message => {
  return {
    type: ADD,
    message };

};
//reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;}

};
//store
const store = Redux.createStore(messageReducer);

//React Code
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: '' });

  }
  render() {
    return (
      React.createElement("div", { className: "wrapper" },
      React.createElement("h2", null, "Type in a new Message: "),
      React.createElement("input", {
        value: this.state.value,
        onChange: this.handleChange }),
      React.createElement("br", null),
      React.createElement("button", { className: "pure-button", onClick: this.submitMessage }, "Submit"),
      React.createElement("ul", null,

      this.props.messages.map((message, id) => {
        return (
          React.createElement("li", { key: id }, message));

      }))));




  }}

// React-Redux
// Choose what state to pass to React Component
const mapStateToProps = state => {
  return { messages: state };
};
// Dispatch selected state to React component
const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: newMessage => {
      dispatch(addMessage(newMessage));
    } };

};

//provider
const Provider = ReactRedux.Provider;
//connect
const connect = ReactRedux.connect;
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
//AppWrapper
class AppWrapper extends React.Component {
  render() {
    return (
      React.createElement(Provider, { store: store },
      React.createElement(Container, null)));


  }}


ReactDOM.render(React.createElement(AppWrapper, null), document.getElementById('root'));