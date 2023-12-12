import CardContainer from "../ui/cardContainer";
import { Suspense } from "react";
import { CardsSkeleton } from "../ui/skeletons";
import { getCards } from "../lib/data";

export default async function Home() {
  
  const data = await getCards();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<CardsSkeleton/>}>
        <CardContainer cards={data}/>
      </Suspense>
    </main>
  );
}
