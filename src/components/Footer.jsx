import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/D4D0BAQGVpgCZakSvyg/company-logo_200_200/0/1692999266867?e=1704326400&v=beta&t=pglts3tZSYyCX0FgQmlBlOoVnk3YQ4CH8Yq_EWQxPCM";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>
           Woix</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
          Crafting Your Crypto Success Story
          </Text>
        </VStack>

        <VStack>
         <a href="https://pk.linkedin.com/company/woix-institute">
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc}  />
          </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
