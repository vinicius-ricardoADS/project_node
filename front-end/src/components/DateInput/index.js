/* eslint-disable react/display-name */
import React from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateInput = React.forwardRef(
  ({ label, value, onChange, name }, ref) => {
    return (
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">{label}</Form.Label>
        <DatePicker
          selected={value}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          className="form-control"
          name={name}
          ref={ref}
        />
      </Form.Group>
    )
  },
)
