import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { FiThumbsUp, FiTrash, FiMoreHorizontal } from 'react-icons/fi';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <FiMoreHorizontal fontSize="large" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant="h6" component="h2">{post.title}</Typography>
            <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
                    <FiThumbsUp fontSize="small" />
                        &nbsp;Like ({post.likeCount})
                </Button>
                <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                    <FiTrash fontSize="small" />
                        Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;