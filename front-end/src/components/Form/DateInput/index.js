/* eslint-disable react/display-name */
import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

/* const DateInput = React.forwardRef(({ label, value, onChange, name }, ref) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-bold">{label}</Form.Label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        className="form-control"
        name={name}
        ref={ref}
      />
    </Form.Group>
  )
}) */

export default function DateInput({
  label,
  type,
  onChange,
  name,
  register,
  controlId,
  defaultValue,
}) {
  return (
    <FloatingLabel label={label} controlId={controlId} sm={2}>
      <Form.Control
        {...register(name)}
        type={type}
        onChange={onChange}
        className="form-control"
        name={name}
        defaultValue={defaultValue}
      />
    </FloatingLabel>
  )
}
