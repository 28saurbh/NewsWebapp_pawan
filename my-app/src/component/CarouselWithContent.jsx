import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://static.toiimg.com/thumb/imgsize-1371845,msid-112415664,width-375,resizemode-4/112415664.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://upload.wikimedia.org/wikipedia/en/8/82/TheNewsTodayCover.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YFCMGVFJTVL2NJB4WPQZZHEEY4.jpg',
  },
];

export function CarouselWithContent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleViewMore = () => {
    // Handle the "View More" button click
    alert('View More clicked!');
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ position: 'relative' }}>
            <Box
              component="img"
              sx={{
                height: 255,
                display: 'block',
                maxWidth: 400,
                overflow: 'hidden',
                width: '100%',
              }}
              src={step.imgPath}
              alt={step.label}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for better contrast
                color: 'white',
                padding: '10px',
                textAlign: 'center',
                height: "-webkit-fill-available",
                display: 'flex',
                flexDirection: 'column', // Correct property name
                justifyContent: 'end', // Correct property name
                alignItems: 'start', // Center content horizontally
            
              }}
            >
              <Typography variant="h6" fontSize={15}>{step.label}</Typography>
              <Button
                // variant="contained"
                // color="white"
                sx={{ marginTop: 1 }}
                onClick={handleViewMore}
                
                style={{color: "whitesmoke", fontSize: "0.6rem", fontFamily: "sans-serif", padding: "8px 0", marginTop: "2px"}}
                className='text-white text-sm'
              >
                View More
              </Button>
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}
