import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

export const MyArrowleft = ({myonClick}) => {
  const classes = useArrowDarkButtonStyles();
  const gutterStyles = usePushingGutterStyles({
    firstExcluded: true,
    space: 2,
  });
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={classes}
	  onClick={myonClick}>
        <KeyboardArrowLeft />
      </Button>
    </Box>
  );
};

export const MyArrowright = ({myonClick}) => {
  const classes = useArrowDarkButtonStyles();
  const gutterStyles = usePushingGutterStyles({
    firstExcluded: true,
    space: 2,
  });
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={classes}
	  onClick={myonClick}>
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

