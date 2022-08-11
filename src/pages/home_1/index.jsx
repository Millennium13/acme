import React from 'react';

import Nature from '../../assets/nature.png';
import Gory from '../../assets/gory.jpg';
import Girl from '../../assets/girl.png';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const IndexHome_1 = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '70vh', sm: '90vh', md: '100vh', lg: '100vh' },
                    backgroundImage: `url(${Nature})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container>
                    <Container>
                        <Box sx={{ width: { xs: '70%', sm: '60%', md: '40%', lg: '40%' } }}>
                            <Typography sx={{ fontSize: { xs: '150%', sm: '400%', md: '400%', lg: '400%' }, fontWeight: 500, color: '#fff', pt: '25%' }}>
                                Serving you since 1989.
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '125%' }}>
                                Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                            </Typography>
                            <Link to="/shop_merch">
                                <Button variant="outlined"
                                    sx={{
                                        color: '#fff',
                                        borderColor: '#fff',
                                        textDecoration: 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            borderColor: '#fff',
                                            textDecoration: 'transparent',
                                        },
                                        mt: '7%'
                                    }}
                                >
                                    Shop merch
                                </Button>
                            </Link>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    // height: { xs: '70vh', sm: '90vh', md: '100vh', lg: '110vh' },
                }}
            >
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Container>
                            <Grid container spacing={2} columns={12} sx={{ pt: '7%' }}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 'none', backgroundColor: 'transparent' }}>
                                        <Typography>
                                            WAYS TO SUPPORT
                                        </Typography>
                                        <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                            Support Acme Outdoors.
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <Item sx={{ textAlign: 'left', boxShadow: 'none', backgroundColor: 'transparent' }}>
                                        <Typography>
                                            COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we've listed the best ways to help us through this season.
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} columns={12} sx={{ pt: '7%' }}>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <Box sx={{ backgroundColor: '#222222', height: '50vh' }}>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        color: '#fff',
                                                        fontSize: '400%',
                                                    }}
                                                >
                                                    01
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        mt: '5%'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            width: { xs: '50%', sm: '90%', md: '50%', lg: '50%' },
                                                            color: '#fff',
                                                            fontSize: '200%',
                                                        }}
                                                    >
                                                        SHOP PRODUCTS
                                                    </Typography>
                                                </Box>
                                                {/* <img src={Circle}
                                                    style={{
                                                        width: '25%',
                                                        marginTop: '17.5%',
                                                        marginLeft: '75.3%'
                                                    }}
                                                /> */}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        fontSize: '125%',
                                                        mt: '15%',
                                                        fontFamily: 'San'
                                                    }}
                                                >
                                                    Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <Box sx={{ backgroundColor: '#222222', height: '50vh' }}>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        color: '#fff',
                                                        fontSize: '400%',
                                                    }}
                                                >
                                                    02
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        mt: '5%'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            width: { xs: '50%', sm: '90%', md: '50%', lg: '50%' },
                                                            color: '#fff',
                                                            fontSize: '200%',
                                                        }}
                                                    >
                                                        DONATE
                                                    </Typography>
                                                </Box>
                                                {/* <img src={Circle}
                                                    style={{
                                                        width: '25%',
                                                        marginTop: '17.5%',
                                                        marginLeft: '75.3%'
                                                    }}
                                                /> */}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        fontSize: '125%',
                                                        mt: '15%',
                                                        fontFamily: 'San'
                                                    }}
                                                >
                                                    Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <Box sx={{ backgroundColor: '#222222', height: '50vh' }}>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        color: '#fff',
                                                        fontSize: '400%',
                                                    }}
                                                >
                                                    03
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        mt: '5%'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            width: { xs: '50%', sm: '90%', md: '50%', lg: '50%' },
                                                            color: '#fff',
                                                            fontSize: '200%',
                                                        }}
                                                    >
                                                        BUY GIFT CARDS
                                                    </Typography>
                                                </Box>
                                                {/* <img src={Circle}
                                                    style={{
                                                        width: '25%',
                                                        marginTop: '17.5%',
                                                        marginLeft: '75.3%'
                                                    }}
                                                /> */}
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        textAlign: 'left',
                                                        fontSize: '125%',
                                                        mt: '15%',
                                                        fontFamily: 'San'
                                                    }}
                                                >
                                                    Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '60vh', sm: '80vh', md: '90vh', lg: '90vh' },
                    backgroundImage: `url(${Gory})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    mt: '10%',
                }}>
                <Container>
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                            <Box
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '80%', lg: '60%' },
                                    textAlign: 'right'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '150%', sm: '350%', md: '350%', lg: '350%' },
                                        fontWeight: 500,
                                        color: '#fff',
                                        pt: '15%'
                                    }}
                                >
                                    How we're keeping you safe during COVID-19
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: '125%',
                                            width: { xs: '100%', sm: '90%', md: '70%', lg: '80%' }
                                        }}
                                    >
                                        As an outdoor shop, we've taken precautionary measures to ensure the safety of all our customers and team members.
                                    </Typography>
                                </Box>
                                <Link to="/read_our_stat">
                                    <Button variant="contained"
                                        sx={{
                                            color: '#000',
                                            backgroundColor: '#fff',
                                            borderColor: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#EB5757',
                                                color: '#fff',
                                                borderColor: '#fff',
                                            },
                                            mt: '7%'
                                        }}
                                    >
                                        Read Our Statement
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '270vh', sm: '190vh', md: '110vh', lg: '100vh' },
                    mt: '5%',
                }}>
                <Container>
                    <Container>
                        <Box>
                            <Typography sx={{ fontSize: '110%' }}>
                                SHOP PRODUCTS
                            </Typography>
                            <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                Open 24/7/365.
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg"
                                                style={{ width: '100%', height: '300px', borderRadius: '5px' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: '#000', mt: '5%' }}>
                                                White Tent
                                            </Typography>
                                            <Typography sx={{ color: '#000', }}>
                                                $ 200.00 USD
                                            </Typography>
                                            <Button variant="contained"
                                                sx={{
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    borderColor: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                        borderColor: '#fff',
                                                    },
                                                    mt: '7%'
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg"
                                                style={{ width: '100%', height: '300px', borderRadius: '5px' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: '#000', mt: '5%' }}>
                                                Tin Coffee Tumbler
                                            </Typography>
                                            <Typography sx={{ color: '#000', }}>
                                                $ 35.00 USD
                                            </Typography>
                                            <Button variant="contained"
                                                sx={{
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    borderColor: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                        borderColor: '#fff',
                                                    },
                                                    mt: '7%'
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box>
                                            <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg"
                                                style={{ width: '100%', height: '300px', borderRadius: '5px' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: '#000', mt: '5%' }}>
                                                Blue Canvas Pack
                                            </Typography>
                                            <Typography sx={{ color: '#000', }}>
                                                $ 95.00 USD <u style={{ color: '#EB5757' }}> $ 145.00 USD</u>
                                            </Typography>
                                            <Button variant="contained"
                                                sx={{
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    borderColor: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                        borderColor: '#fff',
                                                    },
                                                    mt: '7%'
                                                }}
                                            >
                                                Details
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Box sx={{ textAlign: 'center' }}>
                                <Button variant="contained"
                                    sx={{
                                        color: '#fff',
                                        backgroundColor: '#000',
                                        borderColor: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#EB5757',
                                            color: '#fff',
                                            borderColor: '#fff',
                                        },
                                        mt: '5%',
                                        width: { xs: '70%', sm: '30%', md: '20%', lg: '20%' },
                                    }}
                                >
                                    View All Products
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    mt: '5%',
                }}
            >
                <Container>
                    <Container>
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
                                            <img src={Girl} style={{ borderRadius: '7px', width: '100%' }} />
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
                                            <Box sx={{ width: '45%', textAlign: 'left' }}>
                                                <Typography sx={{ fontSize: '300%', mt: '10%' }}>
                                                    Shop Local.
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - were not sure what the future holds either.
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    That said: we know that we love making sure you have the gear you need for your adventures, and were going to keep doing that - with our team - until the city tells us we can't.
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    But as long as folks like yourself support small businesses around the city, then well be here — every day, making sure your orders arrive on time.
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    - - - - - - -
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    Jane & John Doe
                                                </Typography>
                                                <Typography sx={{ mt: '2%' }}>
                                                    Acme Outdoors
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Box >
    );
};

export default IndexHome_1;