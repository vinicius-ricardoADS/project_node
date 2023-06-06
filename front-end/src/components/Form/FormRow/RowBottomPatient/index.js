import { Row, Col, Alert } from 'react-bootstrap'
import DateInput from '../../DateInput'
import Gender from '../../GenderRadio'

export default function RowBottomPatient({
  isEditing,
  onChange,
  form,
  errors,
  register,
}) {
  return (
    <Row className="g-2">
      <Col md>
        <Gender
          defaultValue={isEditing ? form.sexo : ''}
          onChange={onChange}
          name="sexo"
          register={register}
        />
        {isEditing
          ? null
          : errors.sexo && (
              <Alert variant="danger">{errors.sexo.message}</Alert>
            )}
      </Col>
      <Col md>
        <DateInput
          controlId="formDate"
          type="date"
          defaultValue={isEditing ? form.datanasc : ''}
          onChange={onChange}
          name="datanasc"
          label="Data de Nascimento"
          register={register}
        />
        {isEditing
          ? null
          : errors.datanasc && (
              <Alert variant="danger">{errors.datanasc.message}</Alert>
            )}
      </Col>
    </Row>
  )
}
