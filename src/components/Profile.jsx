import React from 'react'
import { Box, Card, CardContent, Typography, Button, Avatar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

const Profile = () => {

  const emailUsuario = "pizzeria@lanticaeredita.cl"

  const handleLogout = () => {
    alert("Has cerrado sesión correctamente. ¡Vuelve pronto a L'Antica Eredità!")
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh', 
        backgroundColor: '#f8f9fa' 
      }}
    >

      <Card sx={{ width: 350, p: 2, textAlign: 'center', borderRadius: 3 }}>
        
        <CardContent>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: '#ffc107', width: 60, height: 60 }}>
              <AccountCircleIcon sx={{ fontSize: 45 }} />
            </Avatar>
          </Box>

          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
            Perfil de Usuario
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Email: {emailUsuario}
          </Typography>

          <Button 
            variant="contained" 
            color="error" 
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >Cerrar Sesión
          </Button>

        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile