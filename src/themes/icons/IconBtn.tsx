import * as React from "react";

function IconBtn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5h11a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1zM0 6a2 2 0 012-2h11a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm4.5.75a.75.75 0 100 1.5.75.75 0 000-1.5zm2.25.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm3.75-.75a.75.75 0 100 1.5.75.75 0 000-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconBtn;
