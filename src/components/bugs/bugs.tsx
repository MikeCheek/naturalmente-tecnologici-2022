import React, { useState } from 'react';
import Bug from '../../atoms/bug/bug';

const Bugs = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <>
      <Bug time={6500} top={-100} click={handleClick} />
      <Bug time={5050} left={250} top={-100} click={handleClick} />
      <Bug time={4500} left={50} top={-100} click={handleClick} />
      <Bug time={7050} click={handleClick} />
    </>
  );
};

export default Bugs;
