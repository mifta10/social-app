import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import { useParams } from 'react-router';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: '70px',
    height: '70px',
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'cyan',
    margin: '2%',
    padding: '20px',
    borderRadius: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Comment = (props) => {
  const {id} =useParams();
  const classes = useStyles();
  const {name , email, body}= props.comment;

  const [img , setImg] = useState([]);
  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => setImg(data.results[0].picture.medium));
  }, [])
 console.log(img);
  return (
    <div>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            {<SmallAvatar alt={name} src={img} />}
          </StyledBadge>
        }
        title={name}
        subheader={email}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

export default Comment;