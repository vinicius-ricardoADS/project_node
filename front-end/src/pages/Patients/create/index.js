import { Form, Container, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Gender from '../../../components/GenderRadio'
import InputText from '../../../components/InputText'
import { DateInput } from '../../../components/DateInput'

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
  const [selectedDate, handleDateChange] = useState(null)

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    console.log(data)
  }

  return (
    <Container className="bg-gray-form p-2 w-50">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Nome"
          type="text"
          name="nome"
          placeholder="Thomas Silva"
          register={register}
        />
        <p>{errors.nome?.message}</p>
        <InputText
          label="Cpf"
          type="text"
          name="cpf"
          placeholder="123.456.789-0"
          register={register}
        />
        <p>{errors.cpf?.message}</p>
        <Gender name="sexo" register={register} />
        <p>{errors.sexo?.message}</p>
        <DateInput
          value={selectedDate}
          onChange={handleDateChange}
          name="datanasc"
          label="Data de Nascimento"
          register={register}
        />
        <p>{errors.datanasc?.message}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
