import React from "react";
import { Form, useLoaderData, useLocation } from "react-router-dom";
function CreateAd() {
  const data = useLoaderData();
  const location = useLocation();
  const url = location.pathname;
  const isCreateWithIdAfterAds = url.match(/Ads\/create\/(?=\d+)/);
  return (
    <Form
      method={isCreateWithIdAfterAds ? "PUT" : "POST"}
      action="/newVehSells/ads"
      className="flex flex-col"
    >
      <label>Name:</label>
      <input type="text" name="name" defaultValue={data.name} />
      <br></br>

      <label>price:</label>
      <input type="text" name="price" defaultValue={data.price} />
      <br></br>

      <label>Type:</label>
      <input type="text" name="type" defaultValue={data.info.type} />
      <br></br>

      <label>Year:</label>
      <input type="text" name="year" defaultValue={data.info.year} />
      <br></br>

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

export async function loader({ params }) {
  let data;
  try {
    data = await fetch(`http://localhost:4000/myads/4`).then((r) => r.json());
  } catch {
    throw new Error('Failed to load ad data'); 
  }
  return data;
}

export default CreateAd;
