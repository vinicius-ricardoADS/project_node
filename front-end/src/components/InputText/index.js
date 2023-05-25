import { Form, Row, Col } from 'react-bootstrap'

export default function InputText({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  register,
  controlId,
}) {
  return (
    <Form.Group as={Row} className="mb-3" controlId={controlId}>
      <Form.Label className="fw-bold" column sm={2}>
        {label}
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          {...register(name)}
          name={name}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
        />
      </Col>
    </Form.Group>
  )
}
