import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#282c34',
    color: 'lightgray',
    margin: '2%',
    padding: '50px',
    borderRadius: '20px',
    marginBottom: '40px',
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  },
  comment: {
    borderRadius: '10px'
  },
});


const SinglePost = () => {
  const classes = useStyles();

  const {id} = useParams();
  const [singlePost, setsinglePost] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
      const url =`https://jsonplaceholder.typicode.com/posts/${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => setsinglePost(data))
  }, [])

  useEffect(() => {
   const url=`https://jsonplaceholder.typicode.com/comments/?postId=${id}`
   fetch(url)
   .then(res => res.json())
   .then(data => setComment(data))
  }, [])
  console.log(singlePost);
  console.log(comment);
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            USER ID: {singlePost.userId}
          </Typography>
          <Typography className={classes.title} gutterBottom>
            POST ID: {singlePost.id}
          </Typography>
          <Typography variant="h5" component="h5">
            {singlePost.title}
          </Typography>
          <Typography variant="body2" component="p">
            {singlePost.body}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="center" m={1} p={1}  >
        <Box p={2} bgcolor="primary.main" color="primary.contrastText" className={classes.comment} >

          <Typography variant="h5" component="h5">
            Total Comments: {comment.length}
          </Typography>
        </Box>
      </Box>

      {
        comment.map(comment => <Comment comment={comment}></Comment>)
      }
    </div>
  );
};

export default SinglePost;