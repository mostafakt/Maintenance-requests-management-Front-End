import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { Upload } from "./components/Upload";
import { useState, useContext, useEffect } from "react";
import { postImage } from "./services/issueImageService";
import { AuthContext } from "contexts/AuthContext";

function AddIssueImage() {
  // Chakra Color Mode
  const { file } = useContext(AuthContext);

  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColor = useColorModeValue("navy.700", "white");
  const LinkColor = useColorModeValue("orange.700", "red");
  const bg = useColorModeValue("white", "navy.700");
  const [imageIssueData, setImageIssueData] = useState<{
    comments: string[];
    problem_images: any[];
  }>({
    comments: [""],
    problem_images: [],
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formData = new FormData();

  const onSubmit = async () => {
    // eslint-disable-next-line array-callback-return
    await imageIssueData?.problem_images?.map((e, index) => {
      formData.append(`comments[${index}]`, imageIssueData.comments[0]);
    });
    //@ts-ignore
    // eslint-disable-next-line array-callback-return
    await imageIssueData?.problem_images?.map((e, index) => {
      formData.append(`problem_images[${index}]`, e);
    });
    // console.log(formData);
    await postImage(formData);
  };
  useEffect(() => {
    if (file) {
      setImageIssueData({
        ...imageIssueData,
        problem_images: [...imageIssueData.problem_images, file],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const deleteImage = async (index?: number) => {
    let temp = await imageIssueData.problem_images;
    temp = temp.slice(0, index).concat(temp.slice(index + 1));
    console.log(temp);

    setImageIssueData({
      ...imageIssueData,
      problem_images: temp,
    });
  };
  return (
    <>
      <Box pt={{ base: "50px", md: "0px" }} mt={{ xl: "70px" }}>
        <Card mb={{ base: "0px", "2xl": "20px" }}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            Your Issue information :
          </Text>
          <FormControl>
            <Flex direction={{ sm: "column", xl: "row" }} gap="15px">
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  issue comment <Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  value={imageIssueData?.comments[0]}
                  onChange={(e) => {
                    setImageIssueData({
                      ...imageIssueData,
                      comments: [e.target.value],
                    });
                  }}
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />
              </FormControl>{" "}
            </Flex>

            <Card
              bg={bg}
              display={"flex"}
              justifyItems={"center"}
              justifyContent={"center"}
              alignItems="flex-start"
              gap={"15px"}
            >
              <Text
                color={textColor}
                fontSize="34px"
                textAlign="start"
                fontWeight="700"
                lineHeight="100%"
              >
                Device images
              </Text>
              <Flex direction={{ md: "column", xl: "row" }} gap={"5px"}>
                {imageIssueData?.problem_images?.map((e, index) => {
                  const imageUrl = URL.createObjectURL(e);
                  return (
                    <Image
                      borderRadius={"20px"}
                      cursor={"pointer"}
                      width={"100px"}
                      height={"100px"}
                      src={imageUrl}
                      onClick={() => deleteImage(index)}
                    />
                  );
                })}
              </Flex>
              <Upload
                //@ts-ignore

                maxW={"500px"}
                justifyItems={"center"}
                justifyContent={"center"}
                gridArea={{
                  base: "3 / 1 / 4 / 2",
                  lg: "1 / 3 / 2 / 4",
                }}
                minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
                pe="20px"
                pb={{ base: "100px", lg: "20px" }}
              />
              <Text as="span" fontWeight="500" ms="4px">
                By continuing you are agreeing to Eventcube's
                <Link
                  mx="3px"
                  color={LinkColor}
                  href=""
                  target="_blank"
                  fontWeight="700"
                >
                  Terms & Conditions
                </Link>
                and
                <Link
                  mx="3px"
                  color={LinkColor}
                  href=""
                  target="_blank"
                  fontWeight="700"
                >
                  Privacy Policy
                </Link>
              </Text>
            </Card>

            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={onSubmit}
            >
              add the device
            </Button>
          </FormControl>
          <Flex
            direction={{ base: "row", md: "row" }}
            justifyContent={"space-between"}
          ></Flex>
        </Card>
      </Box>
    </>
  );
}
export { AddIssueImage };
