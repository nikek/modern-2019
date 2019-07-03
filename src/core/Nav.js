import React from 'react';
import { A } from 'hookrouter';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  link: {
    color: '#d5d',
    margin: props => props.margin,
  },
});

export default function Nav() {
  const classes = useStyle({ margin: 100 });
  return (
    <nav>
      <A className={classes.link} href="/">
        Home
      </A>
      <A className={classes.link} href="about">
        About
      </A>
    </nav>
  );
}
