import { Form, Row, Col } from 'react-bootstrap'

export default function Gender({ register, name, defaultValue }) {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label className="fw-bold" as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col>
        <Form.Select aria-label="Default select example" {...register(name)}>
          <option
            selected={defaultValue === 'M' ? 'defaultValue' : ''}
            value="M"
          >
            Man
          </option>
          <option selected={defaultValue === 'F' ? 'selected' : ''} value="F">
            Woman
          </option>
          <option selected={defaultValue === 'O' ? 'selected' : ''} value="O">
            Others
          </option>
        </Form.Select>
      </Col>
    </Form.Group>
  )
}
