import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Produkt } from "../../App/models/produkty";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../App/api/agent";
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../App/util/util";
import { useDispatch } from "react-redux";
import { setBasket } from "../basket/basketSlice";

interface Props {
    produkty: Produkt;
}

export default function ProductCard({ produkty }: Props) {
    
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    function handleAddItem(produktId: number) {
        setLoading(true);
        agent.Basket.addItem(produktId)
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading (false));
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
            avatar={
                <Avatar sx={{bgcolor: 'common.black'}}>
                    {produkty.meno.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={produkty.meno}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', color: 'common.black' }
            }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain' }}
                image={produkty.fotkaUrl}
                title={produkty.meno}
                />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    {currencyFormat(produkty.cena)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {produkty.znacka} / {produkty.typ}
                </Typography>
            </CardContent>
            <CardActions>
              <LoadingButton loading={loading} 
                onClick={() => handleAddItem(produkty.id)} 
                size="small">Pridať do košíka</LoadingButton>
                <Button component={Link} to={`/catalog/${produkty.id}`} size="small">Náhlaď</Button>
            </CardActions>
      </Card>
    )
}