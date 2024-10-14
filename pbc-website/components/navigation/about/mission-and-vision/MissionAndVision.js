"use client";
import { Container, Grid, Grid2, Stack } from "@mui/material";
import RccgMissionAndVision from "./RccgMissionAndVision";
import PbcMission from "./PbcMission";
import PbcVision from "./PbcVision";
import PbcCoreValues from "./PbcCoreValues";
import LgAppBar from "../../LgAppBar";

export default function MissionAndVision() {
  return (
    <div>
      {/* <LgAppBar /> */}
      <Container>
        <Grid2 container direction={"row"} spacing={2}>
          <Grid2 size={3}>
            <RccgMissionAndVision />
          </Grid2>

          <Grid2 size={3}>
            <PbcMission />
          </Grid2>

          <Grid2 size={3}>
            <PbcVision />
          </Grid2>

          <Grid2 size={3}>
            <PbcCoreValues />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}
