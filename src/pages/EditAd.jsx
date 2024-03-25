import React from "react";
import { Form, redirect, useLoaderData, useParams } from "react-router-dom";

export default function EditAd() {
  const data = useLoaderData();
  return (
    <Form method="POST" className="flex flex-col">
      <label>Name:</label>
      <input type="text" name="name" defaultValue={data.name} />
      <br></br>

      <label>price:</label>
      <input type="text" name="price" defaultValue={data.price} />
      <br></br>

      {Object.keys(data.info).map((key, index) => (
        <React.Fragment key={key}>
          <label>{key}:</label>
          <input type="text" name={key} defaultValue={data.info.key} />
          <br></br>
        </React.Fragment>
      ))}

      <label>date:</label>
      <input type="text" name="date" defaultValue={data.date} />
      <br></br>

      <label>views:</label>
      <input type="text" name="views" defaultValue={data.views} />
      <br></br>

      <label>text:</label>
      <input type="text" name="text" defaultValue={data.text} />
      <br></br>

      <label>sellerLocation:</label>
      <input
        type="text"
        name="sellerLocation"
        defaultValue={data.sellerLocation}
      />
      <br></br>

      <label>extras:</label>
      <input type="text" name="extras" defaultValue={data.extras} />
      <br></br>

      <button>Submit</button>
    </Form>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const newAd = Object.fromEntries(formData);
  const id = params.adId;

  console.log("id =", id);
  fetch(`http://localhost:4000/myads/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: newAd.name,
      price: newAd.price,
      info: { Type: newAd.type, Year: newAd.year },
      imgLinks: [{ id: "1", img: "airtug.png" }],
      date: newAd.date,
      views: newAd.views,
      text: newAd.text,
      sellerLocation: newAd.sellerLocation,
      extras: newAd.extras,
    }),
  });

  return redirect("http://localhost:5173/newVehSells/ads");
}

export async function loader({ params }) {
  let data;
  try {
    data = await fetch(`http://localhost:4000/myads/${params.adId}`).then(
      (response) => response.json()
    );
  } catch (err) {
    throw new Error(err);
  }
  return data;
}
