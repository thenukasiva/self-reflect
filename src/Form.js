import React, { Component } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value } = event.target 

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)

        const {title, body} = this.state;
        localStorage.setItem(title, body);
    }


    render() {
        const {title, body } = this.state;

        return (
            <div>
                <form>
                    <FormGroup>
                    <Label>Title</Label>
                        <Input 
                            placeholder="Enter title"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange} />
                            </FormGroup>
                        <FormGroup>
                        <Label>Entry</Label>
                        <Input 
                            placeholder="What's up?"
                            type="textarea"
                            name="body"
                            id="body"
                            value={body}
                            onChange={this.handleChange} />
                              </FormGroup>  
                </form>
                <Button  color="danger" onClick={this.submitForm} size="lg" block>Submit</Button>
            </div>
        )
    }
}

export default Form;