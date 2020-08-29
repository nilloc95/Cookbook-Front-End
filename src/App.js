import React, {useState, useEffect} from 'react';
import './App.css';
import { Grid, makeStyles } from '@material-ui/core';
import CardList from './components/CardList';
import Header from './Header';
import items from './components/items'

const useStyles = makeStyles({
  recipes: {
    maxHeight: '90vh',
    overflowY: 'scroll',
    position: 'static',
  },
  header: {
    marginBottom: '0.5vh',
  },
})
 

function App() {

  const [ search, setSearch ] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(items);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    setFilteredRecipes(
      items.filter(item => item.Name.toLowerCase().includes(search.toLowerCase())
    ))
    }, [search])
  

  const classes = useStyles();
  return (
    <Grid  container spacing={1} direction='column' >
      <Grid className={classes.header} item>
        <Header handleSearchChange={handleSearchChange}/>
      </Grid>
      <Grid className={classes.recipes} item container direction='row'>
          <Grid item xs={1}/>
          <Grid item xs={10} >
            <CardList items={filteredRecipes} />
          </Grid>
          <Grid item xs={1} />
      </Grid> 
    </Grid>
  );
}

export default App;
