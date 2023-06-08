import { HeartPulse } from 'lucide-react'

export default function RegisterAppointment() {
  return (
    <div className="login-margin relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
      <div className="d-flex">
        <a
          href="/appointments/create"
          className="text-gray text-decoration-none text-gray-50 flex-shrink-0 d-flex align-items-center justify-content-center me-3 items-center gap-3 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <HeartPulse className="h-5 w-5 text-gray" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug mb-0 ms-3">
            <span className="underline">Cadastrar Consulta</span>
          </p>
        </a>
      </div>
    </div>
  )
}
