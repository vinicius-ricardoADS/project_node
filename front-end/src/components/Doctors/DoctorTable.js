import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { get, remove } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function DoctorTable() {
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    get('/medicos/lista')
      .then((res) => res.json())
      .then((res) => setDoctors(res))
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
            <th>Salary</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nome}</td>
              <td>{doctor.crm}</td>
              <td>{doctor.sexo}</td>
              <td>{new Date(doctor.datanasc).toISOString().split('T')[0]}</td>
              <td>{doctor.salario}</td>
              <td>
                <Button
                  onClick={() => {
                    navigate(`/doctors/update/${doctor.id}`)
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
                    const response = await remove('/medicos/remover', doctor.id)
                    if (response) {
                      get('/medicos/lista')
                        .then((res) => res.json())
                        .then((res) => setDoctors(res))
                    }
                  }}
                  value={doctor.id}
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
