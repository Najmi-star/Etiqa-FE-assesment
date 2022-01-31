import React, { Component } from 'react'
import { singleStudent } from '../mock/StudentData';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: {}
        }

        this.nameFormChange = this.nameFormChange.bind(this);
        this.courseFormChange = this.courseFormChange.bind(this);
        this.emailFormChange = this.emailFormChange.bind(this);
    }

    componentDidMount() {
        console.log('student obj =>', singleStudent)
        this.setState({students : singleStudent})
    }

    updateStudent(id) {
        //should call BE with pass an id to update the user
        this.props.history.push(`/student`);
    }

    nameFormChange = (event) => {
        this.setState({ students : {
            student : {
                name : event.target.value
            }
        } });
    }

    courseFormChange = (event) => {
        this.setState({ students : {
            student : {
                course : event.target.value
            }
        } });
    }

    emailFormChange = (event) => {
        this.setState({ students : {
            student : {
                email : event.target.value
            }
        } });
    }

    cancel() {
        this.props.history.push('/student');
    }

    render() {
        const { student } = this.state.students
        return (
            console.log('state', this.state),
            console.log('props', this.props),
            <div>
                <br></br>
                {
                    this.state.students.hasOwnProperty('student') ? 
                    (
                        <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                {
                                    'Student : ' + (student.id ? student.id : '')
                                }
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> Student ID: </label>
                                            <input placeholder="Student ID" name="studentID" className="form-control"
                                                value={student.id || ''} disabled={true}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control"
                                                value={student.name  || ''} onChange={this.nameFormChange} disabled={false} required/>
                                        </div>
                                        <div className="form-group">
                                            <label> Course Id: </label>
                                            <input placeholder="Course ID" name="course" className="form-control"
                                                value={student.course  || ''} onChange={this.courseFormChange} disabled={false} required/>
                                        </div>
                                        <div className="form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="Email Address" name="email" className="form-control"
                                                value={student.email  || ''} onChange={this.emailFormChange} disabled={false} required/>
                                        </div>
    
                                        <div style={{marginTop: '10px'}}>
                                            <button className="btn btn-success" onClick={ () => this.updateStudent(student.id)}>Update</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    ) : null
                }
            </div>
        )
    }
}

export default UpdateStudentComponent
