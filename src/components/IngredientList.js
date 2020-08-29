import React from 'react';
import items from './items'
import {ListItem, ListItemText, Checkbox} from '@material-ui/core/';


const IngredientList = items[0].Ingredients.map((Items,i) =>{
    
    return(
        <ListItem key={Items.toString()} dense ContainerComponent="li">
            <Checkbox color='primary' id={i}/>
            <label for={i}>
                <ListItemText primary={Items}></ListItemText>
            </label>
            
        </ListItem>
    );
})




export default IngredientList;
