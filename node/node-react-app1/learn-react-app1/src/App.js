import React from 'react';
import './App.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:9090/api/product/findall')
			.then(res => res.json())
			.then(res => {
				this.setState({
					products: res
				});
			})
			.catch(error => {
				console.log(error)
			});
	}

	render() {
		return (
			<div>
				<h3>Product List</h3>
				<table cellPadding="3" cellSpacing="3">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Status</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Sub Total</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.map(function (p, index) {
							return (
								<tr>
									<td>{p._id}</td>
									<td>{p.name}</td>
									<td>{(p.status === true) ? 'yes' : 'none'}</td>
									<td>{p.price}</td>
									<td>{p.quantity}</td>
									<td>{p.price * p.quantity}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}

}


export default App;


