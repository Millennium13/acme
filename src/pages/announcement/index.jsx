import React from 'react';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

const IndexShop = () => {
    return (
        <Box
            sx={{
                mt: '5%'
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#000'
                }}
            >
                <Container>
                    <Typography sx={{ fontSize: '200%', color: '#fff', p: '2.5%' }}>
                        How we're responding to COVID-19
                    </Typography>
                </Container>
            </Box>
            <Container>
                <Container>
                    <Box sx={{ p: '1%' }}>
                        <Typography sx={{ fontSize: '175%', mt: '5%', fontWeight: 800 }}>
                            What's a Rich Text element?
                        </Typography>
                        <Typography sx={{ mt: '2%' }}>
                            The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
                        </Typography>
                        <Typography sx={{ fontSize: '125%', fontWeight: 800, mt: '2%' }}>
                            Static and dynamic content editing
                        </Typography>
                        <Typography sx={{ mt: '2%' }}>
                            A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
                        </Typography>
                        <Typography sx={{ fontSize: '125%', fontWeight: 800, mt: '2%' }}>
                            How to customize formatting for each rich text
                        </Typography>
                        <Typography sx={{ mt: '2%' }}>
                            Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
};

export default IndexShop;