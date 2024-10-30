"use client";
import { textStyles } from "@/app/styles";
import { Container, Typography, Box, Divider, Card } from "@mui/material";
import TheForm from "./TheForm";

export default function NewConverts() {
  return (
    <Container>
      <article>
        {/* Introduction Section */}
        <Card sx={{ p: 5, backgroundColor: "#324A5F" }}>
          <Box mb={2}>
            <Typography
              variant="h6"
              sx={{ ...textStyles.secondaryBody, color: "white" }}
            >
              If you want to make the decision to accept Jesus Christ today,
              please say this short prayer:
            </Typography>
          </Box>

          {/* Prayer Section */}
          <Box mb={2} pl={2} borderLeft={4} borderColor={"#F5E8D0"}>
            <Typography
              variant="body1"
              component="blockquote"
              sx={{
                ...textStyles.tertiaryHeading,
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "white",
              }}
            >
              Lord Jesus, I confess my sins and ask for Your forgiveness. I turn
              from my sins and invite You to please come into my heart as my
              Lord and Savior. Take complete control of my life and help me to
              walk in Your footsteps daily by the power of the Holy Spirit.
              Thank You Lord for saving me and for answering my prayer in Jesus’
              Name.
            </Typography>
          </Box>

          {/* Congratulations Section */}
          <Divider sx={{ my: 2 }} />
          <Box mb={2}>
            <Typography
              variant="h3"
              sx={{ ...textStyles.tertiaryHeading, color: "#F5E8D0" }}
            >
              Congratulations!
            </Typography>
            <Typography
              variant="body1"
              sx={{ ...textStyles.tertiaryHeading, color: "white" }}
            >
              You are saved, and just like that: you belong to the family of
              God. Welcome home! We are overjoyed about your decision to accept
              Jesus Christ into your life!
            </Typography>
          </Box>

          {/* Call-to-Action Section */}
          <Box mt={3}>
            <Typography
              variant="body1"
              sx={{ ...textStyles.tertiaryHeading, color: "white" }}
            >
              Kindly fill out this brief form (it should take less than a
              minute) so that PBC can be delighted to support you in your
              Christian journey.
            </Typography>
          </Box>
        </Card>
      </article>

      <TheForm />
    </Container>
  );
}
