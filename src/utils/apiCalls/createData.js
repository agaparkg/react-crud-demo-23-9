import { BASE_URL } from "../urls";

// export const fetchData = async () => {

//   try {
//     const res = await fetch(BASE_URL);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function createData(newStudent) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  };

  // console.log(BASE_URL + "/" + id); // students/57
  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
