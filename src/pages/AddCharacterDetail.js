import { useState } from "react";
import imageCompression from "browser-image-compression";

const AddCharacterDetail = () => {
  const [img, setImg] = useState();

  const handleFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    //https://stackoverflow.com/questions/47956281/best-way-to-compress-an-image-javascript-react-web-app
    try {
      const compressedFile = await imageCompression(file, options);

      const { url } = await fetch("http://localhost:6699/s3Url").then((res) =>
        res.json()
      );
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/formData",
        },
        body: compressedFile,
      });

      const imageURL = url.split("?")[0];
      console.log(imageURL);
      setImg(imageURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Character name" />
        <input type="text" placeholder="Sauce" />
        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Unspecified</option>
        </select>
        <input type="file" />
        <input type="text" placeholder="Character name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCharacterDetail;
