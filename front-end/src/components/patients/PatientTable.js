import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { get, remove } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function PatientTable() {
  const navigate = useNavigate()
  const [patients, setPatients] = useState([])

  useEffect(() => {
    get('/pacientes/lista')
      .then((res) => res.json())
      .then((res) => setPatients(res))
  }, [])
  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <Table responsive striped hover variant="dark">
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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.nome}</td>
              <td>{patient.cpf}</td>
              <td>{patient.sexo}</td>
              <td>{new Date(patient.datanasc).toISOString().split('T')[0]}</td>
              <td>
                <Button
                  onClick={() => {
                    navigate(`/patients/update/${patient.id}`)
                  }}
                  variant="primary"
                >
                  Edit
                </Button>{' '}
              </td>
              <td>
                <Button
                  onClick={async (e) => {
                    e.preventDefault()
                    const response = await remove(
                      '/pacientes/remover',
                      patient.id,
                    )
                    if (response) {
                      get('/pacientes/lista')
                        .then((res) => res.json())
                        .then((res) => setPatients(res))
                    }
                  }}
                  value={patient.id}
                  variant="danger"
                >
                  Remove
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
