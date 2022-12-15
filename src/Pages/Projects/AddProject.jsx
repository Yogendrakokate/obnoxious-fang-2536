import React from "react";
import "./AddProject.css";
import { Link } from "react-router-dom";
import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import AddProjectForm from "./AddProjectForm.jsx";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// import {Lorem} from '@chakra-ui/model';

const AddProject = () => {
  // ...........model code ...................
  const {
    isOpen: isOpenQTN,
    onOpen: onOpenQTN,
    onClose: onCloseQTN,
  } = useDisclosure(); //this for qtn button popup model
  const {
    isOpen: isOpenAddPjct,
    onOpen: onOpenAddPjct,
    onClose: onCloseAddPjct,
  } = useDisclosure(); //this for add project Model
  const {
    isOpen: isOpenAddMember,
    onOpen: onOpenAddMember,
    onClose: onCloseAddMember,
  } = useDisclosure(); //this is for add Member model
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // =========AddProject Modal================================

  return (
    <>
      <Link to="/">
        <h1>Home-page</h1>
      </Link>
      <div className="addProject-container">
        {/*===================== blue box code  =====================*/}

        <div className="blueBelt-nav-container">
          <div className="blueBelt-nav">
            <h5>Get started with DeskTime..... </h5>
            <div className="blueBelt-nav-items">
              <span>1.Create a project</span>
              <span>2.Create a Team</span>
              <span>3.Add a team member</span>
              <span>4.Track project time</span>
              <span>5.Setup Account</span>
              <span>6.Add a Payment method</span>
            </div>
          </div>
        </div>

        {/* =============add project button div========= */}

        <div className="buttons-container">
          <h5>Projects</h5>
          <div className="buttons-box">
            <Stack direction="row" spacing={4} align="center">


              {/* ======addProject popup model========== */}

              <Button colorScheme="" variant="solid" onClick={onOpenAddPjct}>
                + Add Project
              </Button>

              <Modal
                isCentered
                onClose={onCloseAddPjct}
                isOpen={isOpenAddPjct}
                motionPreset="slideInBottom"
                bg="none"
              >
                <ModalOverlay
                  bg="blackAlpha.300"
                  backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent>
                <div >
                <ModalHeader className="about-project-model-head">Add Project</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                {/*==============here imported addProject form========= */}
                 <AddProjectForm/>

                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onCloseAddPjct}>
                      Close
                    </Button>
                    <Button variant="ghost" className="about-project-model-button">Add</Button>
                  </ModalFooter>
                </div>
                
                </ModalContent>
              </Modal>

              {/* =======================add Member popup model===================== */}

              <Button colorScheme="" variant="solid" onClick={onOpenAddMember}>
                + Add Member
              </Button>

              <Modal
                isCentered
                onClose={onCloseAddMember}
                isOpen={isOpenAddMember}
                motionPreset="slideInBottom"
                bg="none"
              >
                <ModalOverlay
                  bg="blackAlpha.300"
                  backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent>
                <div >
                <ModalHeader className="about-project-model-head">Add Member</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onCloseAddMember}>
                      Close
                    </Button>
                    <Button variant="ghost" className="about-project-model-button">Add</Button>
                  </ModalFooter>
                </div>
                 
                </ModalContent>
              </Modal>
            </Stack>

            {/* ====================== model QTN  implementation  ==================== */}

            <div className="q-box" onClick={onOpenQTN}>
              <QuestionIcon />
            </div>

            <Modal
              isOpen={isOpenQTN}
              onClose={onCloseQTN}
              className="about-project-model"
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent>
                <div className="about-project-model-head">
                  <ModalHeader>Projects</ModalHeader>
                  <ModalCloseButton />
                </div>

                <ModalBody className="about-project-model-content">
                  <ul>
                    <li>You can filter and search projects and tasks here.</li>
                    <li>To add a project, use the “New Project” button.</li>
                    <li>
                      You can assign projects to all company members or specific
                      employees, set hourly rates, and estimate project costs
                      and time.
                    </li>
                    <li>
                      You can start tracking your first project via the desktop
                      app or the webtimer.
                    </li>
                    <li>
                      It's possible to connect DeskTime projects with your
                      project management apps (Asana, JIRA, or others).
                    </li>
                  </ul>
                  <img src="https://desktime.com/static/app/intro/projects.png?v1"></img>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme=""
                    mr={3}
                    onClick={onClose}
                    className="about-project-model-button"
                  >
                    GOT IT
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
