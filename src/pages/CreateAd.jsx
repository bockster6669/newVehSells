import React from "react";
import { Form } from "react-router-dom";

export default function CreateAd() {
  return (
    <Form method="POST" className="flex flex-col">
      <label>Name:</label>
      <input type="text" name="name" />
      <br></br>

      <label>price:</label>
      <input type="text" name="price" />
      <br></br>

      <label>Type:</label>
      <input type="text" name="type" />
      <br></br>

      <label>Year:</label>
      <input type="text" name="year" />
      <br></br>

      <label>date:</label>
      <input type="text" name="date" />
      <br></br>

      <label>views:</label>
      <input type="text" name="views" />
      <br></br>

      <label>text:</label>
      <input type="text" name="text" />
      <br></br>

      <label>sellerLocation:</label>
      <input type="text" name="sellerLocation" />
      <br></br>

      <label>extras:</label>
      <input type="text" name="extras" />
      <br></br>

      <button>Submit</button>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const newAd = Object.fromEntries(formData);


  fetch("http://localhost:4000/carList", {
    method: "POST",
    body: JSON.stringify({
      id: "4",
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
  return redirect("/newVehSells/ads/");
}
