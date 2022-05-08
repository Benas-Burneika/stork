import { css } from "@emotion/css";

function Gandras() {
  const paragraph = css`
  margin: 0 10%;
  `;

  return (
    <div>
      <p className={paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec vulputate diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vestibulum nulla eget lorem consequat, a interdum sapien aliquam. Aliquam auctor ante mauris, vitae ornare justo ullamcorper nec. Sed porttitor condimentum nisi, ut interdum ligula dapibus non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam mauris leo, pretium nec bibendum nec, blandit a eros. Donec dapibus, sem auctor aliquam bibendum, metus turpis pellentesque elit, quis tristique diam enim sed justo. Aenean elit quam, accumsan ac placerat sit amet, luctus bibendum lorem. Donec posuere pretium elit. Pellentesque sodales tincidunt velit. Praesent vehicula tempus neque non gravida. Nunc sit amet egestas tortor. Maecenas eget nunc vitae augue pellentesque mollis. Phasellus blandit magna nibh, nec ullamcorper augue facilisis quis. Donec semper et ante ut placerat.</p>
    </div>
  );
}

export default Gandras;
