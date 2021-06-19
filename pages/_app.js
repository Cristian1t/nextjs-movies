import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout/layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    width: 80%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
