import { Image } from "@chakra-ui/react";
import React, { useState } from "react";

const ExpandedImage = ({ link }: { link: string }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Image
      onClick={() => setExpanded(!expanded)}
      borderRadius={"20px"}
      boxSize={expanded ? "300px" : "100px"}
      cursor={"pointer"}
      objectFit="cover"
      src={process.env.REACT_APP_BACK_END_IMG_LINK + link}
    />
  );
};

export default ExpandedImage;
