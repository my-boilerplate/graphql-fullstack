/* eslint-disable prettier/prettier */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { CssBaseline, Box } from '@material-ui/core'
import { MainSidebar } from '../../components'
import useStyles from './style'

interface Rates {
  currency: string
  rate: number
  name: string
}

interface RatesData {
  rates: Rates[];
}

interface RatesVars {
  currency: string;
}

const GET_RATES = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      currency,rate,name
    }
  }
`

const Panel: React.FC = () => {
  const { loading, error, data } = useQuery<RatesData, RatesVars>(
    GET_RATES,
    { variables: { currency: 'USD' } }
  )
  console.log(data)
  const DATA = data && data.rates.map(rates => (
    <tr key="">
      <td>{rates.currency}</td>
      <td>{rates.name}</td>
      <td>{rates.rate}</td>
    </tr>
  ))
  const classes = useStyles()
  return (
    <Box>
      <MainSidebar />
      <main className={classes.content}>
        <CssBaseline />
        <div>
          <h3>Available Inventory</h3>
          {loading ? (
            <p>Loading ...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Name</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {DATA || error}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </Box>
  )
}

export default Panel
