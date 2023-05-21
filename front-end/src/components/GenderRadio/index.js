import { Form, Row, Col } from 'react-bootstrap'

export default function Gender({ register, name }) {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label className="fw-bold" as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col>
        <Row>
          <Col>
            <Form.Check
              {...register(name)}
              type="radio"
              label="Man"
              value="M"
              name={name}
              id="Man"
            />
          </Col>
          <Col>
            <Form.Check
              {...register(name)}
              type="radio"
              label="Woman"
              value="W"
              name={name}
              id="Woman"
            />
          </Col>
          <Col>
            <Form.Check
              {...register(name)}
              type="radio"
              value="O"
              label="Others"
              name={name}
              id="Others"
            />
          </Col>
        </Row>
      </Col>
    </Form.Group>
  )
}
