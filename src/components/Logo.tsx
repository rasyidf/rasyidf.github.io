import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Logo = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box className="logo" onClick={() => router.push("/")}>
      <svg
        version="1.1"
        style={{ overflow: "visible" }}
        width="38"
        height="42"
        viewBox="0 0 382 426"
        x="0px"
        y="0px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M285.542 376.761C174.096 441.102 207.905 441.104 96.458 376.76C-14.9867 312.417 1.91556 341.696 1.91556 213.009C1.91556 84.3214 -14.987 113.601 96.458 49.257C207.904 -15.0849 174.096 -15.0866 285.542 49.2574C396.987 113.601 380.084 84.3218 380.084 213.009C380.084 341.696 396.987 312.417 285.542 376.761Z"
          fill={`${colorMode === "light" ? "#2AABE0" : "#F8FEFF"}`}
          stroke={`${colorMode === "light" ? "#2AABE0" : "#F8FEFF"}`}
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.1135 267.057C66.8412 300.99 104.02 330.766 135.188 293.455C130.182 285.617 109.855 282.271 101.978 288.487C98.964 280.292 91.988 264.835 84.1135 267.057V267.057Z"
          fill={`${colorMode === "light" ? "#F8FEFF" : "#2AABE0"}`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M292.375 238.74L287.847 236.539L283.601 245.704L292.375 238.74Z"
          fill="#ABC9D6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M292.375 238.74L283.601 245.704L287.847 236.539C310.578 77.8214 169.866 71.3857 148.674 148.991C139.971 180.867 162.19 213.011 172.761 241.348L146.692 271.191C155.867 279.278 169.396 280.666 180.353 281.18C156.056 311.309 141.986 319.754 95.5852 321.392C114.606 349.139 170.472 349.188 201.645 334.507C238.168 317.303 253.312 298.986 275.966 268.168C293.809 266.456 297.614 268.84 308.672 253.64L292.375 238.74V238.74Z"
          fill={`${colorMode === "light" ? "#F8FEFF" : "#2AABE0"}`}
        />
        <path
          d="M176.069 169.95C181.058 169.95 185.103 165.906 185.103 160.917C185.103 155.928 181.058 151.883 176.069 151.883C171.08 151.883 167.036 155.928 167.036 160.917C167.036 165.906 171.08 169.95 176.069 169.95Z"
          fill={`${colorMode === "light" ? "#2AABE0" : "#F8FEFF"}`}
        />
      </svg>
    </Box>
  );
};

export default Logo;
