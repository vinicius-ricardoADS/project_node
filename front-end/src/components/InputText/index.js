import { Form, Row, Col } from 'react-bootstrap'

export default function InputText({
  label,
  name,
  type,
  placeholder,
  register,
}) {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
      <Form.Label className="fw-bold" column sm={2}>
        {label}
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          {...register(name)}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </Col>
    </Form.Group>
  )
}
