import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './Posts.css';
import { Button, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    display: "inline-block",
    height: 340,
    margin: "3%",
  },
}));


const Posts = (props) => {

  const {userId, id, title ,body} = props.post;
  console.log(props.post);
  const classes = useStyles();
  
  return (
   <Card className={classes.root}>
   <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="p" component="p">
            USER ID:{userId}
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            Post ID: {id}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/posts/${id}`}><Button size="small" variant="contained" color="primary">
          See More
            </Button></Link>
      </CardActions>
    </Card>
  );
};

export default Posts;