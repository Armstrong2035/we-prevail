import { Paper, Typography, Chip, Stack, Grid2 } from "@mui/material";

export default function StatementOfFaith() {
  const statementOfFaith = [
    {
      title: "God",
      description:
        "We believe in one God existing in three Persons: The Father, Son and Holy Spirit – co-existent, eternal, co-equal in all their attributes, being perfect in holiness, love, righteousness, goodness, wisdom, power, justice and mercy.",
      scriptures: [
        "Deuteronomy 6:4",
        "Matthew 28:19",
        "2 Corinthians 13:14",
        "1 Peter 1:2",
        "1 Peter 1:16",
        "1 John 4:8,16",
        "1 John 5:7",
        "Psalm 145:7,17",
        "Ephesians 3:10",
        "Matthew 19:26",
        "Isaiah 30:18",
        "Luke 6:36",
      ],
    },
  ];

  return (
    <>
      {statementOfFaith.map((item) => (
        <Paper
          elevation={2}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography>{item.title}</Typography>
          <Typography>{item.description}</Typography>
          <Grid2 container spacing={1} direction={"row"}>
            {item.scriptures.map((scripture) => (
              <Grid2 item size={2}>
                <Chip label={scripture} />
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      ))}
    </>
  );
}
