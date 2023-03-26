// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

const Upload = (props: { used?: number; total?: number; [x: string]: any }) => {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card
      {...rest}
      mb="20px"
      justifyItems={"center"}
      justifyContent={"center"}
      alignItems="center"
      p="20px"
    >
      <Flex
        h="100%"
        direction={{ base: "column", "2xl": "row" }}
        w={{ base: "70%", md: "100%" }}
      >
        <Dropzone
          me="36px"
          maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          minH={{ base: "190px", lg: "190px", "2xl": "100%" }}
          content={
            <Box p={{ base: "25px" }} whiteSpace={"pre-wrap"}>
              <Icon
                as={MdUpload}
                w={{ md: "80px", base: "50px" }}
                h={{ md: "80px", base: "50px" }}
                color={brandColor}
              />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Upload Files
                </Text>
              </Flex>
              <Text
                flexWrap={"wrap"}
                fontSize="sm"
                fontWeight="500"
                color="secondaryGray.500"
              >
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
        />
        <Flex direction="column" pe="44px">
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            textAlign="start"
            fontSize="2xl"
            mt={{ base: "20px", "2xl": "50px" }}
          >
            Complete your profile
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="md"
            my={{ base: "auto", "2xl": "10px" }}
            mx="auto"
            textAlign="start"
          >
            or Drag and Drop an image here Supported file formats: JPG, PNG or
            GIF We recommend images should have a resolution of 72dpi and be at
            least 800x1128 pixels in dimensions. Images are cropped to these
            values.
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
export { Upload };
