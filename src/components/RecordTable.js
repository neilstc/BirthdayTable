import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function nameComparator(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

function ageComparator(a, b) {
    let x = a.dob.split('/').reverse().join('');
    let y = b.dob.split('/').reverse().join('');
    return x > y ? 1 : x < y ? -1 : 0;
}

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];

        this.filterByName = this.filterByName.bind(this);
        this.filterByAge = this.filterByAge.bind(this);
    }

    filterByName() {
        this.people.sort(nameComparator);
    }
    filterByAge() {
        this.people.sort(ageComparator);
    }
    render() {
        console.log(this.props.nameFilter, this.props.ageFilter);
        if (this.props.nameFilter) {
            this.filterByName();
        } else if (this.props.ageFilter) {
            this.filterByAge();
        }
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.people.map(person => (
                                <TableRow key={person.name}>
                                    <TableCell >{person.name}</TableCell>
                                    <TableCell >{person.dob}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
