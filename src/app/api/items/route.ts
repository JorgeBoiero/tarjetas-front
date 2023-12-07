export async function GET() {
    const res = await fetch('http://localhost:3000/api')
    const data = await res.json()
    console.log("🚀 ~ file: route.ts:9 ~ GET ~ data:", data)
   
    return Response.json({ data })
  }