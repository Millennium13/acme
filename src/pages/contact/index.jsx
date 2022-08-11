import React from 'react';

import Phone from '../../assets/phone.png';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import TextareaAutosize from '@mui/material/TextareaAutosize';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexContact = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '150vh', sm: '80vh', md: '75vh', lg: '70vh' },
                    backgroundImage: `url(${Phone})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container>
                    <Container>
                        <Box
                            sx={{
                                flexGrow: 1,
                                width: { xs: '100%', sm: '100%', md: '60%', lg: '50%' }
                            }}
                        >
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={16} sm={8} md={8} lg={8}>
                                    <Item sx={{ mt: '10%' }}>
                                        <Box sx={{ p: '10%' }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg' />
                                            <Typography sx={{ fontSize: '200%', mt: '7%', fontWeight: 800 }}>
                                                Contact Us
                                            </Typography>
                                            <Typography sx={{ mt: '5%' }}>
                                                Just want to say hi? We'd love to hear from you. We love our customers and community!
                                            </Typography>
                                            <Button variant="contained"
                                                sx={{
                                                    mt: '5%',
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                    }
                                                }}
                                            >
                                                Send Us A Message
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={16} sm={8} md={8} lg={8}>
                                    <Item sx={{ mt: '10%' }}>
                                        <Box sx={{ p: '10%' }}>
                                            <img src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg' />
                                            <Typography sx={{ fontSize: '200%', mt: '7%', fontWeight: 800 }}>
                                                Get Support
                                            </Typography>
                                            <Typography sx={{ mt: '5%' }}>
                                                Have an issue with an order or with a product you purchased from us? Fill out our support form.
                                            </Typography>
                                            <Button variant="contained"
                                                sx={{
                                                    mt: '5%',
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                    }
                                                }}
                                            >
                                                Contact Support
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: '130vh', sm: '135vh', md: '85vh', lg: '75vh' },
                }}
            >
                <Container>
                    <Container>
                        <Box sx={{ flexGrow: 1, mt: '7%' }}>
                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box sx={{ textAlign: 'left', color: '#000' }}>
                                            <Typography sx={{ fontSize: '200%', color: '#000', fontWeight: 800 }}>
                                                Contact Us
                                            </Typography>
                                            <Typography sx={{ mt: '5%' }}>
                                                Acme Outdoors
                                            </Typography>
                                            <Typography>
                                                123 Rainy Street
                                            </Typography>
                                            <Typography>
                                                Oklahoma City, OK 73129
                                            </Typography>
                                            <Typography sx={{ mt: '10%' }}>
                                                <b>General Inquiries:</b> (405) 555-5555
                                            </Typography>
                                            <Typography>
                                                <b>Customer Support:</b> (405) 555-5556
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <Item sx={{ boxShadow: 'none' }}>
                                        <Box sx={{ textAlign: 'left', color: '#000' }}>
                                            <Typography sx={{ fontSize: '200%', color: '#000', fontWeight: 800 }}>
                                                Contact Form
                                            </Typography>
                                            <Typography>
                                                Send us a message and we'll get back to you as soon as we can!
                                            </Typography>
                                            <Typography sx={{ mt: '3%' }}>
                                                Name
                                            </Typography>
                                            <Box component="form" noValidate autoComplete="off">
                                                <FormControl sx={{ width: "100%" }}>
                                                    <OutlinedInput placeholder="Enter your name" />
                                                </FormControl>
                                            </Box>
                                            <Typography sx={{ mt: '3%' }}>
                                                Email Address
                                            </Typography>
                                            <Box component="form" noValidate autoComplete="off">
                                                <FormControl sx={{ width: "100%" }}>
                                                    <OutlinedInput placeholder="Enter your email address" />
                                                </FormControl>
                                            </Box>
                                            <Typography sx={{ mt: '3%' }}>
                                                Your Message
                                            </Typography>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={3}
                                                placeholder="Enter your message"
                                                style={{ width: '100%' }}
                                            />
                                            <Button variant="contained"
                                                sx={{
                                                    mt: '5%',
                                                    color: '#fff',
                                                    backgroundColor: '#EB5757',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                    }
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Box>
    );
};

export default IndexContact;