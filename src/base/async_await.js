export const getLongitud = async () => {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=-74.2503&lon=4.3085&exclude={part}&appid=9ae67a9ffe88cb10092c754a81d5e192`
    );
    const data = await resp.json();

    const lon = data.lon;
    return lon;
  } catch (error) {
    console.error(error);
    return error;
  }
};
