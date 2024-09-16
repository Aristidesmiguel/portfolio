import { Box, Flex, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../components";
import { Link } from "react-router-dom";
import './estilo.css'
export const Footer: React.FC = () => {
  return (
    <Box className="footer" style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10rem',
        width: '90%',
        marginLeft: '5rem'
    }}>
      <Box style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px'
      }} className="footer_cima">
        <Logo></Logo>
        <Box >
          <Flex id="flex" gap={'100px'}>
            <Text>951 999 999</Text>
            <Text>miguelaristides21@gmail.com</Text>
            <Text>
              <Flex gap={'10px'}>
                <Link to={"#"}>
                  <Image src="Vector.svg"></Image>
                </Link>
                <Link to={"#"}>
                  <Image src="Vector.png"></Image>
                </Link>
              </Flex>
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box  as="hr" className="linha"></Box>
      <Box marginTop={'30px'} marginBottom={'30px'} className="footer_baixo">
      <Box style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
            <Box>
                <Text>
                    Desenvolvido por Aristides José Miguel
                </Text>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};
