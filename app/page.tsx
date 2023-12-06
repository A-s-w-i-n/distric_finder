"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  const [district, setDistrict] = useState<any>();
  console.log(lat, long);

  const handleSubmit = async () => {
    const data = await axios.post(
      `http://localhost:4000/latAndLong/?lat=${lat}&long=${long}`
    );
    console.log(data.data);
    setDistrict(data.data);
  };
  return (
    <>
      <div className="flex gap-5">
        <div>
          <div>LAT</div>
          <input
            type="text"
            placeholder="lattitiude"
            className="rounded-md text-black w-60 h-10"
            onChange={(e: any) => setLat(e.target.value)}
          />
        </div>
        <div>
          <div>LONG</div>
          <input
            type="text"
            placeholder="longitude "
            className="rounded-md w-60 text-black h-10"
            onChange={(e: any) => setLong(e.target.value)}
          />
        </div>
        <button
          className="bg-red-400 rounded-md h-10   mt-6"
          onClick={handleSubmit}
        >
          Click to get the place
        </button>
      </div>

      <div className="flex mt-10 gap-20 justify-center">
        <p>District Name : </p>
        <div className="text-2xl text-white">{district}</div>
      </div>
    </>
  );
}
