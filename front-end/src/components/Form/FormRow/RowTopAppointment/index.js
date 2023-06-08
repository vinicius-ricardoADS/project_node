/* eslint-disable no-redeclare */
import { Row, Col, Alert } from 'react-bootstrap'
import DateInput from '../../DateInput'
import InputText from '../../InputText'

export default function RowTopAppointment({
  isEditing,
  onChange,
  form,
  errors,
  register,
}) {
  return (
    <Row className="g-2">
      <Col md>
        <DateInput
          label="Data"
          type="date"
          onChange={onChange}
          name="data"
          register={register}
          controlId="FormDate"
          defaultValue={isEditing ? form.data : ''}
        />
        {isEditing
          ? null
          : errors.data && (
              <Alert variant="danger">{errors.data.message}</Alert>
            )}
      </Col>
      <Col md>
        <InputText
          label="Hora"
          name="hora"
          type="time"
          placeholder="10:30"
          defaultValue={isEditing ? form.hora : ''}
          onChange={onChange}
          register={register}
          controlId="FormHora"
        />
        {isEditing
          ? null
          : errors.hora && (
              <Alert variant="danger">{errors.hora.message}</Alert>
            )}
      </Col>
    </Row>
  )
}
