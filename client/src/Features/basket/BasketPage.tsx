import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useState } from "react";
import agent from "../../App/api/agent";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { removeItem, setBasket } from "./basketSlice";

export default function BasketPage() {
  const {basket } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState({
    loading: false,
    name: ''
  });

  function handleAddItem(produktId: number, name: string) {
    setStatus({loading: true, name});
    agent.Basket.addItem(produktId)
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(() => setStatus({loading: false, name: ''}))
  }

  function handleRemoveItem(produktId: number, quantity = 1, name: string) {
    setStatus({loading: true, name});
    agent.Basket.removeItem(produktId, quantity)
      .then(() => dispatch(removeItem({produktId, quantity})))
      .catch(error => console.log(error))
      .finally(() => setStatus({loading: false, name: ''}))
  }

  if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

    return (
      <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Produkt</TableCell>
              <TableCell align="right">Cena</TableCell>
              <TableCell align="center">Množstvo</TableCell>
              <TableCell align="right">Cena</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map(item => (
              <TableRow
                key={item.produktId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display='flex' alignItems='center'>
                    <img src={item.fotkaUrl} alt={item.meno} style={{height: 50, marginRight: 20}}/>
                    <span>{item.meno}</span>
                  </Box>
                </TableCell>
                <TableCell align="right">${(item.cena / 100).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <LoadingButton 
                    loading={status. loading && status.name === 'rem' + item.produktId} 
                    onClick={() => handleRemoveItem(item.produktId, 1, 'rem' + item.produktId)} 
                    color="error">
                    <Remove/>
                  </LoadingButton>

                  {item.quantity}

                  <LoadingButton 
                   loading={status. loading && status.name === 'add' + item.produktId} 
                   onClick={() => handleAddItem(item.produktId, 'add' + item.produktId)} 
                    color="secondary">
                    <Add />
                  </LoadingButton>
                  
                </TableCell>
                <TableCell align="right">${((item.cena / 100 ) * item.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                    <LoadingButton 
                      loading={status. loading && status.name === 'del' + item.produktId} 
                      onClick={() => handleRemoveItem(item.produktId, item.quantity, 'del' + item.produktId)} 
                      color='error'>
                         <Delete/>
                    </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
          <Grid item xs={6}/>
          <Grid item xs={6}>
          <BasketSummary/>
          <Button
            component={Link}
            to='/checkout'
            variant='contained'
            size='large'
            fullWidth
          >
              Checkout
          </Button>
        </Grid>
      </Grid>
      </>
    )
}