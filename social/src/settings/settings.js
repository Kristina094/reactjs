export const urlLookup = "http://btax.mandakh.org:8000/lookup/";

export async function getUserAsync(url, body) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    return data;
  }