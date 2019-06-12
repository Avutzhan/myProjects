import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            _id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:9090/api/product/delete/' + this.state._id, {
            method: 'DelETE'
        })
        .then(function (resp) {
            alert('Done');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Delete Product</h3>
                    <table cellPadding="2" cellSpacing="2">
                        <tr>
                            <td>Id</td>
                            <td><input type="text" name="_id" value={this.state._id} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><input type="submit" value="Delete" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}

export default App;
