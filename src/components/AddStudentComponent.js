import React, { Component } from 'react'

class AddStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            action: this.props.match.params.action,
            id: '',
            name: '',
            course: '',
            email: '',
        }
        this.nameFormChange = this.nameFormChange.bind(this);
        this.idFormChange = this.idFormChange.bind(this);
        this.courseFormChange = this.courseFormChange.bind(this);
        this.emailFormChange = this.emailFormChange.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        //set a JSON to be send to BE & then redirect to main page
        let student = {
            id: this.state.id, name: this.state.name, course: this.state.course,
            email: this.state.email
        };
        console.log('student => ' + JSON.stringify(student));

        this.props.history.push('/student')
    }

    nameFormChange = (event) => {
        this.setState({ name: event.target.value });
    }

    idFormChange = (event) => {
        this.setState({ id: event.target.value });
    }

    emailFormChange = (event) => {
        this.setState({ email: event.target.value });
    }

    courseFormChange = (event) => {
        this.setState({ course: event.target.value });
    }

    cancel() {
        this.props.history.push('/student');
    }

    render() {
        return (
            console.log('state', this.state),
            console.log('props', this.props),
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                'Add Student'
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Student ID: </label>
                                        <input placeholder="Student ID" name="studentID" className="form-control"
                                            value={this.state.id} onChange={this.idFormChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameFormChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Course Id: </label>
                                        <input placeholder="Course ID" name="course" className="form-control"
                                            value={this.state.course} onChange={this.courseFormChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Address: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                            value={this.state.email} onChange={this.emailFormChange} />
                                    </div>

                                    <div style={{marginTop: '10px'}}>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddStudentComponent
