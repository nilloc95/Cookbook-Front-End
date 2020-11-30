import React, {useState, useEffect} from 'react';import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Grid, makeStyles } from '@material-ui/core';
import CardList from './components/CardList';
import Header from './Header';
import items from './components/items'
import { auth } from './firebase/firebase.utils';

const useStyles = makeStyles({
  recipes: {
    overflowY: 'auto',
    position: 'static',
    overflowX: 'none',
    marginTop: '75px'
  },

})


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
      return () => {
        setUser(null)    
      }
    }) 
    }, [])


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


  const HomePage = () => (
    <Grid  container spacing={1} direction='column' >
      <Grid className={classes.recipes} item container direction='row'>
          <Grid item xs={1}/>
          <Grid item xs={10} >
            <CardList items={filteredRecipes} />
          </Grid>
          <Grid item xs={1} />
      </Grid> 
    </Grid>
  )

  return (

    <div>
      <Header currentUser={user} handleSearchChange={handleSearchChange}/>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' render={() => <SignIn currentUser={user}/> }/>
      </Switch>
    </div>
  );
}

export default App;
