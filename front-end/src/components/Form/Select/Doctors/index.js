import { Form, FloatingLabel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { get } from '../../../../services/api'

export default function SelectDoctor({
  register,
  name,
  defaultValue,
  onChange,
}) {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    get('/medicos/lista')
      .then((res) => res.json())
      .then((res) => setDoctors(res))
  }, [])
  return (
    <FloatingLabel controlId="floatingSelect" label="Doctors">
      <Form.Select
        aria-label="Floating label select example"
        {...register(name)}
      >
        {doctors.map((doctor) => (
          <option
            key={doctor.id}
            value={doctor.id}
            selected={defaultValue === doctor.id ? 'selected' : ''}
            onChange={onChange}
          >
            {doctor.nome}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  )
}
