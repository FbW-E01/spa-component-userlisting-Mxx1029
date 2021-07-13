import React from 'react';
import './UserList.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(x => x.json())
            .then(result => {

                this.setState({
                    users: result
                })
                // for (const key in this.state.users) {
                //     console.log(key, this.state.users[key]);
                // }   
                console.log(this.state.users)
                
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>  
                    <button
                        className="btn btn-lg btn-light" 
                        type="submit" 
                    >
                            Get Users
                    </button>
                </form>
                <div>
                    {this.state.users.map(user => {
                        return (
                            // if you return just the following line (no html elements)
                            // {user}
                            // you get this error: Error: Objects are not valid as a React child (found: object with keys {user}). If you meant to render a collection of children, use an array instead.
                            // if you return just the following line (no html elements)
                            // {user.name} 
                            // it can't compile, it thinks your trying to create an object (maybe w/ object destructuring?)
                            // if you return just the following line (no html elements)
                            // user.name
                            // you get all names without a space in between displayed

                            <table className="table table-hover">
                                <tbody>
                                    <tr className="table-info">
                                        <th>ID</th>
                                        <td>{user.id}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <th>Username</th>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <th>Full name</th>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <th>Email</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>{user.phone}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <th>Website</th>
                                        <td>{user.website}</td>
                                    </tr>
                                    <tr>
                                        <th>Company</th>
                                        <td>{user.company.name}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <th>Residence</th>
                                        <td>{user.address.city}</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        ) // end of return
                    })} 
                </div>
                
            </React.Fragment>
            
        )
    }
}

export default UserList;