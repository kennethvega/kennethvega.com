import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Container from "../components/utility/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}
