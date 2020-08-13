import React, { Component } from 'react'
import API from '../utils/API'
import EmployeeCard from '../EmployeeCard'

export default class Search extends Component {
    state = {
        search: "",
        results: []
    };


    componentDidMount() {
        API.search()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card">
                <div className="img-container">
                    <EmployeeCard />
                </div>
            </div>
        )
    }
}
