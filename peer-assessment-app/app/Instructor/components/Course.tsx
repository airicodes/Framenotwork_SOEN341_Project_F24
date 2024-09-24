
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Avatar } from '@mui/material';

export default function CourseCard({onClick}) {
  return (
    <Card sx={{ minWidth: 345 , minHeight: 150, bgcolor: "red" }}>
      <CardActionArea sx={{bgcolor: "white"}} onClick={onClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SOEN 341
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Info on the course.
          </Typography>
          <Typography>
            <Avatar sx={{ bgcolor:"" }}></Avatar>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
