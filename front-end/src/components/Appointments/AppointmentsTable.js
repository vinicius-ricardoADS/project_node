import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { get, remove } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function AppointmentsTable() {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    get('/consultas/lista')
      .then((res) => res.json())
      .then((res) => setAppointments(res))
  }, [])
  return (
    <div className="flex flex-1 items-center justify-center text-center">
      <Table responsive striped hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{new Date(appointment.data).toISOString().split('T')[0]}</td>
              <td>{appointment.hora}</td>
              <td>{appointment.nomePaciente}</td>
              <td>{appointment.nomeMedico}</td>
              <td>
                <Button
                  onClick={() => {
                    navigate(`/appointments/update/${appointment.id}`)
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
                      '/consultas/remover',
                      appointment.id,
                    )
                    if (response) {
                      get('/consultas/lista')
                        .then((res) => res.json())
                        .then((res) => setAppointments(res))
                    }
                  }}
                  value={appointment.id}
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
