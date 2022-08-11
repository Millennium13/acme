import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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

const IndexFooter = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 200,
                backgroundColor: 'black',
            }}
        >
            <Container>
                <Container>
                    <Box sx={{ flexGrow: 1, pt: '5%' }}>
                        <Grid container spacing={2} columns={12}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Item
                                    sx={{
                                        backgroundColor: 'red',
                                        textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                                        p: '3%',
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg' />
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Item
                                    sx={{
                                        color: '#fff',
                                        textAlign: { xs: 'center', sm: 'right', md: 'right', lg: 'right' },
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    <TwitterIcon sx={{ fontSize: '200%', p: '1.5%' }} />
                                    <FacebookOutlinedIcon sx={{ fontSize: '200%', p: '1.5%' }} />
                                    <InstagramIcon sx={{ fontSize: '200%', p: '1.5%' }} />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: '2%' }}>
                        <Typography sx={{ color: '#fff' }}>
                            Made In <u style={{ color: '#EB5757' }}>Webflow</u>. © 2020.
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
};

export default IndexFooter;