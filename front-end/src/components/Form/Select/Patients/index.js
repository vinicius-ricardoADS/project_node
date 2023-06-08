import { Form, FloatingLabel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { get } from '../../../../services/api'

export default function SelectPatient({
  register,
  name,
  defaultValue,
  onChange,
}) {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    get('/pacientes/lista')
      .then((res) => res.json())
      .then((res) => setPatients(res))
  }, [])
  return (
    <FloatingLabel controlId="selectPatients" label="Patients">
      <Form.Select
        aria-label="Floating label select example"
        {...register(name)}
      >
        {patients.map((patient) => (
          <option
            key={patient.id}
            value={patient.id}
            selected={defaultValue === patient.id ? 'selected' : ''}
            onChange={onChange}
          >
            {patient.nome}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  )
}
