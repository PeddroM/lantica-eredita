import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

const NotFound = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh', 
        textAlign: 'center',
      }}
    >

      <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#dc3545' }}>
        404
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Página No Encontrada
      </Typography>

      <Typography variant="body1" color="text.secondary">
        La ruta a la que intentas acceder no existe.
      </Typography>

      <Button 
        component={Link}
        to="/"
        variant="contained" 
        color="warning"
        sx={{ mt: 2, textTransform: 'none', fontWeight: 'bold' }}
      >
        Volver al Inicio 🍕
      </Button>
    </Box>
  )
}

export default NotFound