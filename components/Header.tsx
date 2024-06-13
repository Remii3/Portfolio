import React from "react";
import GetInTouch from "./header/GetInTouch";
import Socials from "./header/Socials";
import { getSocials } from "../lib/data";

type Props = {};

export default async function Header({}: Props) {
  const socials = await getSocials();

  return (
    <header className="fixed w-full p-5 top-0 flex justify-between max-w-7xl left-1/2 -translate-x-1/2 z-20 items-center overflow-x-hidden">
      <Socials socials={socials} />
      <GetInTouch />
    </header>
  );
}
