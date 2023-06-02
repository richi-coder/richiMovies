"use client";

import { useState } from "react";
import Block from "./Block";
import Modal from "./Modal";
import Image from "next/image";

function BlockContainer({ revalidateList }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center py-10">
      <Block title={"Top movies"} description={revalidateList.topMovies} setShowModal={setShowModal} />
      <Block title={"Posters at homepage"} setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <a href="https://precedent.dev">
              <Image
                src=""
                alt="Precedent Logo"
                className="h-10 w-10 rounded-full"
                width={20}
                height={20}
              />
            </a>
            <h3 className="font-display text-2xl font-bold">Precedent</h3>
            <p className="text-sm text-gray-500">
              Precedent is an opinionated collection of components, hooks, and
              utilities for your Next.js project.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BlockContainer;
