import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoandingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { useEffect, useState } from "react";
import { setBasket } from "../../Features/basket/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const buyerId = getCookie('byuerId');
  if (buyerId) {
    agent.Basket.get()
    .then(basket => dispatch(setBasket(basket)))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  } else {
    setLoading(false);
  }
 }, [dispatch])



  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ?  '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoandingComponent message="Initialising app.."/>

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App