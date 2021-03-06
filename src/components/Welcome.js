import React from 'react';
import '../App.css';
import './Welcome.css';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 6px',
      transform: 'scale(0.1)',
    },
  });

function Welcome() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className='main-container'>
            <h1>
                Natalia Harrow
            </h1>
            <p>
                <b>Software Engineer,</b> <i>currently at<mark className="blue"> <a href="https://newrelic.com/" target="_blank" rel="noreferrer" className="slide-left-right"> New Relic</a></mark></i>
            </p>
            <p className='menu'>
                <Link smooth to="#about" className="slide-left-right-white"> about </Link>
                {bull}
                <Link smooth to="#resume" className="slide-left-right-white"> resume </Link>
                {bull}
                <Link smooth to="#contact" className="slide-left-right-white"> contact </Link>
            </p>
        </div>
    );
}

export default Welcome;