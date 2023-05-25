import { Form, Container, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Gender from '../../../components/GenderRadio'
import InputText from '../../../components/InputText'
import DateInput from '../../../components/DateInput'
import * as api from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'

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
  })
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)
  const isEditing = !!id

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await api.getPatient('/pacientes/lista', parseInt(id))
      const patient = await response.json()
      setForm(patient)
    }

    fetchPatient()
  }, [id])

  const onSubmit = async (data) => {
    console.log(data)
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
  }

  return (
    <Container className="bg-gray-form p-2 w-50">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          controlId="formName"
          label="Nome"
          type="text"
          defaultValue={isEditing ? form.nome : ''}
          name="nome"
          placeholder="Thomas Silva"
          register={register}
        />
        {errors.nome && <Alert variant="danger">{errors.nome.message}</Alert>}
        <InputText
          controlId="formCpf"
          label="Cpf"
          defaultValue={isEditing ? form.cpf : ''}
          type="text"
          name="cpf"
          placeholder="123.456.789-0"
          register={register}
        />
        {errors.cpf && <Alert variant="danger">{errors.cpf.message}</Alert>}
        <Gender name="sexo" register={register} />
        {errors.sexo && <Alert variant="danger">{errors.sexo.message}</Alert>}
        <DateInput
          controlId="formDate"
          type="date"
          defaultValue={isEditing ? form.datanasc : ''}
          onChange={onChange}
          name="datanasc"
          label="Data de Nascimento"
          register={register}
        />
        {errors.datanasc && (
          <Alert variant="danger">{errors.datanasc.message}</Alert>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
