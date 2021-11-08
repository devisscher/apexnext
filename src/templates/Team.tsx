import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import TeamMate from './TeamMate';

function Team() {
  return (
    <div>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            NOTRE ÉQUIPE
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            UN GROUPE DE CYCLISTES TALENTUEUX et PASSIONNÉS
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <TeamMate />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
