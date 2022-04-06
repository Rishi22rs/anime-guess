import { useState } from "react";
import imageCompression from "browser-image-compression";
import * as apiCall from "../api/apiCall";

export const Contribute = () => {
  const [img, setImg] = useState();
  const [data, setData] = useState({});
  const [compressedFile, setCompressedFile] = useState();

  const handleFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    //https://stackoverflow.com/questions/47956281/best-way-to-compress-an-image-javascript-react-web-app
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    setCompressedFile(await imageCompression(file, options));
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
      setData({ ...data, image: imageURL });
      console.log(data);
      apiCall
        .postData({ ...data, image: imageURL }, "addCharacterDetail")
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contribute"
      className="home-contribute-container d-flex flex-column align-items-center justify-content-center parallax pb-5 w-100"
    >
      <div
        className="parallax d-flex flex-column align-items-center justify-content-center pb-5 pt-4 cont mt-5"
        style={{ maxWidth: 600 }}
      >
        <h3 className="text-green display-1 text-shadow">Contribute</h3>
        <form
          style={{ maxHeight: window.innerHeight - 300, overflow: "auto" }}
          className="d-flex justify-content-center align-items-center flex-column"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control"
            onChange={handleData}
            name="name"
            type="text"
            placeholder="Character name"
          />
          <input
            className="form-control mt-2"
            onChange={handleData}
            name="sauce"
            type="text"
            placeholder="Sauce"
          />
          <select
            className="form-control mt-2"
            onChange={handleData}
            name="gender"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="U">Unspecified</option>
          </select>
          <input
            className="form-control mt-2"
            onChange={handleFile}
            name="image"
            type="file"
          />
          <span type="submit" className="custom-btn mt-3 p-2 mt-5 px-5">
            Submit
          </span>
        </form>
      </div>
    </div>
  );
};
