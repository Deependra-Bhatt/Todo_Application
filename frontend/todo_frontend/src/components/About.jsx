import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-3 border-2 border-gray-500 rounded-lg w-full max-w-xl mx-auto m-5 px-5 py-3 shadow-md shadow-gray-500">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-3xl text-slate-500 font-semibold underline">
          About
        </h1>
        <div className="flex flex-col gap-3 text-lg text-gray-600">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            non, quibusdam atque ad laborum autem perferendis repellendus dolore
            voluptas fuga, eius dolores corrupti? Dolorum, delectus dicta ad a
            itaque sint!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita
            odit tempora illo id sapiente maiores, itaque explicabo tempore
            minima fugiat, exercitationem earum minus labore asperiores
            dignissimos? Libero, aperiam debitis.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ducimus eligendi dolorum temporibus, nisi doloremque ad quos quae
            dolorem dicta voluptas cumque repellat, praesentium earum amet.
            Culpa, aliquid consectetur. Odio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
