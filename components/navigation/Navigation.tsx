import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navigation: React.FC = () => {
  const [matchesQuery, setMatchesQuery] = useState<boolean>(
    null as unknown as boolean
  );
  const matches = useMediaQuery("(min-width: 768px)");
  //Avoids hydration error
  useEffect(() => {
    setMatchesQuery(matches);
  }, [matches]);

  return (
    <>
      {matchesQuery === true && <NavDesktop />}
      {matchesQuery === false && <NavMobile />}
      <button
        className="hidden md:flex z-50 mobile-nav-toggle  absolute top-2 right-4"
        aria-controls="primary-navigation"
        aria-expanded="false"
        aria-label="button"
      ></button>
    </>
  );
};

export default Navigation;
