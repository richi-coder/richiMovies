"use client";

import { useState } from "react";
import Block from "./Block";
import Modal from "./Modal";
import Image from "next/image";
import { revalidatePage } from "../services/Revalidation";

function BlockContainer({ revalidateList }) {
  const [showModal, setShowModal] = useState(false);
  const [pathToRevalidate, setPathToRevalidate] = useState('');
  const [buttonState, setButtonState] = useState({
    content: null,
    disabled: false
  })

  const revalidateThisPath = (path) => {
    setPathToRevalidate(path)
  }

  const goRevalidating = async() => {
    if (buttonState.content === null) {
      setButtonState({
        disabled: true,
        content: false
      })
      const decision = pathToRevalidate === 'home' ? '' : pathToRevalidate
      const res = await revalidatePage(decision);
      setButtonState({
        ...buttonState,
        content: true
      })
      window.location.replace(decision === '' ? '/' : `/${decision}`)
    }
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center py-10">
      <Block
        title={"Top movies Carousel"}
        pathToRevalidate='productions'
        setShowModal={setShowModal}
        revalidateThisPath={revalidateThisPath}
        description='Use this for updating the movies carousel shown at the top of /productions page. By doing so, the carousel updates to show 5 different movies based of movies categories shown down in the page'
      />
      <Block 
        title={"Posters at homepage"}
        pathToRevalidate='home'
        setShowModal={setShowModal}
        revalidateThisPath={revalidateThisPath}
      />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:shadow-xl bg-pink-600 border-black hover:border-[rgb(236,72,153)]">
          <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center md:px-16">
            <div className="font-display text-2xl font-bold">About to revalidate . . . </div>
            <p className="text-md text-white">
              After clicking <strong>REVALIDATE NOW</strong> you'll be redirected to the page you want updated
              <br />
              <br />
              You wanna revalidate /{pathToRevalidate} page ?
            </p>
            <button
              onClick={goRevalidating}
              disabled={buttonState.disabled}
              className="bg-black hover:bg-[rgb(30,30,30)] sm:hover:translate-y-2 px-6 py-4 text-white font-bold text-lg sm:text-xl transition-all"
            >
              {buttonState.content === null ?
                  'REVALIDATE NOW' :
                  buttonState === false ?
                  'Loading...' : 
                  'DONE'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BlockContainer;
