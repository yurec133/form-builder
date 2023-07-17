import * as React from "react";

function IconSlider(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.3 7.5a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0zm.905.5a2.751 2.751 0 01-5.41 0H.5a.5.5 0 010-1h5.295a2.751 2.751 0 015.41 0H14.5a.5.5 0 010 1h-3.295z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconSlider;
