import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import HeaderImage from '../img/header_image.png'
import Link from 'next/link'

function Section({ children, variant = 'cream', sx }) {
  const isWhite = variant === 'white'

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: isWhite ? 'background.paper' : 'background.default',
        ...(isWhite && {
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }),
        ...sx,
      }}
    >
      <Container maxWidth="sm">
        <Stack alignItems="center" textAlign="center" spacing={1}>
          {children}
        </Stack>
      </Container>
    </Box>
  )
}

function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* HERO IMAGE */}
      <Box
        component="header"
        sx={{
          position: 'relative',
          minHeight: 420,
          overflow: 'hidden',
        }}
      >
        <Image
          src={HeaderImage}
          alt="Anniversary header"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* TITLE (cream) */}
      <Section variant="cream">
        <Typography variant="overline" sx={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.9 }}>
          You&apos;re invited to celebrate
        </Typography>
        <Typography sx={{ textAlign: 'center'}} variant="h1" component="h1">
          Eric &amp; Laura&apos;s
          <br />
          Anniversary
        </Typography>
      </Section>

      {/* DATE & LOCATION (white) */}
      <Section variant="white">
        <Typography variant="overline" color="primary" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'}}>
          Save the Date
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center'}}>Saturday</Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 300 }}>
          February 6, 2026
        </Typography>

        <Stack sx={{ display:'grid', py: 4}}>
          <Divider sx={{ width: 60, borderColor: 'primary.main', placeSelf:'center center' }} />
        </Stack>

        <Typography variant="overline" color="primary" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'}}>
          Where
        </Typography>
        <Typography variant="h3" sx={{ textAlign: 'center'}}>Wild Heaven</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', fontSize: '1.55rem'}}>
          Avondale Estates, GA
        </Typography>

        <Stack sx={{ display:'grid'}}>
          <Button
            variant="contained"
            size="large"
            href="https://docs.google.com/forms/d/1HSpjxl-48cyx-YeWgl7bX2xBrpwk3H3PAzNpIwmjyzM/viewform"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 5 }}
          >
            RSVP
          </Button>
        </Stack>
      </Section>

      {/* DRESS CODE (cream) */}
      <Section variant="cream">
        <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.2rem'}}>
          Dress Code
        </Typography>
        <Typography variant="h2" sx={{ fontStyle: 'italic', fontWeight: 300 }}>
          Comfortable
        </Typography>
        <Typography variant="body1" sx={{ pt: 2 }}>
          No dress code, so please wear whatever makes you feel comfortable.
          Sequins or flannel, it&rsquo;s all welcome!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '1.3rem' }}>
          The venue is indoor/outdoor.
        </Typography>
      </Section>

      {/* FOOTER (white) */}
      <Box
        component="footer"
        sx={{
          py: 5,
          textAlign: 'center',
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="overline" color="text.secondary">
          Eric &amp; Laura · 2026
        </Typography>
      </Box>
    </Box>
  )
}

export default Home