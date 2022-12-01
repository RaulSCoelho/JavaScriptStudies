import { useEffect, useState } from 'react'

export default function Location() {
  const [location, setLocation] = useState<any>({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords
    setLocation({ latitude, longitude })
  }

  return (
    <div style={{ marginTop: '25px' }}>
      Latitude:
      {location.latitude}
      <br />
      Longitude:
      {location.longitude}
    </div>
  )
}
