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
    </>
  );
};

export default Navigation;
