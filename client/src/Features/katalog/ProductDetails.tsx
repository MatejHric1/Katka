import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Produkt } from "../../App/models/produkty";
import agent from "../../App/api/agent";
import NotFound from "../../App/errors/NotFound";
import LoandingComponent from "../../App/layout/LoadingComponent";
import { useStoreContext } from "../../App/context/StoreContext";
import { LoadingButton } from "@mui/lab";

export default function ProductDetails() {
    const {basket, setBasket, removeItem} = useStoreContext();
    const {id} = useParams<{id: string}>();
    const[produkty, setProdukty] = useState<Produkt | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i => i.produktId === produkty?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        id && agent.Catalog.details(parseInt(id))
        .then(response => setProdukty(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));

    }, [id, item])

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
       if (parseInt(event.currentTarget.value) >= 0)
            setQuantity(parseInt(event.currentTarget.value));
    }

    function handleUpdateCart() {
        if (!produkty) return;
        setSubmitting(true);
        if (!item || quantity > item.quantity) {
            const updateQuantity = item ? quantity - item.quantity : quantity;
            agent.Basket.addItem(produkty.id, updateQuantity)
                .then(basket => setBasket(basket))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false))
        }else {
            const updateQuantity = item.quantity - quantity;
            agent.Basket.removeItem(produkty.id, updateQuantity)
                .then(() => removeItem(produkty.id, updateQuantity))
                .catch(error => console.log(error))
                .finally(() => setSubmitting(false));
        }
    }

    if (loading) return <LoandingComponent message='Načitavam...'/>

    if(!produkty) return <NotFound />

    return (
        <Grid container spacing ={6}>
            <Grid item xs={6}>
                <img src={produkty.fotkaUrl} alt={produkty.meno} style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{produkty.meno}</Typography>
                <Divider sx={{mb:2}} />
                <Typography variant='h4' color='secondary'>${(produkty.cena / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Meno</TableCell>
                                <TableCell>{produkty.meno}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Popis</TableCell>
                                <TableCell>{produkty.popis}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Typ</TableCell>
                                <TableCell>{produkty.typ}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Znacka</TableCell>
                                <TableCell>{produkty.znacka}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Množstvo na sklade</TableCell>
                                <TableCell>{produkty.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField 
                            onChange={handleInputChange}
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}  
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={submitting}
                            onClick={handleUpdateCart}
                            sx={{height: '55px'}}
                            color = 'primary'
                            size = 'large'
                            variant = 'contained'
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}