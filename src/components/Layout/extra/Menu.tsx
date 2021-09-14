import {
  Menu,
  MenuButton,
  useColorModeValue,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import Link from "./Link";

const DropdownMenu = ({ currentPath, extraLinks }) => {
  const hoverColor = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.50", "gray.800");

  return (
    <Menu autoSelect={false}>
      <MenuButton
        p={2}
        textAlign="left"
        rounded={"md"}
        bg="none"
        _hover={{
          bg: hoverColor,
        }}
        _active={{
          bg: activeColor,
        }}
        fontWeight={400}
        as={Button}
        rightIcon={<FaAngleDown />}
      >
        Links
      </MenuButton>
      <MenuList bg={color}>
        {extraLinks &&
          extraLinks?.map(({ name, route }) => (
            <Link href={route} key={name} currentPath={currentPath}>
              <MenuItem bg={currentPath === route && hoverColor}>
                {name}
              </MenuItem>
            </Link>
          ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
