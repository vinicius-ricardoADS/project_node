import * as yup from 'yup'

export const schemaDoctor = yup
  .object({
    nome: yup.string().required(),
    crm: yup.string().required(),
    sexo: yup.string().required(),
    datanasc: yup.string().required(),
    salario: yup.number().required(),
  })
  .required()

export const schemaPatient = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    sexo: yup.string().required(),
    datanasc: yup.string().required(),
  })
  .required()

export const schemaAppointment = yup
  .object({
    data: yup.string().required(),
    hora: yup.string().required(),
    idPaciente: yup.number().required(),
    idMedico: yup.number().required(),
  })
  .required()
