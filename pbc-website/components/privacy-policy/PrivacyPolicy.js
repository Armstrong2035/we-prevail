import {
  Paper,
  Typography,
  Chip,
  Stack,
  Grid2,
  Container,
} from "@mui/material";

import { textStyles } from "@/app/styles";

export default function PrivacyPolicy() {
  const privacyPolicy = [
    {
      section: "Introduction",
      content:
        "The Prevailing and Borderless Church’s (PBC) mission and vision are fully aligned with the umbrella mission and vision of The Redeemed Christian Church of God Worldwide. PBC and its associated activities, including the NSN Alter and Hangout with Jesus, are dedicated to respecting and protecting your privacy and personal data. This Privacy Policy outlines our commitment to handling your data in accordance with the various applicable data protection laws as we are a Global church.",
    },
    {
      section: "Data Collection",
      content:
        "We collect and process personal data for legitimate and specific purposes related to our church and associated activities, including:",
      list: [
        "Contact information (names, email addresses, phone numbers)",
        "Identification data (e.g., membership ID)",
        "Event registration and attendance information",
        "Financial information for donations or financial records",
        "Pictures",
      ],
    },
    {
      section: "Purpose Limitation",
      content:
        "We collect and process personal data for the following purposes, which extend to our church as a whole and its associated activities:",
      list: [
        "Membership management and communication",
        "Event organization and communication",
        "Pastoral care and support",
        "Financial records and donations",
        "Legal obligations",
      ],
    },
    {
      section: "Data Minimization",
      content:
        "We limit the collection of personal data to what is necessary for the intended purposes and retain it only for as long as required.",
    },
    {
      section: "Accuracy",
      content:
        "We strive to maintain accurate and up-to-date personal data and encourage individuals to inform us of any changes or inaccuracies in their information.",
    },
    {
      section: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect personal data from unauthorized access, disclosure, alteration, or destruction.",
    },
    {
      section: "Data Subject Rights",
      content: "As data subjects, you have certain rights under the GDPR:",
      list: [
        "Right of access",
        "Right to rectification",
        "Right to erasure ('right to be forgotten')",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object",
        "Right not to be subject to automated decision-making",
      ],
    },
    {
      section: "Lawful Basis for Processing",
      content:
        "We process personal data based on lawful bases such as consent, contract performance, legal obligations, vital interests, and legitimate interests of PBC and its activities.",
    },
    {
      section: "International Data Transfers",
      content:
        "We may transfer personal data internationally in compliance with GDPR requirements, using mechanisms such as Standard Contractual Clauses or other appropriate safeguards.",
    },
    {
      section: "Accountability",
      content:
        "PBC and its associated activities are responsible for adhering to data protection laws, conducting data protection impact assessments, and maintaining records of processing activities.",
    },
    {
      section: "Contact Information",
      content:
        "If you have questions or concerns about this Privacy Policy or our data processing practices, please contact us at: info@weprevail.org",
    },
    {
      section: "Changes to this Privacy Policy",
      content:
        "We may update this Privacy Policy to reflect changes in our practices or legal requirements. Please check this policy periodically for updates. This updated policy clarifies that it covers PBC as a whole and includes specific activities such as the NSN Alter and Hangout with Jesus.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          sx={{ ...textStyles.cardHeading, color: "black" }}
          align="left"
          gutterBottom
        >
          Privacy Policy
        </Typography>
        {privacyPolicy.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 2,
              bgcolor: "#324A5F",
            }}
          >
            <Typography
              sx={{ ...textStyles.secondaryBody, color: "#FFFFFF" }}
              gutterBottom
            >
              {item.section}
            </Typography>
            <Typography
              sx={{ ...textStyles.tertiaryHeading, mb: 2, color: "#E1E5EA" }}
            >
              {item.content}
            </Typography>
            {item.list && (
              <ul style={{ color: "#E1E5EA" }}>
                {item.list.map((item, idx) => (
                  <li key={idx}>
                    <Typography
                      sx={{
                        ...textStyles.tertiaryHeading,
                        mb: 2,
                        color: "#E1E5EA",
                      }}
                    >{`${item}`}</Typography>
                  </li>
                ))}
              </ul>
            )}
          </Paper>
        ))}
      </Container>
    </div>
  );
}
