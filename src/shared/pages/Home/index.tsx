import {
  Box,
  Image,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";

import "./main.css";
import { projetos } from "../../../utils/constants";
import { Link } from "react-router-dom";
import { Logo } from "../../components";

export const Home: React.FC = () => {
  return (
    <>
      <Box p={"20px"} w={"100%"}>
        <Flex
          w={"100%"}
          display={"flex"}
          justifyContent={"space-around"}
          p={"10px"}
        >
          <Box>
            <Logo />
          </Box>
          <Box>
            <Box>
              <UnorderedList styleType={"none"} className="navBar">
                <Flex gap={"20px"}>
                  <ListItem>
                    {" "}
                    <a href="#inicio" className="linkHeader">
                      Início
                    </a>{" "}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <a href="#sobreMe" className="linkHeader">
                      Sobre me
                    </a>{" "}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <a href="#tecnologia" className="linkHeader">
                      Tecnologias
                    </a>{" "}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <a href="#projetos" className="linkHeader">
                      Projetos
                    </a>{" "}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <a href="#contatos" className="linkHeader">
                      Contactos
                    </a>{" "}
                  </ListItem>
                  <Link to={"#"}>
                    <Image src="Vector.svg"></Image>
                  </Link>
                  <Link to={"#"}>
                    <Image src="Vector.png"></Image>
                  </Link>
                </Flex>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box className="home_main">
        <Box id="inicio" className="section_main_info">
          <Box className="presentacao_main">
            <Text as={"h1"} style={{ color: "#42446E" }}>
              Olá,
              <Box as={"br"}></Box>
              Meu nome é<Box as={"br"}></Box>
              <Box as={"span"}>Aristides Miguel</Box>
              <Box as={"br"}></Box>
              Desenvolvedor Front-End
            </Text>
          </Box>
          <Box className="foto_main">
            <Image src="dario.jpg" />
          </Box>
        </Box>
        <Box id="sobreMe" className="sobre_me_main">
          <Box className="img_main_profile">
            <Image src="foto1.jpg" />
          </Box>
          <Box className="eu_sou_main">
            <Box className="title_main_sobe">
              <Text as={"h1"}>Sobre Me</Text>
            </Box>
            <Flex
              fontSize={"1.1rem"}
              justify={"center"}
              flexDir={"column"}
              gap={"20px"}
            >
              <Box className="text">
                <Text as={"h1"}>
                  Eu sou Aristides Miguel, tenho 18 anos, e sou um programador web apaixonado por criar experiências
                  digitais <Box as={"br"}></Box>excepcionais. Com uma sólida
                  formação em desenvolvimento web, <Box as={"br"}></Box>{" "}
                  transformo conceitos inovadores em soluções práticas e
                  estéticas <Box as={"br"}></Box>que ajudam meus clientes a se
                  destacarem no mundo digital.
                </Text>
              </Box>
              <Box>
                <Text className="text">
                  Para mim, a tecnologia deve ser uma ferramenta para resolver
                  problemas <Box as={"br"}></Box> e melhorar a vida das pessoas.
                  Minha abordagem é centrada no cliente, com um{" "}
                  <Box as={"br"}></Box> foco em entender 
                  suas necessidades e transformar suas ideias em soluções digitais que superem suas
                  expectativas.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box id="tecnologia" className="tecnologias_main">
          <Box className="title_main_sobe">
            <Text as={"h1"} style={{ color: "#42446E" }}>
              TECNOLOGIAS
            </Text>
          </Box>
          <Box className="used_tech">
            <Swiper
            id='color'
              spaceBetween={0}
              slidesPerView={5}
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image src="vscode-icons_file-type-html.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="vscode-icons_file-type-css.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="vscode-icons_file-type-js-official.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="vscode-icons_file-type-js-official (1).svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="logos_react.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="vscode-icons_file-type-tailwind.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="logos_git-icon.svg" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="logos_bootstrap.svg" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Box id="projetos" className="projetos">
          <Box className="title_main_sobe">
            <Text style={{ color: "#42446E" }} as={"h1"}>
              PROJETOS
            </Text>
          </Box>
          <Box className="projects">
            {projetos.map((projeto, index) => (
              <Box className="card_main">
                <Box
                  style={{
                    background: `url(${projeto.image}) center / cover no-repeat`,
                  }}
                  className="image"
                ></Box>
                <Box className="card_main_child">
                  <Box className="nome_project">
                    <Text
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      className="nome"
                      as={"h1"}
                    >
                      {projeto.nome}
                    </Text>
                  </Box>
                  <Box className="info">
                    <Text> {projeto.info}</Text>
                  </Box>
                  <Box className="tech">
                    <Text style={{ color: "#42446E", fontWeight: "bold" }}>
                      {"Tecnologias: " + projeto.tech}
                    </Text>
                  </Box>
                  <Box style={{ marginTop: "10px" }} className="link">
                    <Flex gap={"20px"}>
                      <Link to={"#"}>
                        <Image src="github.png" />
                      </Link>
                      <Link to={"#"}>
                        <Image src="link.png" />
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
