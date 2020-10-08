import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor() {
        super();
        this.state = {
            nameFilter: false,
            ageFilter: false
        }
        this.nameBoxHandler = this.nameBoxHandler.bind(this);
        this.ageBoxHandler = this.ageBoxHandler.bind(this);

    }


    nameBoxHandler = e => {
        this.setState({ nameFilter: !this.state.nameFilter }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        //  console.log(this.state.nameFilter);
    };

    ageBoxHandler = e => {
        this.setState({ ageFilter: !this.state.ageFilter }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
        //console.log(this.state.nameFilter);
    };

    render() {
        return (
            <div className="checkboxes">
                <Checkbox onChange={this.nameBoxHandler} />
                <label>Name</label>
                <Checkbox onChange={this.ageBoxHandler} />
                <label>Age</label>
            </div>
        );
    }
}
export default Filter;