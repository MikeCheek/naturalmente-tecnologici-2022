import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import GuestCard from '../../atoms/guestCard/guestCard';
import guestsInfo from '../../utility/guestsInfo';
import Millennium from '../../assets/millennium.mp4';
import * as styles from './guests.module.scss';

const Guests = () => {
  const carlo = guestsInfo[0];
  const paolo = guestsInfo[1];
  const poki = guestsInfo[2];
  const giacomo = guestsInfo[3];
  const marina = guestsInfo[4];
  const giancarlo = guestsInfo[5];
  const millennium = guestsInfo[6];

  const [muted, setMuted] = useState<boolean>(true);

  return (
    <div className={styles.guests}>
      <GuestCard name={carlo.name} field={carlo.field} about={carlo.about} theme={carlo.theme}>
        <StaticImage
          className={`${styles.image} ${styles.imageLeft}`}
          src="../../images/guests/carlo.jpg"
          alt={carlo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={paolo.name} field={paolo.field} about={paolo.about} theme={paolo.theme} reversed>
        <StaticImage
          className={`${styles.imageReverse} ${styles.imageLeft}`}
          src="../../images/guests/paolo.jpg"
          alt={paolo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={poki.name} field={poki.field} about={poki.about} theme={poki.theme}>
        <StaticImage
          className={`${styles.image} ${styles.imageRight}`}
          src="../../images/guests/poki.jpg"
          alt={poki.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={giacomo.name} field={giacomo.field} about={giacomo.about} theme={giacomo.theme} reversed>
        <StaticImage
          className={`${styles.imageReverse} ${styles.imageTop}`}
          src="../../images/guests/giacomo.jpg"
          alt={giacomo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={marina.name} field={marina.field} about={marina.about} theme={marina.theme}>
        <StaticImage
          className={styles.image}
          src="../../images/guests/marina.jpg"
          alt={marina.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={giancarlo.name} field={giancarlo.field} about={giancarlo.about} theme={giancarlo.theme} reversed>
        <StaticImage
          className={styles.image}
          src="../../images/guests/giancarlo.jpg"
          alt={giancarlo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={millennium.name} about={millennium.about}>
        <video
          className={styles.image}
          autoPlay
          muted={muted}
          loop
          onClick={() => {
            setMuted((current) => !current);
          }}
          width={200}
          height={200}
        >
          <source src={Millennium} type="video/mp4" />
        </video>
      </GuestCard>
    </div>
  );
};

export default Guests;

// export const query = graphql`
//   query {
//     carlo: file(relativePath: { eq: "guests/carlo.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     paolo: file(relativePath: { eq: "guests/paolo.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     poki: file(relativePath: { eq: "guests/poki.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
