import React from 'react';

import Tent from '../../assets/tent.jpg';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';

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

const IndexShop = () => {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#000' }}>
                <Typography sx={{ fontSize: '300%', color: '#fff', p: '2.5%' }}>
                    Shop Our Products
                </Typography>
            </Box>
            <Container>
                <Container>
                    <Box
                        sx={{
                            width: '100%',
                            height: { xs: '30vh', sm: '30vh', md: '40vh', lg: '40vh' },
                            backgroundImage: `url(${Tent})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '5px',
                            mt: '7%'
                        }}
                    >
                        <Box sx={{ textAlign: 'right' }}>
                            <Button variant="contained"
                                sx={{
                                    mt: '3%',
                                    mr: '3%',
                                    color: '#000',
                                    backgroundColor: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                            >
                                Featured Item
                            </Button>
                        </Box>
                        <Box sx={{ color: '#fff', mt: { xs: '18%', sm: '8%', md: '10%', lg: '10%' }, ml: '3%' }}>
                            <Typography sx={{ fontSize: '150%', fontWeight: 700 }}>
                                White Tent
                            </Typography>
                            <Typography>
                                $ 200.00 USD
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: '7%'
                        }}
                    >
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={16} sm={16} md={4} lg={4}>
                                <Item sx={{ boxShadow: 'none' }}>
                                    <Typography sx={{ textAlign: 'left', color: '#000', fontSize: '200%' }}>
                                        Shop by Category
                                    </Typography>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Button variant="outlined"
                                            sx={{
                                                width: '100%',
                                                color: '#000',
                                                borderColor: '#000',
                                                '&:hover': {
                                                    color: '#fff',
                                                    backgroundColor: '#000',
                                                    borderColor: '#000',
                                                },
                                                fontWeight: 700,
                                                mt: '5%'
                                            }}
                                        >
                                            Gift Cards
                                        </Button>
                                        <Button variant="outlined"
                                            sx={{
                                                width: '100%',
                                                color: '#000',
                                                borderColor: '#000',
                                                '&:hover': {
                                                    color: '#fff',
                                                    backgroundColor: '#000',
                                                    borderColor: '#000',
                                                },
                                                fontWeight: 700,
                                                mt: '5%'
                                            }}
                                        >
                                            Tents
                                        </Button>
                                        <Button variant="outlined"
                                            sx={{
                                                width: '100%',
                                                color: '#000',
                                                borderColor: '#000',
                                                '&:hover': {
                                                    color: '#fff',
                                                    backgroundColor: '#000',
                                                    borderColor: '#000',
                                                },
                                                fontWeight: 700,
                                                mt: '5%'
                                            }}
                                        >
                                            Accessories
                                        </Button>
                                        <Button variant="outlined"
                                            sx={{
                                                width: '100%',
                                                color: '#000',
                                                borderColor: '#000',
                                                '&:hover': {
                                                    color: '#fff',
                                                    backgroundColor: '#000',
                                                    borderColor: '#000',
                                                },
                                                fontWeight: 700,
                                                mt: '5%'
                                            }}
                                        >
                                            Packs
                                        </Button>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={16} sm={16} md={12} lg={12}>
                                <Item sx={{ boxShadow: 'none' }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2} columns={12}>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                                <Item sx={{ boxShadow: 'none' }}>
                                                    <Box>
                                                        <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg"
                                                            style={{ width: '100%', height: '225px', borderRadius: '5px' }}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: '#000', mt: '5%' }}>
                                                            Gift Card
                                                        </Typography>
                                                        <Typography sx={{ color: '#000', }}>
                                                            $ 25.00 USD
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
                                                            style={{ width: '100%', height: '225px', borderRadius: '5px' }}
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
                                                        <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg"
                                                            style={{ width: '100%', height: '225px', borderRadius: '5px' }}
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
                                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                                <Item sx={{ boxShadow: 'none' }}>
                                                    <Box>
                                                        <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg"
                                                            style={{ width: '100%', height: '225px', borderRadius: '5px' }}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: '#000', mt: '5%' }}>
                                                            Green Canvas Pack
                                                        </Typography>
                                                        <Typography sx={{ color: '#000', }}>
                                                            $ 125.00 USD
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
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
};

export default IndexShop;