import React, { useState, useRef } from "react";
import HomeImprovements from "./HomeImprovements.js";
import Modal from "./Modal.js";
import classes from "./Modal.module.css";
function About(props) {
  let kitchen = `${process.env.PUBLIC_URL}/images/kitchens.jpg`;
  let tv = `${process.env.PUBLIC_URL}/images/tvMount.jpg`;
  let lights = `${process.env.PUBLIC_URL}/images/lightFixtures.jpg`;
  let homeImprovement = `${process.env.PUBLIC_URL}/images/homeImprovement.jpg`;
  let murals = `${process.env.PUBLIC_URL}/images/Murals/tree.JPG`;
  let portraitTree = `${process.env.PUBLIC_URL}/images/Murals/portraitTree.JPG`;

  const tvCard = (
    <div className="py-10 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="pt-2" src={tv} alt="Shoes" />
      </figure>
    </div>
  );

  const lightCard = (
    <div className="py-10 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="pt-2" src={murals} alt="Shoes" />
        {/* <img className="pt-2" src={portraitTree} alt="Shoes" /> */}
      </figure>
    </div>
  );

  const ImageBackdrop = (props) => {
    return (
      <div className="py-10 card w-96 bg-base-100 shadow-xl">
        <figure>{props.children}</figure>
      </div>
    );
  };

  const homeCard = (
    <div className="py-10 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="pt-2" src={homeImprovement} alt="Shoes" />
      </figure>
    </div>
  );

  const kitchenCard = (
    <div className="py-10 card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="pt-2" src={kitchen} alt="Shoes" />
      </figure>
    </div>
  );

  const kitchenButton = (
    <button
      id="Kitchens"
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      <div>
        <img
          className="border-slate-900 border-2 md:w-4/5 lg:w-11/12"
          alt="kitchen"
          // src={kitchen}
          src={`${process.env.PUBLIC_URL}/images/Murals/cloudLight.JPG`}
        />
        <h2 className="text-left">Murals</h2>
      </div>
    </button>
  );

  const lightButton = (
    <button
      id="Light Fixtures"
      onClick={() => document.getElementById("my_modal_2").showModal()}
    >
      <div>
        <img
          className="border-slate-900 border-2 w-4/5"
          alt="kitchen"
          // src={lights}
          src={`${process.env.PUBLIC_URL}/images/Murals/treeButton.JPG`}
        />
        <h2 className="text-left">Paintings</h2>
      </div>
    </button>
  );

  const tvButton = (
    <button
      id="TV Mounts"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      <div>
        <img
          className="w-4/5"
          alt="kitchen"
          src={`${process.env.PUBLIC_URL}/images/Murals/octupusButton.JPG`}
        />
        <h2 className="text-left">Sketches</h2>
      </div>
    </button>
  );

  const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    );
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">About Bella</h1>
      <div className="py-10">
        <p className="py-5">
          Welcome to Bella's Art Haven, a captivating journey into the
          visionary world of a young and talented artist. At just 17 years old,
          Isabella's artistic journey began at the tender age of 12, where she
          discovered a profound appreciation for the beauty of others'
          creations. Drawing inspiration from the grandeur of religious artworks
          like the Last Judgment, the timeless elegance of Greek sculptures, and
          the mysterious allure of Egyptian hieroglyphics, Isabella's creations
          embody a unique blend of tradition and innovation.
        </p>
        <p className="py-5">
          Her muse, William Blake, renowned for the awe-inspiring Great Red
          Dragon paintings, serves as a guiding light for Isabella's artistic
          aspirations. With a strategic approach, she aims to establish her name
          and presence in the art world. Isabella meticulously curates her
          collection, offering a select few pieces for sale, creating an aura of
          exclusivity and driving up their intrinsic value. Her vision extends
          beyond her lifetime, contemplating a legacy where her family can
          unveil locked-away masterpieces, contributing to a cause that
          transcends her mortal existence.
        </p>
        <p className="py-5">
          Join us in exploring the evocative and thought-provoking works of
          Isabella, a rising star whose art transcends boundaries and echoes
          through time.
        </p>
      </div>
      <div className="flex gap-14 justify-center">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 lg:col-span-4 py-5 px-5">
            {kitchenButton}
          </div>
          <div className="col-span-6 lg:col-span-4 py-5 px-5">
            {lightButton}
          </div>
          <div className="col-span-6 lg:col-span-4 py-5 px-5">{tvButton}</div>
          {/* <div className="col-span-6 lg:col-span-3 py-5 px-5">{homeButton}</div> */}
        </div>

        <dialog id="my_modal_1" className="modal ">
          <ModalOverlay>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end">
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className=" grid grid-cols-12  pt-10 gap-9 justify-items-center">
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Murals/cloudLight.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Murals/cloudDark.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch5.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
            </div>
          </ModalOverlay>
        </dialog>

        <dialog id="my_modal_2" className="modal">
          <ModalOverlay>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end">
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="">
              <div className=" grid grid-cols-12  pt-10 gap-9 justify-items-center">
                <div className="col-span-11 md:col-span-6  lg:col-span-4">
                  {
                    <ImageBackdrop>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/Murals/tree.JPG`}
                      />
                    </ImageBackdrop>
                  }
                </div>
                <div className="col-span-11 md:col-span-6  lg:col-span-4">
                  {
                    <ImageBackdrop>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/Murals/portraitTree.JPG`}
                      />
                    </ImageBackdrop>
                  }
                </div>

                <div className="col-span-11 md:col-span-6  lg:col-span-4">
                  {
                    <ImageBackdrop>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/Murals/horses.JPG`}
                      />
                    </ImageBackdrop>
                  }
                </div>
              </div>
            </div>
          </ModalOverlay>
        </dialog>
        <dialog id="my_modal_3" className="modal">
          <ModalOverlay>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end">
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className=" grid grid-cols-12  pt-10 gap-9 justify-items-center">
            <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/octupus.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch1.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch2.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch3.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch4.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>

              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch6.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch7.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch8.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch9.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch10.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch11.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
              <div className="col-span-11 md:col-span-6  lg:col-span-4">
                {
                  <ImageBackdrop>
                    <img
                    className="w-11/12"
                      src={`${process.env.PUBLIC_URL}/images/Murals/sketch12.JPG`}
                    />
                  </ImageBackdrop>
                }
              </div>
            </div>
          </ModalOverlay>
        </dialog>
        <dialog id="my_modal_4" className="modal ">
          <ModalOverlay>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end">
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className=" grid grid-cols-12  pt-10 gap-9 justify-items-center">
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
              <div className="col-span-12 md:col-span-6  lg:col-span-4">
                {homeCard}
              </div>
            </div>
          </ModalOverlay>
        </dialog>
      </div>
    </div>
  );
}

export default About;
