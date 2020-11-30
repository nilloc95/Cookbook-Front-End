// import React, {useState, useEffect} from 'react';
// import '../App.css';
// import { Grid, makeStyles } from '@material-ui/core';
// import CardList from '../components/CardList';
// import Header from '../Header';
// import items from '../components/items'
// import { auth } from '../firebase/firebase.utils';

// const useStyles = makeStyles({
//   recipes: {
//     overflowY: 'auto',
//     position: 'static',
//     overflowX: 'none',
//     marginTop: '75px'
//   },
//   header: {
//     position: 'fixed',
//     width: '101%',
//     zIndex: 1,
//   },
// })
 

// function Homepage() {

//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     auth.onAuthStateChanged(user => {
//       setUser(user)
//       return () => {
//          setUser(null)    
//       }
//     }) 
//     }, [])


//   const [ search, setSearch ] = useState('');
//   const [filteredRecipes, setFilteredRecipes] = useState(items);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   }

//   useEffect(() => {
//     setFilteredRecipes(
//       items.filter(item => item.Name.toLowerCase().includes(search.toLowerCase())
//     ))
//     }, [search])
  

//   const classes = useStyles();
//   return (
//     <Grid  container spacing={1} direction='column' >
//       <Grid className={classes.header} item>
//         <Header currentUser={user} handleSearchChange={handleSearchChange}/>
//       </Grid>
//       <Grid className={classes.recipes} item container direction='row'>
//           <Grid item xs={1}/>
//           <Grid item xs={10} >
//             <CardList items={filteredRecipes} />
//           </Grid>
//           <Grid item xs={1} />
//       </Grid> 
//     </Grid>
//   );
// }

// export default Homepage;