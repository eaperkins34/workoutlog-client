import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class WorkoutCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owner_properties: '',
            results: '',
            description: '',
            definition: ''
        };
    }
    handleChange = (event) => {
        // try console.log(event) to see when this method will be invoked
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateWorkoutsArray()
                this.setState({
                    owner_properties: '',
                    results: '',
                    description: '',
                    definition: ''
                }) 
            })
            
    }
    render() {
        return (
            <div>
                <h3>Log a Workout</h3>
                <hr />
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type="text" name="results" value={this.state.results} placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Type</Label>
                        <Input type="select" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Time">Time</option>
                            <option value="Weight">Weight</option>
                            <option value="Distance">Distance</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default WorkoutCreate;