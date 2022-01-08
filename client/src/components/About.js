import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../photo3.jpg';
import { Box } from '@material-ui/core';
import '@fontsource/roboto/300.css';

const useStyles = makeStyles((theme) => ({
    main: {
        minWidth:100,
        minHeight:100
    }, 
    root: {
        display: 'flex',
        border: "none",
        boxShadow: "none",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    photo: {
        height: 300,
        width: 300,
        alignSelf:"center",
        borderRadius:"50%",
    },
    title : {
        marginLeft:"20%",
        // marginTop:"3%",
        fontFamily: "Roboto",
    },
    text: {
        maxWidth:1000,
        marginLeft:"20%",
        marginTop:"2%",
        fontFamily: "Roboto",
        fontSize:17,
        lineHeight:2
    }
}));

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Box width={1} height={1}>
        <Box width={1} height={1}>
            <CardMedia
                className={classes.photo}
                image={image}
            />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h6" variant="h6" className={classes.title}>
                Hi there!
            </Typography>
            <Typography variant="body1" className={classes.text}>
            I'm Natalia Harrow. I'm currently a software engineer at New Relic on the Unified Data Streams team where I explore the fun world of data streaming and gain expertise in distributed streaming systems, Java nad Kafka. <br/> 
                            I previously worked as a software engineering intern at Major League Baseball and MediaMath. I recently graduated cum laude with a B.S. degree in Computer Science from Grove School of Engineering at The City University of New York. <br/> <br/>
                            {bull} I'm interested in large scale distributed systems and love improving my software engnieering skillks always striving to write better quality code <br/>
                            {bull} I'm passionate about helping computer science students from underrepresented backgrounds fullfill their potential and navigate the tech field <br/>
                            {bull} I love New York City and feel at home in Los Angeles and Warsaw <br/>
                            {bull} I'm a dog mom to my sweet pup Ellie <br/>
            </Typography>
            </CardContent>
        </div>
        </Box>
      </Box>
  );
}