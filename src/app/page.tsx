"use client"
import { ColorPalette } from "@/lib";
import getColorPalette from "@/utils/colors";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  const colors = getColorPalette("#0fffff", {
    colorType: "hex",
    shades: ["25", '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', "950", 'light', 'dark']
  })
  // useEffect(() => {
  //   //set local storage
  //   localStorage.setItem("trio-theme", JSON.stringify(colors));

  // }, [])

  console.log(colors)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-900 text-secondary-500">

      helo home


    </main>
  );
}
