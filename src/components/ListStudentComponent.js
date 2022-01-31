import React, { Component } from 'react'
import { student } from '../mock/StudentData'
import { withRouter } from 'react-router-dom'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
    }

    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);
    }

    componentDidMount() {
        this.setState({ students: student })
    }

    addStudent() {
        this.props.history.push('/add-student/_add');
    }

    render() {
        const { student } = this.state.students
        const emptyData = 'No record found'
        return (
            console.log('state', this.state),
            console.log('props', this.props),
            <div>
                <h2 className="text-center">Student List</h2>
                <div className="row" style={{ width: 'fit-content' }}>
                    <button className="btn btn-primary"
                    onClick={ () => this.addStudent()}>Add New Student</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Student ID</th>
                                <th> Name</th>
                                <th> Course ID</th>
                                <th> Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.hasOwnProperty('student') ?
                                    student.map(
                                        student =>
                                            <tr key={student.id}>
                                                <td>{student.id ?
                                                    <button 
                                                    onClick={ () => this.viewStudent(student.id)}
                                                    style={{ border: 'none', color: 'blue', background:'none' }}>
                                                        {student.id}</button> : emptyData} </td>
                                                <td> {student.name || emptyData}</td>
                                                <td> {student.course || emptyData}</td>
                                                <td> {student.email || emptyData}
                                                </td>
                                            </tr>
                                    ) : 'No Record Found'
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default withRouter(ListStudentComponent)
