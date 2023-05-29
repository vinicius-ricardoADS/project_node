import Form from 'react-bootstrap/Form'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import '../../App.css'

export default function FindPatient() {
  const { register } = useForm({})
  const [form, setForm] = useState({
    patient: '',
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="col-6 login-margin relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
      <div className="text-gray text-gray-50 flex-shrink-0 d-flex align-items-center justify-content-center me-3 items-center gap-3 text-left">
        <div className="col-md-9">
          <Form className="find">
            <Form.Group controlId="formGroupUser">
              <Form.Control
                onChange={onChange}
                {...register('patient')}
                name="patient"
                type="text"
                placeholder="Enter user"
              />
            </Form.Group>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <button type="submit" className="btn btn-icon">
                <Search className="text-gray" />
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
