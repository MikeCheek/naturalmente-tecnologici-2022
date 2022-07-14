import React from 'react';
import GuestCard from '../../atoms/guestCard/guestCard';
import { moderatorsInfo } from '../../utility/guestsInfo';

const Moderators = () => {
  return (
    <>
      {moderatorsInfo.map((moderator, key) => {
        return <GuestCard key={key} name={moderator.name} about={moderator.about} reversed={key % 2 == 0}></GuestCard>;
      })}
    </>
  );
};

export default Moderators;
