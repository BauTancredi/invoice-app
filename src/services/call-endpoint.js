export default async function callEndpoint(method, endpoint, body) {
  const baseUrl = "http://localhost:8000/api";

  try {
    const response = await fetch(baseUrl + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return response.status;
    }

    return await response.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
