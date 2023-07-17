import * as React from "react";

function IconRadioChecked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconRadioChecked;
