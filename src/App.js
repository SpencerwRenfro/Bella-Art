import React, { useState } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Modal from "./components/Modal";
import HomeImprovements from "../src/components/HomeImprovements.js";
import LightFixtures from "./components/LightFixtures";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [iconImages, setIconImages] = useState("");

  // useState for each image icon
  const [lightFixtureModal, setLightFixtureModal] = useState(false);
  const [tvModal, setTvModal] = useState(false);

  const openModal = (e) => {
    console.log("modal open");
    if (e.target.id === "Kitchen") {
      setIconImages("Kitchen");
    }
    console.log(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("modal closed");
    setShowModal(false);
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div
          className="col-span-12
        lg:col-start-1 lg:col-end-5
         xl:col-start-2 xl:col-end-5
         my-10"

        >
          <Card />
        </div>

        <div
          className="col-span-12
        lg:col-start-5 lg:col-end-12
        xl:col-start-6 xl:col-end-12
        "
        >
          <div className="card-body shadow-xl my-10">
            <About
              tvModal={tvModal}
              setTvModal={setTvModal}
              openModal={openModal}
              setShowModal={setShowModal}
              setIconImages={setIconImages}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
