import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyled = createGlobalStyle`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${props => {
    return props.theme.colors.gray;
  }}

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}`;
