import Location from './routes/Location'
import Repositories from './routes/Repositories'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Repositories />
      <Location />
    </div>
  )
}
