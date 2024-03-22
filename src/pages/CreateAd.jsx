import React from "react";
import { Form } from "react-router-dom";
function CreateAd() {
  return (
    <Form method="post" action="/newVehSells/ads" className="flex flex-col">
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

/**
 "name": "",
      "price": 2000000,
      "info": {
        "Type": "Tugboat",
        "Year": "2013"
      },
      "imgLinks": [
        "airtug.png"
      ],
      "date": "21.03.2024",
      "views": 400,
      "text": "Много добро техническо състояние Лизинг с 30% първоначална вноска !!! без доказване на доходи лоши цкр без проблем  Възможност за !!! бартер Възможност за лизинг",
      "sellerLocation": "Козлодуй",
      "extras": "Ко
*/

export default CreateAd;
