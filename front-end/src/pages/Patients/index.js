import '../../App'
import RegisterPatient from '../../components/Patients/RegisterPatient'
import FindPatient from '../../components/Patients/FindPatient'
import PatientTable from '../../components/Patients/PatientTable'

export default function Patient() {
  return (
    <div className="grid min-h-screen grid-cols-2 container">
      <div className="d-flex flex-row">
        {/* */}
        <FindPatient />
        {/* */}
        <RegisterPatient />
        {/* */}
      </div>
      <div className="flex flex-col bg-cover p-16">
        {/* */}
        <PatientTable />
        {/* */}
      </div>
    </div>
  )
}
