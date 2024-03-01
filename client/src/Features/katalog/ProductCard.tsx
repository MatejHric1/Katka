import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Produkt } from "../../App/models/prodkuty";

interface Props {
    produkty: Produkt;
}

export default function ProductCard({ produkty }: Props) {
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
                    ${(produkty.cena / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {produkty.znacka} / {produkty.typ}
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Pridať do košíka</Button>
            <Button size="small">Náhlaď</Button>
            </CardActions>
      </Card>
    )
}