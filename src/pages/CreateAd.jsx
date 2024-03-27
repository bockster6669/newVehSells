import React from "react";
import { Form, redirect } from "react-router-dom";
import { createNewAd } from "@/ad";
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
  createNewAd(newAd);
  return redirect("/ads/");
}
