import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Recap from './recap';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import '../style.css';
import 'typeface-josefin-sans';

const WhiteText = withStyles({
    root: {
      color: "#FFFFFF",
      fontFamily: 'Josefin Sans'
    }
  })(Typography);

  const BodyText = withStyles({
    root: {
      color: "#FFFFFF",
      fontFamily: 'Roboto'
    }
  })(Typography);

  

class Section extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        
        const {
            backgroundColor,
            imgpath,
            displayName,
            index,
            IntroText,
            MainText,
            qrpath1,
            qrpath2,
            qrpath3
        } = this.props;

        //Sfondo del colore primario rappresentativo con relativa icona
        if(displayName == "HEADER")
            return(
                <div style={{backgroundColor}}>
                    <Box textAlign="center" p={3}>                        
                        <Typography variant="h5" gutterBottom style={{color: "#3D414A"}}>
                            <Box fontWeight={700}>
                                {displayName}
                            </Box>
                        </Typography>
                        <Typography variant="body">
                            Donec sit amet turpis nec lorem vehicula lobortis eu vitae urna.<br/>
                            Duis congue sapien in nulla ornare hendrerit.<br/>
                            Praesent finibus augue eget mauris varius auctor.<br/>
                            Maecenas euismod urna vitae mi sagittis scelerisque.<br/>
                            Nulla rhoncus felis eget neque laoreet mattis.<br/>
                            Donec tristique, sapien vitae sodales pharetra, felis ex vehicula mauris,accumsan vestibulum leo nisi ac sem.<br/>
                            Sed nunc urna, elementum a dapibus nec, scelerisque sit amet leo.
                            <Recap/>
                            Vivamus ut urna volutpat sapien ultrices consectetur.<br/>
                            Suspendisse potenti.<br/>
                            Fusce vestibulum hendrerit sapien, et rhoncus nisi varius vel.<br/>
                            Integer viverra lectus et ex rutrum, id blandit mauris blandit.<br/>
                            Fusce ultrices nisi quis neque pretium varius.<br/>
                            Nullam ac commodo odio.<br/>
                            Pellentesque varius nulla efficitur, commodo quam ut, lobortis velit.<br/>
                            Aliquam sollicitudin sit amet quam sit amet tincidunt.<br/>
                            Etiam iaculis placerat purus, et commodo justo.<br/>
                            Donec sit amet orci tellus.
                        </Typography>
                    </Box>
                </div>
            );
        const toggle = "toggle" + index;
        const lbltoggle = "lbl-toggle" + index;
        const collapsible = "collapsible" + index;
        const collapsiblecontent = "collapsible-content" + index;
        const contentinner = "content-inner" + index;
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{backgroundColor}}
                className="collabsible"
                p={3}
            >
                <input id={collapsible} className={toggle} type="checkbox"/>
                <label for={collapsible} className={lbltoggle}>
                    <Box display="flex" justifyContent="center" m={1} id={displayName}>
                        <img src={imgpath} style={{maxHeight: "100px"}}/>
                    </Box>
                    <Box display="flex" justifyContent="center" m={1}>
                        <WhiteText variant="h5" gutterBottom>
                            <Box fontWeight={700}>
                                {displayName}
                            </Box>
                        </WhiteText>
                    </Box>
                </label>
                <div className={collapsiblecontent}>
                    <div className={contentinner}>               
                        <Grid container>
                            <Grid item xs={12}>
                                <BodyText style={{textAlign: "center"}}>
                                    {IntroText}
                                </BodyText>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Box m={3}>
                                    <img src={qrpath1} style={{maxHeight: "100px"}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <BodyText style={{textAlign: "center"}}>
                                    {MainText}
                                </BodyText>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <Box  mt={3} mb={3}>
                                    <img src={qrpath2} style={{maxHeight: "100px"}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <Box mt={3} mb={3}>
                                    <img src={qrpath3} style={{maxHeight: "100px"}}/>
                                </Box>
                            </Grid>
                        </Grid>          
                    </div>
                </div>
            </Grid>
        );
    }
}

export default Section;