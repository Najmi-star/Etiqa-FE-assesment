import React, { Component } from 'react'
import { singleStudent } from '../mock/StudentData';

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: {}
        }
    }

    componentDidMount() {
        console.log('student obj =>', singleStudent)
        this.setState({students : singleStudent})
    }

    deleteStudent(id) {
        // Should delete the student via BE call with pass an ID
        this.setState({student: ''});
        this.props.history.push(`/student`);
    }

    updateStudent(id) {
        this.props.history.push(`/update-student/${id}`);
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
                                                value={student.name  || ''} disabled={true}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Course Id: </label>
                                            <input placeholder="Course ID" name="course" className="form-control"
                                                value={student.course  || ''} disabled={true}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="Email Address" name="email" className="form-control"
                                                value={student.email  || ''} disabled={true}/>
                                        </div>
    
                                        <div style={{marginTop: '10px'}}>
                                            <button className="btn btn-success" onClick={ () => this.updateStudent(student.id)}>Edit</button>
                                            <button className="btn btn-success" onClick={ () => this.deleteStudent(student.id)}
                                            style={{ marginLeft: "10px" }}>Delete</button>
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

export default ViewStudentComponent
