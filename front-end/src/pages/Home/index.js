import { Form, Button, Alert, Container } from 'react-bootstrap'
import InputText from '../../components/Form/InputText'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import '../../App'

const schema = yup
  .object({
    usuario: yup.string().required(),
    senha: yup.string().required(),
  })
  .required()

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [form, setForm] = useState({
    usuario: '',
    senha: '',
  })
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const response = await api.post('/', data)
    if (response.ok) {
      const res = await response.json()
      const token = res.token

      localStorage.setItem('token', token)
      navigate('/patients')
    } else {
      console.log('Erro na autenticação')
    }
  }

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Container className="bg-gray-form w-50">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="form-signin m-20 text-center"
      >
        <div>
          <h4>Enter with data</h4>
        </div>
        <div className="form-floating mb-3">
          <InputText
            controlId="formUser"
            label="Usuário"
            type="text"
            onChange={onChange}
            name="usuario"
            placeholder="Enter user"
            register={register}
          />
          {errors.usuario && (
            <Alert variant="danger">{errors.usuario.message}</Alert>
          )}
        </div>
        <div className="form-floating">
          <InputText
            controlId="formPassword"
            label="Password"
            onChange={onChange}
            type="password"
            name="senha"
            placeholder="Password"
            register={register}
          />
          {errors.senha && (
            <Alert variant="danger">{errors.senha.message}</Alert>
          )}
        </div>
        <Button className="m-2" variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </Container>
  )
}
