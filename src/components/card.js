import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Dialog, DialogContent, DialogTitle, Button } from '@mui/material';

export default function MultiActionAreaCard({ image, title, description }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card sx={{ width: 350, height: 270, margin: 2, backgroundColor: 'white' }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="Image Alt Text"
          />
          <CardContent sx={{ color: 'white' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ color: 'black' }}>
              {title}
            </Typography>
            <Typography variant="body3" sx={{ color: '#11a372' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        
        <DialogContent>
          <CardMedia
            component="img"
            image={image}
            alt="Image Alt Text"
            width="100%"
            height="100%"
          />
          <Typography variant="body2" sx={{ color: '#11a372' }}>
            {description}
          </Typography>

        </DialogContent>
        <Button onClick={handleClose}  sx={{marginTop: -2, backgroundColor: 'white', color: 'black',}}>
            Close
          </Button>
      </Dialog>
    </div>
  );
}
