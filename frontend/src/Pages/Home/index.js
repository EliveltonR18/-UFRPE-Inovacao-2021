import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// Components
import CalamityModal from '../../Components/Modals/CalamityModal'
// Stylesheet
import './index.scss'

const containerStyle = {
  width: window.innerWidth,
  height: window.innerHeight,
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })

  // add route to get atual location of user
  const location = {
    lat: -8.0995044,
    lng: -34.9175804,
  }

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(newMap) {
    const bounds = new window.google.maps.LatLngBounds()
    newMap.fitBounds(bounds)
    setMap(newMap)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='home'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
      <CalamityModal />
    </div>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
