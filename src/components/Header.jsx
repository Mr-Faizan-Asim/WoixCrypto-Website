import { Button, HStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"7"} shadow={"xs"} bgColor={"blackAlpha.900"}>
      <Button variant={"ghost"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}>
        <Link to="/exchanges">Visit</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}>
        <Link to="/coins">Conversion of Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
