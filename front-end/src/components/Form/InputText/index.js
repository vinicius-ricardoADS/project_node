import { Form, FloatingLabel } from 'react-bootstrap'

export default function InputText({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  onChange,
  register,
  controlId,
}) {
  return (
    <FloatingLabel label={label} controlId={controlId} sm={2}>
      <Form.Control
        {...register(name)}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
      />
    </FloatingLabel>
  )
}
