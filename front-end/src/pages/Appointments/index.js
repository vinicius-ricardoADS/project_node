import AppointmentsTable from '../../components/Appointments/AppointmentsTable'
import RegisterAppointment from '../../components/Appointments/RegisterAppointment'

export default function Appointments() {
  return (
    <div className="grid min-h-screen grid-cols-2 container">
      <div>
        {/* */}
        <RegisterAppointment />
        {/* */}
      </div>
      <div className="flex flex-col bg-cover p-16">
        {/* */}
        <AppointmentsTable />
        {/* */}
      </div>
    </div>
  )
}
