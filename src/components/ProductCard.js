import React, { useState } from 'react'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Card, CardContent, CardHeader, Container, CardActions, Typography, IconButton, CardMedia } from '@mui/material'



export default function ProductCard({product}) {

const [active,setActive]=useState(true);
 
  return (

    <Container>
         <Card elevation={2}>
      <CardHeader 
      action= {
        <IconButton onClick={e => {
          console.log("add to fav", product.id)
          setActive(!active);
          

        }}
       
        >
          {active ? <FavoriteBorderSharpIcon /> : <FavoriteIcon color="secondary"/>}

        </IconButton>
      }
      title={product.title}
      subheader = {product.type}
      
      />
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={product.filename}
        alt={product.rating}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}

      </Typography>
      
      </CardContent>
      <CardActions sx={{   display: "flex",
    justifyContent: "space-between"}}>
      <IconButton>
         <ShoppingCartIcon color="secondary" />
        </IconButton>

        <IconButton>
         <CheckIcon color="error" />
        </IconButton>
      </CardActions>

    </Card>
    </Container>
  )
}
