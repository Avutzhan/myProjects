import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            _id: '',
            name: '',
            price: 0,
            quantity: 0,
            status: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:9090/api/product/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(function (resp) {
            alert('Done');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Update Product</h3>
                    <table cellPadding="2" cellSpacing="2">
                        <tr>
                            <td>Id</td>
                            <td><input type="text" name="_id" value={this.state._id} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td><input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>
                                <input type="checkbox" name="status" checked={this.state.status} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><input type="submit" value="Save" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}

export default App;
