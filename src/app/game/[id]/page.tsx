import { redirect } from "next/navigation";
import { GameProps } from "../../../utils/types/game";
import Image from "next/image";
import { Container } from "../../../components/container";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    );

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({
  params: { id }
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">

    </main>
  );
}
