import { getMyAdById, updateAd } from "@/ad";
import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";

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
  newAd.id = params.adId;
  updateAd(newAd);
  return redirect("http://localhost:5173/newVehSells/ads");
}

export async function loader({ params }) {
  let data = await getMyAdById(params.adId);
  return data;
}
