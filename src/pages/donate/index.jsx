import React from 'react';

import Boy from '../../assets/boy.png';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const IndexDonate = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '85vh', sm: '90vh', md: '100vh', lg: '100vh' },
                    backgroundImage: `url(${Boy})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Box sx={{ width: { xs: '90%', sm: '70%', md: '60%', lg: '53%' } }}>
                        <Typography sx={{ fontSize: '225%', mt: '25%', fontWeight: 800 }}>
                            Here at Acme Outdoors
                        </Typography>
                        <Typography sx={{ fontSize: '175%', mt: '1%' }}>
                            every dollar counts
                        </Typography>
                        <Typography sx={{ mt: '3%' }}>
                            Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '60%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
                        height: '80vh',
                        border: '2px solid black',
                        m: '5%',
                        borderRadius: '5px',
                    }}
                >
                    <Button variant="contained"
                        sx={{
                            height: '10vh',
                            width: '90%',
                            color: '#fff',
                            backgroundColor: '#EB5757',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#000',
                            },
                            fontWeight: 700,
                            mt: '5%',
                            fontSize: '125%',
                        }}
                    >
                        Donate $100
                    </Button>
                    <Button variant="contained"
                        sx={{
                            height: '10vh',
                            width: '90%',
                            color: '#fff',
                            backgroundColor: '#EB5757',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#000',
                            },
                            fontWeight: 700,
                            mt: '5%',
                            fontSize: '125%',
                        }}
                    >
                        Donate $50
                    </Button>
                    <Button variant="contained"
                        sx={{
                            height: '10vh',
                            width: '90%',
                            color: '#fff',
                            backgroundColor: '#EB5757',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#000',
                            },
                            fontWeight: 700,
                            mt: '5%',
                            fontSize: '125%',
                        }}
                    >
                        Donate $25
                    </Button>
                    <Button variant="contained"
                        sx={{
                            height: '10vh',
                            width: '90%',
                            color: '#fff',
                            backgroundColor: '#EB5757',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#000',
                            },
                            fontWeight: 700,
                            mt: '5%',
                            fontSize: '125%',
                        }}
                    >
                        Donate $15
                    </Button>
                    <Button variant="contained"
                        sx={{
                            height: '10vh',
                            width: '90%',
                            color: '#fff',
                            backgroundColor: '#EB5757',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#000',
                            },
                            fontWeight: 700,
                            mt: '5%',
                            fontSize: '125%',
                        }}
                    >
                        Donate $5
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default IndexDonate;