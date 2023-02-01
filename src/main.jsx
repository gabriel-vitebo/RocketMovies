import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { Singing } from "./Pages/Singing"
import GlobalStyle from "./Styles/global"
import theme from "./Styles/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Singing />
    </ThemeProvider>
  </React.StrictMode>
)
