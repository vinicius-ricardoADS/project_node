import { Form, FloatingLabel } from 'react-bootstrap'

export default function Gender({ register, name, defaultValue, onChange }) {
  return (
    <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select
        aria-label="Floating label select example"
        {...register(name)}
      >
        <option
          selected={defaultValue === 'M' ? 'defaultValue' : ''}
          onChange={onChange}
          value="M"
        >
          Man
        </option>
        <option
          onChange={onChange}
          selected={defaultValue === 'F' ? 'selected' : ''}
          value="F"
        >
          Woman
        </option>
        <option
          onChange={onChange}
          selected={defaultValue === 'O' ? 'selected' : ''}
          value="O"
        >
          Others
        </option>
      </Form.Select>
    </FloatingLabel>
  )
}
