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

export default async function deleteData(id) {
  const options = {
    method: "DELETE",
  };

  // console.log(BASE_URL + "/" + id); // students/57
  try {
    const res = await fetch(BASE_URL + "/" + id, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
