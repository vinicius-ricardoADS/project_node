/* eslint-disable no-redeclare */
import { Row, Col, Alert } from 'react-bootstrap'
import SelectPatient from '../../Select/Patients'
import SelectDoctor from '../../Select/Doctors'

export default function RowBottomAppointment({
  isEditing,
  onChange,
  form,
  errors,
  register,
}) {
  return (
    <Row className="g-2">
      <Col md>
        <SelectPatient
          register={register}
          name="idPaciente"
          defaultValue={isEditing ? form.idPaciente : ''}
          onChange={onChange}
        />
        {isEditing
          ? null
          : errors.cpf && (
              <Alert variant="danger">{errors.idPaciente.message}</Alert>
            )}
      </Col>
      <Col md>
        <SelectDoctor
          register={register}
          name="idMedico"
          defaultValue={isEditing ? form.idPaciente : ''}
          onChange={onChange}
        />
        {isEditing
          ? null
          : errors.cpf && (
              <Alert variant="danger">{errors.idMedico.message}</Alert>
            )}
      </Col>
    </Row>
  )
}
