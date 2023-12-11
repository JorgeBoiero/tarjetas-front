import CardContainer from './ui/cardContainer'


async function getData() {
  const res = await fetch('http://localhost:3000/api',{
    method:'GET'
  });
  console.log("🚀 ~ file: page.tsx:6 ~ getData ~ res:", res)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

getData()
export default async function Home() {

  /* const {data} = await getData() */

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardContainer/>
    </main>
  )
}
