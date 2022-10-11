import React, { useEffect, useState } from 'react'

import { FETCH } from 'api/fetch'
import { Flex } from 'components/Flex'

export const Locations: React.FC = () => {
  const [countries, setContries] = useState([])

  useEffect(() => {
    async function fetchData() {
      return await FETCH.get({
        url: 'https://servicodados.ibge.gov.br/api/v1/paises',
        simple: true,
      })
    }
    fetchData().then(res => {
      const paises = []
      for (const pais in res) {
        for (const paisValues in res[pais]) {
          if (paisValues === 'nome') {
            paises.push(res[pais][paisValues].abreviado)
          }
        }
      }
      setContries(paises)
    })
  }, [])

  return (
    <Flex style={FlexStyle}>
      {countries.map((country, i) => {
        return (
          <h3
            style={{
              width: '20%',
              border: '1px solid black',
              margin: '2px',
              borderRadius: '0.25rem',
            }}
            key={i}
          >
            {country}
          </h3>
        )
      })}
    </Flex>
  )
}

const FlexStyle: React.CSSProperties = {
  overflow: 'auto',
  flexFlow: 'wrap',
  padding: '20px',
}
