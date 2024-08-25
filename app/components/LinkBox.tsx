import { Box, Typography } from "@mui/material";
import { colors } from "../utils/colors";

export const LinkBox = ({
  href,
  text,
  light,
}: {
  href: string;
  text: string;
  light?: boolean;
}) => {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={
        light
          ? {
              backgroundColor: colors.secondary,
              borderRadius: "0.5rem",
              padding: "1.5rem 0",
              textAlign: "center",
              color: colors.text,
              textDecoration: "none",
              "&:hover": {
                boxShadow: "inset 0 0 1rem 0.25rem rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              },
            }
          : {
              backgroundColor: colors.primary,
              borderRadius: "0.5rem",
              padding: "1.5rem 0",
              width: "10.5rem",
              height: "10.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              "&:hover": {
                boxShadow: "inset 0 0 1rem 0.25rem rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              },
            }
      }
    >
      <Typography
        component="h2"
        fontSize={30}
        color={colors.text}
        align="center"
        sx={{
          textDecoration: "none",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
