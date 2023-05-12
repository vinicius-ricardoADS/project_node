import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';


export default function List () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/pacientes/lista', {
            headers: {
                'Accept': 'application/json',
            }
        }).then(res => res.json()).then(res => setPatients(res));
    })

    return (
        <> 
            <div className='text-center container align-content-center'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Cpf</th>
                            <th>Sex</th>
                            <th>Date of Birth</th>
                            <th colSpan={2}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.nome}</td>
                                <td>{patient.cpf}</td>
                                <td>{patient.sexo}</td>
                                <td>{format(new Date(patient.datanasc), 'yyyy-MM-dd')}</td>
                                <td><Button value={patient.id} as='a' href='/create' variant="primary">Edit</Button>{' '}</td>
                                <td><Button value={patient.id} as='a' href='/create' variant="danger">Remove</Button>{' '}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}