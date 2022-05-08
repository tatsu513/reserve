import 'ress';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Container } from '@mui/material';
import type { AppProps } from 'next/app';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ApolloProvider>
  );
}

export default MyApp;
