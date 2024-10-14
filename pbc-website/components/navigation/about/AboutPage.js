import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import MissionAndVision from "./mission-and-vision/MissionAndVision";
import StatementOfFaith from "./statement-of-faith/StatementOfFaith";
import OurPeople from "./our-people/OurPeople";
import LgAppBar from "../LgAppBar";

export default function AboutPage() {
  const aboutItems = [
    {
      title: "Our Mission, Vision, and values",
      component: <MissionAndVision />,
    },
    { title: "Statement of Faith", component: <StatementOfFaith /> },
    { title: "Our People", component: <OurPeople /> },
  ];
  return (
    <div>
      <LgAppBar />
      <Container>
        <Stack spacing={1}>
          {aboutItems.map((item) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownCircleRoundedIcon />}
                sx={{ height: "20vh" }}
              >
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.component}</AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </div>
  );
}
