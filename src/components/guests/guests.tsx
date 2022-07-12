import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import GuestCard from '../../atoms/guestCard/guestCard';
import guestsInfo from '../../utility/guestsInfo';
import * as styles from './guests.module.scss';

const Guests = () => {
  const carlo = guestsInfo[0];
  const paolo = guestsInfo[1];
  const poki = guestsInfo[2];
  return (
    <div className={styles.guests}>
      <GuestCard name={carlo.name} field={carlo.field} about={carlo.about} theme={carlo.theme}>
        <StaticImage
          className={styles.image}
          src="../../images/guests/carlo.jpg"
          alt={carlo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={paolo.name} field={paolo.field} about={paolo.about} theme={paolo.theme} reversed>
        <StaticImage
          className={styles.image}
          src="../../images/guests/paolo.jpg"
          alt={paolo.name}
          layout={'constrained'}
        />
      </GuestCard>
      <GuestCard name={poki.name} field={poki.field} about={poki.about} theme={poki.theme}>
        <StaticImage
          className={`${styles.image} ${styles.imageLeft}`}
          src="../../images/guests/poki.jpg"
          alt={poki.name}
          layout={'constrained'}
        />
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
