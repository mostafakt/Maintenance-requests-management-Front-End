// Chakra imports
import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
// Assets
import { useContext } from "react";
import React from "react";
import { AuthContext } from "contexts/AuthContext";

function Dropzone(props: { content: JSX.Element | string; [x: string]: any }) {
  const {
    action: { addFile },
  } = useContext(AuthContext);

  const { content, ...rest } = props;
  // const { getRootProps, getInputProps } = useDropzone();
  let inputRef: React.RefObject<HTMLInputElement>;

  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  return (
    <Flex
      align="center"
      justify="center"
      bg={bg}
      border="1px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      h="max-content"
      minH="100%"
      cursor="pointer"
      // {...getRootProps({ className: "dropzone" })}
      {...rest}
    >
      <input
        type={"file"}
        ref={(inputRef = React.createRef())}
        onChange={(e) => {
          //@ts-ignore
          console.log(e.target.files[0] + "        ----        ");
          addFile(e.target.files[0]);
        }}
        // {...getInputProps()}
        style={{ display: "none" }}
      />
      <Button
        height={"auto"}
        variant="no-effects"
        onClick={() => {
          inputRef.current?.click();
        }}
        // disabled={true}
      >
        {content}
      </Button>
    </Flex>
  );
}

export default Dropzone;
