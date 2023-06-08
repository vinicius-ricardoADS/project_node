import { Form, Container, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as api from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import '../../../App.css'
import { schemaAppointment } from '../../../components/Schema'
import RowBottomAppointment from '../../../components/Form/FormRow/RowBottomAppointment'
import RowTopAppointment from '../../../components/Form/FormRow/RowTopAppointment'

export default function FormCreateAppointment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAppointment),
  })
  const [form, setForm] = useState({
    data: '',
    hora: '',
    idPaciente: '',
    idMedico: '',
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = !!id

  useEffect(() => {
    const fetchAppointment = async () => {
      if (isEditing) {
        const response = await api.getPatient('/consultas/lista', parseInt(id))
        const appointment = await response.json()
        const dateFormated = new Date(appointment.data)
          .toISOString()
          .split('T')[0]
        appointment.data = dateFormated
        setForm(appointment)
      }
    }
    fetchAppointment()
  }, [id, isEditing])

  const onSubmit = async (data) => {
    if (isEditing) {
      await api.put('/consultas/cadastro', data, parseInt(id))
    } else {
      await api.post('/consultas/cadastro', data)
    }
    navigate('/appointments')
  }

  const onChange = (e) => {
    if (e.target.type === 'number') {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
      return
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Container className="bg-gray-form">
      <Form className="m-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h4>Appointment</h4>
        </div>
        <div className="m-14">
          <RowTopAppointment
            isEditing={isEditing ? form : ''}
            onChange={onChange}
            form={form}
            errors={errors}
            register={register}
          />
        </div>
        <div className="m-14">
          <RowBottomAppointment
            isEditing={isEditing ? form : ''}
            onChange={onChange}
            form={form}
            errors={errors}
            register={register}
          />
        </div>
        <div className="text-center">
          {isEditing ? (
            <Button variant="primary" type="submit">
              Edit
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </Container>
  )
}
