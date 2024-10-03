import Home from "@/app/page";
import { Container } from "@mui/material";
import React from "react";
import LgAppBar from "../LgAppBar";
import Announcement from "./Announcement";
import LatestSermon from "./LatestSermon";

export default function HomeBento() {
  return (
    <>
      <LgAppBar />
      <Container>
        <Announcement />
        <LatestSermon />
      </Container>
    </>
  );
}
