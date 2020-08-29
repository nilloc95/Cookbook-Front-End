import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardActions, CardContent, CardMedia,Button, Typography, IconButton, Card, Collapse, List} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IngredientList from './IngredientList';


const useStyles = makeStyles({
  root: {
    backgroundColor: "#EFEBE9",
    minHeight: 300,
    maxHeight:600
  },
  media: {
    height: 140,
  },
  list:{
    height: 300,
    overflowY: "scroll",
  },
  description: {
    height: 40,
    overflowY: 'hidden',
  }
});



export default function FoodCard( {Name, Description, img, Ingredients}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea target="_blank"href="https://www.myrecipes.com/recipe/pepperoni-pizza">
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Name}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank"href="https://www.myrecipes.com/recipe/pepperoni-pizza">
          Share
        </Button>
        <IconButton size="small" color="primary" 
          className={classes.expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography align="left" >                        
              <List component="ul" className={classes.list}>
                  {IngredientList}
              </List>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
// href="https://www.myrecipes.com/recipe/pepperoni-pizza"
