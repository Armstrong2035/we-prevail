import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Icon,
  Stack,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import FlipCameraAndroidRoundedIcon from "@mui/icons-material/FlipCameraAndroidRounded";
import { textStyles } from "@/app/styles";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";

export default function ExpressionCard({ expression }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Card sx={{ borderRadius: "15px", backgroundColor: "#F1FAEE" }}>
      <CardHeader
        title={
          <Stack
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <Typography sx={{ ...textStyles.secondaryBody, fontSize: "18px" }}>
              {expression.title}
            </Typography>
            <IconButton onClick={handleFlip}>
              <Icon sx={{ color: "black" }}>
                <FlipCameraAndroidRoundedIcon />
              </Icon>
            </IconButton>
          </Stack>
        }
      />
      {!flipped ? (
        <CardContent>
          <Box
            key={expression.acronym}
            sx={{
              display: "flex",
              // border: "1px solid blue",
              height: "300px", // Adjust height as necessary
              padding: "16px",
              // alignItems: "center",
              // justifyContent: "center",
              backgroundColor: "#324A5F",
              borderRadius: "15px",
            }}
          >
            <Image
              src={expression.flyer}
              alt={expression.title}
              layout={"responsive"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </CardContent>
      ) : (
        <CardContent>
          <Box
            key={expression.acronym}
            sx={{
              display: "flex",
              height: "300px", // Adjust height as necessary
              padding: "16px",
              backgroundColor: "#324A5F",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  ...textStyles.tertiaryBody,
                  color: "#E1E5EA",
                  fontSize: "14px",
                }}
              >
                {expression.description}
              </Typography>
            </Container>
          </Box>
        </CardContent>
      )}
    </Card>
  );
}
