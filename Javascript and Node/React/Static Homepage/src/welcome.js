import React from 'react';
import Section from "./navigation/section"
import Tutorial from "./tutorial"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Welcome() {
    const classes = useStyles();

    return (
        <div id="WelcomeContainer" className={classes.root} align="center">
            <Section
                index="0"
                backgroundColor="white"
                displayName="HEADER"
            />
            <Tutorial/>
            <Section
                index="1"
                backgroundColor="#ef6363"
                imgpath={'../data/icons/study.png'}
                displayName="TEXT"
                IntroText="
                    Lorem Ipsum
                "
                MainText="
                    Lorem ipsum dolor sit amet
                "
                qrpath1="../data/qr/qr.png"
                qrpath2="../data/qr/qr.png"
                qrpath3="../data/qr/qr.png"
            />
            <Section
                index="2"
                backgroundColor="#efa263"
                imgpath={'../data/icons/video.png'}
                displayName="VIDEO"
                IntroText="consectetur adipiscing elit."
                MainText="
                    In sollicitudin, magna ac facilisis laoreet, diam erat eleifend sem, eget congue nunc dolor quis orci
                "
                qrpath1="../data/qr/qr.png"
                qrpath2="../data/qr/qr.png"
                qrpath3="../data/qr/qr.png"
            />            
            <Section
                index="3"
                backgroundColor="#3b8f8f"
                imgpath={'../data/icons/photo.png'}
                displayName="PHOTO"
                IntroText="
                    Nunc accumsan vitae nisi eu efficitur.
                "
                MainText="
                    Cras ultrices eu arcu vehicula ornare.
                "
                qrpath1="../data/qr/qr.png"
                qrpath2="../data/qr/qr.png"
                qrpath3="../data/qr/qr.png"
            />
            <Section
                index="4"
                backgroundColor="#4fbf4f"
                imgpath={'../data/icons/xtra.png'}
                displayName="EXTRA"
                qrpath1="../data/qr/qr.png"
                qrpath2="../data/qr/qr.png"
                qrpath3="../data/qr/qr.png"
                IntroText="
                    Nullam venenatis lacus vel auctor vestibulum.
                "
                MainText="
                    Quisque placerat aliquam nisl, sed consectetur mauris cursus eget.
                "
            />
        </div>
    );
}