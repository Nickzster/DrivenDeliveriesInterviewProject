const baseURL = "http://localhost:5000";

export const sendData = async (id: string, message: string) => {
  try {
    let response = await fetch(`${baseURL}/messages/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id,
        message,
      }),
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};

export const getAllData = async () => {
  return await (
    await fetch(`${baseURL}/messages`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
  ).json();
};
