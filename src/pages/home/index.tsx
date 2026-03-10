import { Box, useTheme, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import Hero from 'components/Hero';
import Categories from './Categories';
import { Helmet } from 'react-helmet';
import { useUserTypeFilter } from 'providers/UserTypeFilterProvider';
import UserTypeFilter from '@components/UserTypeFilter';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const StatItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 4,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'translateY(-5px)' }
    }}
  >
    <Icon icon={icon} fontSize={40} style={{ color: '#818cf8', marginBottom: '16px' }} />
    <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>{value}</Typography>
    <Typography variant="body2" color="text.secondary" fontWeight={500}>{label}</Typography>
  </Paper>
);

const FeatureItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <Stack spacing={2} alignItems="center" textAlign="center">
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: '20px',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 8px 16px rgba(79, 70, 229, 0.2)'
      }}
    >
      <Icon icon={icon} fontSize={32} />
    </Box>
    <Typography variant="h6" fontWeight={700}>{title}</Typography>
    <Typography variant="body2" color="text.secondary">{description}</Typography>
  </Stack>
);

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { selectedUserTypes, setSelectedUserTypes } = useUserTypeFilter();

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? `radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
             radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
             radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)`
          : `radial-gradient(at 0% 0%, hsla(253,16%,95%,1) 0, transparent 50%), 
             radial-gradient(at 50% 0%, hsla(225,39%,90%,1) 0, transparent 50%), 
             radial-gradient(at 100% 0%, hsla(339,49%,90%,1) 0, transparent 50%)`,
        backgroundColor: 'background.default',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Helmet title={'OmniTools.in - Free Online Productivity Tools'} />
      
      {/* Hero Section */}
      <Box pt={{ xs: 4, md: 8 }} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Hero />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Statistics Section */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
          <Grid item xs={12} sm={4}>
            <StatItem icon="heroicons:bolt" label="Active Online Tools" value="111+" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatItem icon="heroicons:shield-check" label="User Data Privacy" value="100%" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatItem icon="heroicons:currency-dollar" label="Free Forever" value="$0" />
          </Grid>
        </Grid>

        {/* Filter Section */}
        <Box mb={8} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" fontWeight={800} gutterBottom textAlign="center" sx={{ mb: 4 }}>
            Find Your Tool
          </Typography>
          <UserTypeFilter
            selectedUserTypes={selectedUserTypes}
            onUserTypesChange={setSelectedUserTypes}
          />
        </Box>

        {/* Trending Now Section */}
        <Box sx={{ mb: 10 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={4} justifyContent="center">
            <Icon icon="heroicons:fire" fontSize={28} style={{ color: '#f87171' }} />
            <Typography variant="h4" fontWeight={800}>Trending Now</Typography>
          </Stack>
          <Grid container spacing={3}>
            {[
              { name: 'Image Resizer', path: 'image-generic/resize', icon: 'heroicons:photo' },
              { name: 'PDF to Image', path: 'pdf-to-image', icon: 'heroicons:document-duplicate' },
              { name: 'JSON Prettifier', path: 'json/prettify', icon: 'heroicons:code-bracket' },
              { name: 'PNG Compressor', path: 'png/compress-png', icon: 'heroicons:archive-box' }
            ].map((tool) => (
              <Grid item xs={12} sm={6} md={3} key={tool.path}>
                <Paper
                  onClick={() => navigate('/' + tool.path)}
                  sx={{
                    p: 3,
                    borderRadius: 5,
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'primary.main',
                      boxShadow: '0 12px 24px rgba(79, 70, 229, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ p: 2, borderRadius: 4, bgcolor: 'rgba(79, 70, 229, 0.1)', mb: 2 }}>
                    <Icon icon={tool.icon} fontSize={32} style={{ color: '#818cf8' }} />
                  </Box>
                  <Typography fontWeight={700}>{tool.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How it Works / Process Section */}
        <Box sx={{ mb: 12, textAlign: 'center' }}>
          <Typography variant="overline" color="primary" fontWeight={800} sx={{ letterSpacing: 2 }}>
            THE PROCESS
          </Typography>
          <Typography variant="h3" fontWeight={900} mb={6}>Simple. Fast. Private.</Typography>
          <Grid container spacing={4}>
            {[
              { step: '01', title: 'Choose Your Tool', desc: 'Select from 111+ productivity utilities.', icon: 'heroicons:cursor-arrow-rays' },
              { step: '02', title: 'Process Locally', desc: 'Your data stays in your browser. Maximum privacy.', icon: 'heroicons:cpu-chip' },
              { step: '03', title: 'Get Results', desc: 'Download or copy your output instantly.', icon: 'heroicons:check-badge' }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ position: 'relative', p: 4 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '6rem',
                      fontWeight: 900,
                      opacity: 0.05,
                      zIndex: 0
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Stack spacing={2} sx={{ position: 'relative', zIndex: 1 }} alignItems="center">
                    <Icon icon={item.icon} fontSize={48} style={{ color: '#818cf8' }} />
                    <Typography variant="h5" fontWeight={800}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.desc}</Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Categories Section */}
        <Box display="flex" justifyContent="center" mb={{ xs: 8, md: 10 }}>
          <Categories />
        </Box>

        {/* Privacy Shield Section */}
        <Box 
          sx={{ 
            mb: 12, 
            p: { xs: 4, md: 8 }, 
            borderRadius: 8,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(168, 85, 247, 0.02) 100%)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'rgba(79, 70, 229, 0.2)',
                filter: 'blur(40px)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <Icon 
              icon="heroicons:shield-check" 
              fontSize={100} 
              style={{ color: '#818cf8', position: 'relative', zIndex: 1 }} 
            />
          </Box>
          <Box sx={{ zIndex: 1 }}>
            <Typography variant="h3" fontWeight={900} mb={2} sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Your Privacy is Our Priority
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', maxWidth: '700px', mb: 4 }}>
              OmniTools.in is built to be the safest tool suite on the web. Most of our tools process your data <strong>entirely in your browser</strong>. This means your files, text, and data never even reach our servers.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon icon="heroicons:check-circle" style={{ color: '#10b981' }} />
                <Typography fontWeight={700}>100% Local Processing</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon icon="heroicons:check-circle" style={{ color: '#10b981' }} />
                <Typography fontWeight={700}>No Data Storage</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ mb: { xs: 10, md: 15 } }}>
          <Typography variant="h3" fontWeight={900} textAlign="center" gutterBottom sx={{ mb: { xs: 4, md: 8 }, fontSize: { xs: '2rem', md: '3rem' } }}>
            Why OmniTools.in?
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <FeatureItem
                icon="heroicons:sparkles"
                title="Super Fast"
                description="Our tools are highly optimized to give you results in seconds, not minutes."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem
                icon="heroicons:lock-closed"
                title="Server-Side Privacy"
                description="We prioritize your privacy. Most of our tools process data locally in your browser."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem
                icon="heroicons:device-phone-mobile"
                title="Mobile Friendly"
                description="Access all 111+ tools on any device, anywhere. Optimized for mobile and desktop."
              />
            </Grid>
          </Grid>
        </Box>

        {/* Rich Content / SEO Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 8 },
            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
            borderRadius: 8,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h4" fontWeight={900} gutterBottom color="primary.main">
            Discover the Power of OmniTools.in
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            OmniTools.in is your ultimate destination for free, high-quality online tools. With a library of over 111+ diverse tools ranging from <strong>Image Converters</strong> and <strong>PDF Editors</strong> to <strong>Text Manipulators</strong> and <strong>Unit Converters</strong>, we aim to simplify your digital workflow. 
          </Typography>
          <Typography variant="h5" fontWeight={700} sx={{ mt: 4, mb: 2 }}>
            Unmatched Privacy and Security
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Unlike other platforms, OmniTools.in is built with a privacy-first mindset. We understand that your data is sensitive. That's why many of our tools are designed to work entirely within your browser, meaning your files never leave your computer. For tools that require server processing, we ensure secure data handling and immediate deletion after the task is complete.
          </Typography>
          <Typography variant="h5" fontWeight={700} sx={{ mt: 4, mb: 2 }}>
            Completely Free, No Registration Required
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe that essential productivity tools should be accessible to everyone. Every tool on our platform is available for free, without the need for hidden subscriptions or complex sign-up processes. Just visit OmniTools.in and start working immediately.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
