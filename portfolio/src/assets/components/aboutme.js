import '../css/app.css'
//import myPicture from '../images/Picsart_23-07-04_19-52-40-412.png'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

let style = {
    container: {
        display:'flex',
        flexWrap:'wrap',
        textAlign:'left',
        margin:'auto',
        paddingTop:'120px',
        maxWidth: '700px',
    },
    aboutmetext: {
        color:'white',
        fontSize:'20px'
    },
}

export default function AboutMe() {
  const rightContent = (
    <div style={style.aboutmetext}>
      {`I'm a versatile software developer with expertise in both frontend and backend development, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. My skill set includes JavaScript, Node.js, CSS, HTML, MySQL, and NoSQL databases.`}
    </div>);
    const leftContent = (
        <div style={style.aboutmetext}>
            {` I have a knack for crafting seamless user experiences, whether it's building web applications, Progressive Web Apps (PWAs), or RESTful APIs. With a passion for staying up-to-date with the latest technologies, I'm eager to tackle diverse challenges and contribute to innovative projects.`}
        </div>
    )
  

  return (
    <Grid container style={style.container}>
      <Grid item xs>
        {rightContent}
      </Grid>
      <Divider orientation="vertical" flexItem>
        <p style={style.aboutmetext}>&</p>
      </Divider>
      <Grid item xs>
        {leftContent}
      </Grid>
    </Grid>
  );
}