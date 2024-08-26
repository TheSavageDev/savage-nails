import { Box, Typography } from "@mui/material";
import { colors } from "./utils/colors";
import Image from "next/image";
import logo from "../public/8.jpeg";
import { LinkBox } from "./components/LinkBox";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: colors.background,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "justify-between",
        justifyContent: "center",
        maxWidth: "1024px",
        margin: "0 auto",
      }}
    >
      <Box
        component="header"
        sx={{
          backgroundColor: colors.background,
          padding: "1.5rem 0",
          position: "relative",
          width: "100%",
          height: "40rem",
        }}
      >
        <Image
          src={logo}
          alt="Savage Gals Logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          height: "100%",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: colors.background,
            display: "grid",
            gap: 5,
          }}
        >
          <LinkBox
            href="https://www.facebook.com/share/g/PPDTLB1UxA59tdEQ/"
            text="Join VIP"
            explainerText="Join our VIP group where we share daily-- tips, tutorials and info about Color Street products."
            light
          />
          <Box>
            <Typography component="p" fontSize={20} color={colors.text}>
              We offer busy ladies a variety of hand, nail and make-up products
              that are an easy, great addition to your beauty routine.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 7,
              width: "100%",
              margin: "0 auto",
            }}
          >
            <LinkBox
              href="https://www.colorstreet.com/jsavage"
              text="Shop Now"
              explainerText="Ready to browse products? Check out our website"
            />
            <LinkBox
              href="https://forms.gle/En877y38XLFrvJzDA"
              text="Free Sample & Surprise"
              explainerText="Fill this out and I will send you a sample and a surprise 🙂"
            />
            <LinkBox
              href="https://www.colorstreet.com/jsavage/enrollment/join"
              text="Join ColorStreet"
              explainerText="Join my team!"
            />
            <LinkBox
              href="https://www.colorstreet.com/jsavage/hostnow"
              text="Host"
              explainerText="Let's Have a Nail Party!"
            />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
