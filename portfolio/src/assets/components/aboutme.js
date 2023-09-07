import '../css/app.css'
import myPicture from '../images/Picsart_23-07-04_19-52-40-412.png'

import * as React from 'react';

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function UserCard() {
  return (
    <Box
      sx={{
        paddingTop:'50px',
        margin:'auto',
        width: "100%",
        maxWidth: "700px",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" }
      }}
    >
      <Box
      />
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)"
          },
          // make the card resizable for demo
          overflow: "auto",
          resize: "horizontal"
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={myPicture}
            srcSet={myPicture}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            William Tikhonenko
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Full Stack Developer
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 }
            }}
          >
            <div>
              <Typography level="body-lg" fontWeight="lg">
                About Me
              </Typography>
              <Typography fontWeight="sm">
                I'm a versatile software developer located in Florida. With
                expertise in both frontend and backend development, specializing
                in the MERN (MongoDB, Express.js, React, Node.js) stack. My
                skill set includes JavaScript, Node.js, CSS, HTML, MySQL, and
                NoSQL databases.
              </Typography>
            </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}