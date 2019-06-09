class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 20,
      username: 'abc',
      product: {
        id: 'p01',
        name: 'name 1',
        price: 2,
        quantity: 3,
        photo: 'https://cdn-animationscho.pressidium.com/wp-content/uploads/2012/09/Studio-Ghibli-logo.gif' } };


  }

  changeState() {
    // Get current product
    let productInfo = Object.assign({}, this.state.product);

    // Assign with new values
    productInfo.name = 'name 2';
    productInfo.price = 9999;
    productInfo.photo = 'https://res.cloudinary.com/teepublic/image/private/s--xOczOCmA--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1501115768/production/designs/1768208_1.jpg';

    this.setState({
      age: 22,
      username: 'PMKLab',
      product: productInfo });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("input", { type: "button", value: "Update State", onClick: this.changeState.bind(this) }),
      React.createElement("br", null), "Age: ",
      this.state.age,
      React.createElement("br", null), "Username: ",
      this.state.username,
      React.createElement("h3", null, "Product Info"),
      React.createElement("table", { cellPadding: "5", cellSpacing: "5" },
      React.createElement("tr", null,
      React.createElement("td", null, "Id"),
      React.createElement("td", null, this.state.product.id)),

      React.createElement("tr", null,
      React.createElement("td", null, "Name"),
      React.createElement("td", null, this.state.product.name)),

      React.createElement("tr", null,
      React.createElement("td", null, "Photo"),
      React.createElement("td", null,
      React.createElement("img", { src: this.state.product.photo, width: "100" }))),


      React.createElement("tr", null,
      React.createElement("td", null, "Price"),
      React.createElement("td", null, this.state.product.price)),

      React.createElement("tr", null,
      React.createElement("td", null, "Quantity"),
      React.createElement("td", null, this.state.product.quantity)),

      React.createElement("tr", null,
      React.createElement("td", null, "Total"),
      React.createElement("td", null, this.state.product.price * this.state.product.quantity)))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));