import { Row, Col, Alert } from 'react-bootstrap'
import DateInput from '../../DateInput'
import InputText from '../../InputText'

export default function RowBottomDoctor({
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
      <Col md>
        <InputText
          controlId="formSalario"
          label="Salario"
          defaultValue={isEditing ? form.salario : ''}
          type="number"
          onChange={onChange}
          name="salario"
          placeholder="2000"
          register={register}
        />
        {isEditing
          ? null
          : errors.cpf && (
              <Alert variant="danger">{errors.salario.message}</Alert>
            )}
      </Col>
    </Row>
  )
}
