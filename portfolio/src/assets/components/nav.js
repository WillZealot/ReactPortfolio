import '../css/app.css'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const styles={
    nav : {
    display:'flex',
    justifyContent: 'end',
},
}
    

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Nav() {
  return (
    <div role="presentation" onClick={handleClick} style={styles.nav}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="text.primary" href="/">
          About Me
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/getting-started/installation/"
        >
          Resume
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Projects
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Contact Me
        </Link>
      </Breadcrumbs>
    </div>
  );
}