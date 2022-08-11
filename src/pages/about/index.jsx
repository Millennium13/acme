import React from 'react';

import Family from '../../assets/family.jpg';
import Father from '../../assets/father.png';
import Hello from '../../assets/hello.jpg';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexAbout = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '70vh', sm: '90vh', md: '100vh', lg: '100vh' },
                    backgroundImage: `url(${Family})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container>
                    <Container>
                        <Box sx={{ width: { xs: '75%', sm: '65%', md: '45%', lg: '45%' } }}>
                            <Typography sx={{ fontSize: { xs: '150%', sm: '400%', md: '400%', lg: '400%' }, fontWeight: 500, color: '#fff', pt: '25%' }}>
                                Your Adventure Awaits
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '125%' }}>
                                Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                            </Typography>
                            <Button variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderColor: '#fff',
                                    },
                                    mt: '7%'
                                }}
                            >
                                Shop merch
                            </Button>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ textAlign: 'center', width: { xs: '90%', sm: '70%', md: '55%', lg: '40%' } }}>
                        <Typography sx={{ mt: '7%' }}>
                            WHY ACME OUTDOORS?
                        </Typography>
                        <Typography sx={{ fontSize: '200%', fontWeight: 700, mt: '5%' }}>
                            We're the best in the business.
                        </Typography>
                        <Typography sx={{ mt: '4%' }}>
                            From more than 30 years, we've been leading the way across Oklahoma — creating the best possible customer experience since 1989.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Container>
                        <Box sx={{ flexGrow: 1, mt: '5%' }}>
                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <Item sx={{ boxShadow: 'none' }} >
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84b9ccd071025d67c7e431_verified.svg' />
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <Typography sx={{ fontSize: '175%', fontWeight: 700 }}>
                                                Lifetime Warranty
                                            </Typography>
                                            <Typography>
                                                All our products — whether we make them or not — are backed by our lifetime warranty.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <Item sx={{ boxShadow: 'none' }} >
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba18359d4c7fc8ba04d2_cart.svg' />
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <Typography sx={{ fontSize: '175%', fontWeight: 700 }}>
                                                Shopping Experience
                                            </Typography>
                                            <Typography>
                                                All our products — whether we make them or not — are backed by our lifetime warranty.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <Item sx={{ boxShadow: 'none' }} >
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba26d07102b2bcc7e4fb_transport.svg' />
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <Typography sx={{ fontSize: '175%', fontWeight: 700 }}>
                                                On-time Delivery
                                            </Typography>
                                            <Typography>
                                                All our products — whether we make them or not — are backed by our lifetime warranty.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <Item sx={{ boxShadow: 'none' }} >
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg' />
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' } }}>
                                            <Typography sx={{ fontSize: '175%', fontWeight: 700 }}>
                                                Best in Class Service
                                            </Typography>
                                            <Typography>
                                                All our products — whether we make them or not — are backed by our lifetime warranty.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container >
                </Box >
                <Box>
                    <Container>
                        <Box
                            sx={{
                                width: '100%',
                                mt: '5%',
                            }}
                        >
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} columns={12}>
                                    <Grid item xs={12} sm={3} md={3} lg={3}>
                                        <Item sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    mt: '10%',
                                                }}
                                            >
                                                <img src={Father} style={{ borderRadius: '7px', width: '100%' }} />
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={9} md={9} lg={9}>
                                        <Item sx={{ boxShadow: 'none' }}>
                                            <Box
                                                sx={{
                                                    color: '#fff',
                                                    backgroundColor: '#000',
                                                    borderRadius: '7px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box sx={{ width: { xs: '90%', sm: '70%', md: '60%', lg: '50%' }, textAlign: 'left' }}>
                                                    <Typography sx={{ fontSize: '300%', mt: '10%' }}>
                                                        Meet the Owners
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions.
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.
                                                    </Typography>
                                                    <Typography sx={{ mt: '2%' }}>
                                                        To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box>
                    <Container>
                        <Box sx={{ flexGrow: 1, mt: '7%' }}>
                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d114eef39554b0e943d8_John%20Doe.png' style={{ width: '30%' }} />
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Box sx={{ width: { xs: '90%', sm: '80%', md: '70%', lg: '70%' } }}>
                                                <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                                    John Doe
                                                </Typography>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d11d180ebb04f6b16bd9_Jane%20Doe.png' style={{ width: '30%' }} />
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Box sx={{ width: { xs: '90%', sm: '80%', md: '70%', lg: '70%' } }}>
                                                <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                                    Jane Doe
                                                </Typography>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box >
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '75vh', sm: '90vh', md: '100vh', lg: '100vh' },
                    backgroundImage: `url(${Hello})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container>
                    <Container>
                        <Box sx={{ width: { xs: '75%', sm: '65%', md: '45%', lg: '45%' } }}>
                            <Typography sx={{ fontSize: { xs: '150%', sm: '400%', md: '400%', lg: '400%' }, fontWeight: 500, color: '#fff', pt: '25%' }}>
                                Need Help?
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '125%' }}>
                                Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we're ready to help!
                            </Typography>
                            <Button variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderColor: '#fff',
                                    },
                                    mt: '7%'
                                }}
                            >
                                Contact Support
                            </Button>
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Box >
    );
};

export default IndexAbout;