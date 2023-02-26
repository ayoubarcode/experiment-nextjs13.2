export async function GET(request: Request) {
  return new Response("HELLO EVERYBODY 👋🏼");
}

export async function POST(request: Request) {
  return new Response("body request", request.body);
}
