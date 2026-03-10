import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getToolsByCategory } from '@tools/index';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const Footer = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const categories = getToolsByCategory([], t);

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontWeight: 800 }}>
                            OmniTools.in
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Your one-stop toolkit for everything. 100+ tools for image editing, text manipulation, and more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 700 }}>
                                    Categories
                                </Typography>
                                <Stack spacing={1}>
                                    {categories.slice(0, 6).map((cat) => (
                                        <Link
                                            key={cat.type}
                                            component={RouterLink}
                                            to={`/categories/${cat.type}`}
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                                        >
                                            {cat.title}
                                        </Link>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: 700 }}>
                                    Contact
                                </Typography>
                                <Stack spacing={1}>
                                    <Link href="tel:+919294931405" color="text.secondary" variant="body2" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', '&:hover': { color: 'primary.main' } }}>
                                        <Icon icon="heroicons:phone" style={{ marginRight: '8px' }} /> +91 9294931405
                                    </Link>
                                    <Link href="mailto:hr9049963@gmail.com" color="text.secondary" variant="body2" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', '&:hover': { color: 'primary.main' } }}>
                                        <Icon icon="heroicons:envelope" style={{ marginRight: '8px' }} /> hr9049963@gmail.com
                                    </Link>
                                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                        <Link href="https://www.instagram.com/himanshu_verse" target="_blank" color="text.secondary" sx={{ '&:hover': { color: '#E1306C' } }}>
                                            <Icon icon="mdi:instagram" fontSize={24} />
                                        </Link>
                                        <Link href="#" color="text.secondary" sx={{ '&:hover': { color: '#1DA1F2' } }}>
                                            <Icon icon="mdi:twitter" fontSize={24} />
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/himanshu-raj-ba8069293" target="_blank" color="text.secondary" sx={{ '&:hover': { color: '#0A66C2' } }}>
                                            <Icon icon="mdi:linkedin" fontSize={24} />
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={5} pt={3} borderTop="1px solid" borderColor="divider">
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        {new Date().getFullYear()}
                        {' OmniTools.in. All rights reserved.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
