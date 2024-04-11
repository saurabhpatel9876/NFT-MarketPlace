
import CardNft from "@/components/CardNft";
import CreateNft from "@/components/CreateNft";
import Hero from "@/components/Hero";

import Image from "next/image";

export default function Home() {
  return (
   <>
  <Hero/>
  <CreateNft/>
  <CardNft/>
   </>
  );
}
