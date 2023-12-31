import * as React from "react";

function IconInput(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1a.5.5 0 000 1c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522-.199.278-.53.478-1.156.478a.5.5 0 000 1c.873 0 1.543-.3 1.97-.897l.03-.044.03.044c.427.597 1.097.897 1.97.897a.5.5 0 000-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 000-1c-.873 0-1.543.3-1.97.897l-.03.044-.03-.044C8.042 1.3 7.372 1 6.5 1zM14 5h-3V4h3a1 1 0 011 1v5a1 1 0 01-1 1h-3v-1h3V5zM6 4v1H1v5h5v1H1a1 1 0 01-1-1V5a1 1 0 011-1h5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconInput;
