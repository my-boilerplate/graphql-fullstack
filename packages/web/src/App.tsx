import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

// Styles
import { Global } from './styles'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
})

const App: React.FC = () => {
  const classes = Global()
  return (
    <ApolloProvider client={client}>
      <div className={classes.root}>
        <Router>
          <Routes />
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App
