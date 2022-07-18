import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [category, setCategory] = useState('coffee'); 
    const [rating, setRating] = useState(0); 
    const [price, setPrice] = useState(0); 
    const [filename, setFilename] = useState(''); 
    const navigateTo = useNavigate(); 


    const handleProductCreation = (e) =>
    {
        e.preventDefault(); 
        if (title && description && category && price)
        {
            console.log({title, description, category, rating, price, filename}); 
            fetch('http://localhost:8000/products',{
                method: 'POST',
                headers: {"content-type":"application/json"},
                body: JSON.stringify({title, description, category, rating, price, filename})

            }).then ( () => navigateTo('/Products'))
        }
    }
  return (
    <Container  sx={{mt:20}}>


        <FormLabel> Add new Product</FormLabel>
        <form noValidate  onSubmit={handleProductCreation}> 
        <TextField 
            label='Product Name'
            onChange={ (e) => setTitle(e.target.value)}
            fullWidth
            required
            autoFocus
            variant='outlined'
            color="info">

            </TextField>

            <TextField 
                label='Product Description'
                onChange={(e) => setDescription(e.target.value)}
                required

                fullWidth
                variant='outlined'
                color='info'
                multiline
                rows={6}>

                </TextField>
                
                <TextField 
                label='Price'
                type='number'
                onChange={(e) => setPrice(e.target.value)}
                required

                fullWidth
                variant='outlined'
                color='info'
                >

                </TextField>
                <TextField
                    label='Image URL Address'
                    onChange={(e) => setFilename(e.target.value)}

                    fullWidth
                    variant='outlined'
                    
                     color='info'>

                    </TextField>

                <FormLabel> Select the product category</FormLabel>

                <FormControl fullWidth>
                    <RadioGroup 
                        defaultValue='coffee' 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                                <FormControlLabel control={ <Radio />} label='Fruit' value='fruit'/> 
                                <FormControlLabel control={ <Radio />} label='Dairy' value='dairy'/> 
                                <FormControlLabel control={ <Radio />} label='Coffee' value='coffee'/> 
                                <FormControlLabel control={ <Radio />} label='Chocolate' value='chocolate'/> 
                                <FormControlLabel control={ <Radio />} label='Vegetable' value='vegetable'/> 

                        
                    </RadioGroup>

                    
                </FormControl >
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange=
                     {(event, rating) => {
                        setRating(rating);
                      }}
                    />

            <Button type='submit' fullWidth variant='outlined'>Submit</Button>
            <Button type='reset' fullWidth variant='outlined'>Reset</Button>

        </form>
    </Container>
  )
}
