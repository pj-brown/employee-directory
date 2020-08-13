import React, { Component } from 'react'
import API from '../../utils/API'
import EmployeeCard from '../EmployeeCard'
import Search from '../Search'

export default class EmployeeContainer extends Component {
    state = {
        search: "",
        results: []
    };


    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // preventing the default bheavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };

    render() {
        return (
          <div>
            <Search />
            <div className="card">
                <div className="img-container">
                    <EmployeeCard 
                        // name={this.state.results.name.last}
                        // picture={this.state.results.picture.medium}
                        // location={this.state.results.location.city}
                    />
                </div>
            </div>
          </div>
        )
    }
}
