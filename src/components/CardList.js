import React from 'react'
import { Grid } from '@material-ui/core';
import FoodCard from './Card'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        overflowY: 'scroll',
    }
})


const CardList = ({items}) =>{
    const classes = useStyles();
    const AllCards = items.map((user,i) => {
        return (
            <Grid item md={4} sm={6} xs={12}>
                <FoodCard Name={items[i].Name} img={items[i].img} Description={items[i].Description} id={items[i].id}/>
            </Grid>
        )
    })
        return(
            <Grid className={classes.container} container spacing={4}>
                {AllCards}                     
            </Grid>
        )   
}

export default CardList;


