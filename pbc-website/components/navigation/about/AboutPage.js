"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid2,
  CardHeader,
} from "@mui/material";
import LgAppBar from "../LgAppBar";
import Link from "next/link";
import { buttonStyles, textStyles } from "@/app/styles";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function AboutPage() {
  const routes = [
    {
      title: "Mission and Vision",
      description: "Learn why we do the things we do the things we do",
      url: "mission-and-vision",
    },
    {
      title: "Statement of faith",
      description: "Learn the doctrine we teach, and believe in",
      url: "statement-of-faith",
    },
    {
      title: "Our stewards",
      description: "Meet the people whom God uses to keep PBC running",
      url: "our-stewards",
    },
  ];

  console.log(routes);

  return (
    <div style={{ backgroundColor: "#DFF5D0", height: "100vh" }}>
      <LgAppBar />
      <Container>
        <Grid2 container direction={"row"} spacing={3}>
          {routes.map((route, index) => (
            <Grid2 size={{ sm: 12, lg: 4 }}>
              <Link
                key={index}
                href={`/about/${route.url}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    height: "40vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: "#324A5F",
                  }}
                >
                  <CardContent>
                    <Typography sx={{ ...textStyles.cardHeading }}>
                      {route.title}
                    </Typography>
                    <Typography
                      sx={{
                        ...textStyles.tertiaryHeading,
                        color: "#E1E5EA",
                        mt: 3,
                      }}
                    >
                      {route.description}
                    </Typography>
                    <Button
                      sx={{ ...buttonStyles.textButton, mt: 3 }}
                      variant={"text"}
                      startIcon={<CallMadeIcon />}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
}
