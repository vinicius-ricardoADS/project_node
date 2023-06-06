import { Row, Col, Alert } from 'react-bootstrap'
import InputText from '../../InputText'

export default function RowTopPatient({
  isEditing,
  onChange,
  form,
  errors,
  register,
}) {
  return (
    <Row className="g-2">
      <Col md>
        <InputText
          controlId="formName"
          label="Nome"
          type="text"
          onChange={onChange}
          defaultValue={isEditing ? form.nome : ''}
          name="nome"
          placeholder="Thomas Silva"
          register={register}
        />
        {isEditing
          ? null
          : errors.nome && (
              <Alert variant="danger">{errors.nome.message}</Alert>
            )}
      </Col>
      <Col md>
        <InputText
          controlId="formCpf"
          label="Cpf"
          defaultValue={isEditing ? form.cpf : ''}
          type="text"
          onChange={onChange}
          name="crm"
          placeholder="123.456.789-0"
          register={register}
        />
        {isEditing
          ? null
          : errors.cpf && <Alert variant="danger">{errors.cpf.message}</Alert>}
      </Col>
    </Row>
  )
}
