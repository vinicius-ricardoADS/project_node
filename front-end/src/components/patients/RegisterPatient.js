import { User } from 'lucide-react'

export default function RegisterPatient() {
  return (
    <div className="col-6 login-margin relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
      <a
        href="/patients/create"
        className="text-gray text-decoration-none text-gray-50 flex-shrink-0 d-flex align-items-center justify-content-center me-3 items-center gap-3 text-left"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h-5 w-5 text-gray" />
        </div>
        <p className="max-w-[140px] text-sm leading-snug mb-0 ms-3">
          <span className="underline">Cadastrar paciente</span>
        </p>
      </a>
    </div>
  )
}
