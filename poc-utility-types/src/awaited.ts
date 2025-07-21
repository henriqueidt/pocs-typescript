// Awaited is used to store the type of a promise resolved value.

type JsonResponse = {
  json: () => Promise<{ message: string }>;
};

type AwaitedType = Awaited<Promise<JsonResponse>>;

const readData = async () => {
  const response: AwaitedType = await fetch("https://api.example.com/data");
  return response.json();
};
