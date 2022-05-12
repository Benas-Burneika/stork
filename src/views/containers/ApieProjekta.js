import { css } from '@emotion/css';
import { PropTypes } from 'prop-types';

// Helpers
import { modalParagraph } from '../../config';

function ApieProjekta({setCurrentView}) {

  const paragraphContainer = css`
    margin-top: 50px;
  `;

  return (
    <div className={paragraphContainer}>
       <p className={modalParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et dui a nisl placerat varius nec vitae mauris. Nam venenatis neque ac tortor interdum, non mollis odio posuere. Sed tellus justo, molestie quis neque nec, laoreet facilisis turpis. Quisque ultrices ex ut odio condimentum varius. Vestibulum pulvinar tempor turpis. Donec pharetra pellentesque vehicula. Fusce et tellus dapibus, congue odio sed, ornare urna. Morbi mattis nibh metus, et volutpat ligula volutpat in. Quisque gravida faucibus ligula ac tincidunt. Etiam ullamcorper odio non malesuada maximus. Donec quis accumsan massa.
      </p>
    </div>
  );
  }
  
ApieProjekta.protoTypes = {
    setCurrentView: PropTypes.func.isRequired,
}

  export default ApieProjekta;
  