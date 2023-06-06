import { Form, Container, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as api from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import RowTopPatient from '../../../components/Form/FormRow/RowTopPatient'
import RowBottomPatient from '../../../components/Form/FormRow/RowBottomPatient'
import '../../../App.css'

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    sexo: yup.string().required(),
    datanasc: yup.string().required(),
  })
  .required()

export default function FormCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    datanasc: '',
    sexo: '',
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = !!id

  useEffect(() => {
    const fetchPatient = async () => {
      if (isEditing) {
        const response = await api.getPatient('/pacientes/lista', parseInt(id))
        const patient = await response.json()
        const dateFormated = new Date(patient.datanasc)
          .toISOString()
          .split('T')[0]
        patient.datanasc = dateFormated
        setForm(patient)
      }
    }

    fetchPatient()
  }, [id, isEditing])

  const onSubmit = async (data) => {
    if (isEditing) {
      await api.put('/pacientes/cadastro', data, parseInt(id))
    } else {
      await api.post('/pacientes/cadastro', data)
    }
    navigate('/patients')
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

    console.log(form)
  }

  return (
    <Container className="bg-gray-form">
      <Form className="m-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h4>Patient</h4>
        </div>
        <div className="m-14">
          <RowTopPatient
            isEditing={isEditing}
            onChange={onChange}
            form={form}
            errors={errors}
            register={register}
          />
        </div>
        <div className="m-14">
          <RowBottomPatient
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
