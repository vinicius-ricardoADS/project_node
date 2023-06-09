import { Form, Container, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Gender from '../../../components/Form/GenderRadio'
import * as api from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import RowTopDoctor from '../../../components/Form/FormRow/RowTopDoctor'
import RowBottomDoctor from '../../../components/Form/FormRow/RowBottomDoctor'
import '../../../App.css'
import { schemaDoctor } from '../../../components/Schema'

export default function FormCreateDoctor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDoctor),
  })
  const [form, setForm] = useState({
    nome: '',
    crm: '',
    datanasc: '',
    sexo: '',
    salario: '',
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = !!id

  useEffect(() => {
    const fetchPatient = async () => {
      if (isEditing) {
        const response = await api.getPatient('/medicos/lista', parseInt(id))
        const doctor = await response.json()
        const dateFormated = new Date(doctor.datanasc)
          .toISOString()
          .split('T')[0]
        const salary = parseFloat(doctor.salario)
        doctor.datanasc = dateFormated
        doctor.salario = salary
        setForm(doctor)
      }
    }

    fetchPatient()
  }, [id, isEditing])

  const onSubmit = async (data) => {
    if (isEditing) {
      await api.put('/medicos/cadastro', data, parseInt(id))
    } else {
      await api.post('/medicos/cadastro', data)
    }
    navigate('/doctors')
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
          <h4>Doctor</h4>
        </div>
        <div className="m-14">
          <RowTopDoctor
            isEditing={isEditing}
            onChange={onChange}
            form={form}
            errors={errors}
            register={register}
          />
        </div>
        <div className="m-14">
          <Gender
            defaultValue={isEditing ? form.sexo : ''}
            onChange={onChange}
            name="sexo"
            register={register}
          />
          {isEditing
            ? null
            : errors.sexo && (
                <Alert variant="danger">{errors.sexo.message}</Alert>
              )}
        </div>
        <div className="m-14">
          <RowBottomDoctor
            isEditing={isEditing}
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
