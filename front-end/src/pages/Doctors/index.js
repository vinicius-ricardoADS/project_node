import RegisterDoctor from '../../components/Doctors/RegisterDoctor'
import DoctorTable from '../../components/Doctors/DoctorTable'

export default function Doctors() {
  return (
    <div className="grid min-h-screen grid-cols-2 container">
      <div>
        {/* */}
        <RegisterDoctor />
        {/* */}
      </div>
      <div className="flex flex-col bg-cover p-16">
        {/* */}
        <DoctorTable />
        {/* */}
      </div>
    </div>
  )
}
