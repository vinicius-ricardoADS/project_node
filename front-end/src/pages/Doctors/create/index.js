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
    crm: yup.string().required(),
    sexo: yup.string().required(),
    datanasc: yup.string().required(),
    salario: yup.number().required(),
  })
  .required()

export default function FormCreateDoctor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
    <Container className="bg-gray-form p-2 w-50">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          controlId="formName"
          label="Nome"
          type="text"
          onChange={onChange}
          defaultValue={isEditing ? form.nome : ''}
          name="nome"
          placeholder="Thomas Silva"
          register={register}
        />
        {isEditing
          ? null
          : errors.nome && (
              <Alert variant="danger">{errors.nome.message}</Alert>
            )}
        <InputText
          controlId="formCrm"
          label="Crm"
          defaultValue={isEditing ? form.crm : ''}
          type="text"
          onChange={onChange}
          name="crm"
          placeholder="123.456.789-0"
          register={register}
        />
        {isEditing
          ? null
          : errors.cpf && <Alert variant="danger">{errors.crm.message}</Alert>}
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
        <DateInput
          controlId="formDate"
          type="date"
          defaultValue={isEditing ? form.datanasc : ''}
          onChange={onChange}
          name="datanasc"
          label="Data de Nascimento"
          register={register}
        />
        {isEditing
          ? null
          : errors.datanasc && (
              <Alert variant="danger">{errors.datanasc.message}</Alert>
            )}
        <InputText
          controlId="formSalario"
          label="Salario"
          defaultValue={isEditing ? form.salario : ''}
          type="number"
          onChange={onChange}
          name="salario"
          placeholder="2000"
          register={register}
        />
        {isEditing
          ? null
          : errors.cpf && (
              <Alert variant="danger">{errors.salario.message}</Alert>
            )}
        {isEditing ? (
          <Button variant="primary" type="submit">
            Edit
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  )
}
