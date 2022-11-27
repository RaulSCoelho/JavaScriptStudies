import React from 'react'

import Location from 'React-Hooks/components/Location'
import Repositories from 'React-Hooks/components/Repositories'

export const ReactHooks: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Repositories />
      <Location />
    </div>
  )
}
