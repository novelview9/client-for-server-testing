import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import axios from "axios";

export default function Home() {
  const input = useRef(null);
  const apiURL = "http://localhost:3000/api/posts/files";
  const upload = (e) => {
    const file = input.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(apiURL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };
  return (
    <div>
      <input type="file" name="file" onChange={null} ref={input} />
      <button type="button" onClick={upload}>
        업로드!
      </button>
    </div>
  );
}
