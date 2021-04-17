import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import ReactDOM from "react-dom"
import App from "./components/App/App"
import store from "./store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
