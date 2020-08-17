import React from 'react';
import 'fontsource-roboto';
import LogoImg from '../data/myself.png';
import Grid from '@material-ui/core/Grid';


function ImageLogo(){
    return (
        <a href="j27.reebo.it">
            <img src={LogoImg} style={{maxWidth: "250px", padding: "20px"}}></img>
        </a>
    );
}

function Logo(){
  return (
    <div style={{backgroundColor: '#fac5c0'}} id="LogoContainer" p={20}>
        <Grid container justify = "center">
            <ImageLogo/>
        </Grid>
            
    </div>
  );
}

export default function Jumbotron() {
    return (
        <div id="JumbotronContainer">
            <Logo />
        </div>
    )
}
