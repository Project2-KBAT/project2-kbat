/* eslint-disable */
import { Component } from 'react';

class CommentForm extends Component {

    constructor() {
        super();
        this.state = {
            title: null,
            body: null,
            userId: 1,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    submit() {
        fetch('/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        }).then((response) => response.json()).then((data) => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Post Request Form</h3><br />
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Title :</label>
                                <input type="text" class="form-control" name="title" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label>Body :</label>
                                <textarea name="body" class="form-control" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentForm;