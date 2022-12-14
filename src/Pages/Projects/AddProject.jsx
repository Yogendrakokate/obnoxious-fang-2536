import React from "react";
import "./AddProject.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, IconButton, Stack } from "@chakra-ui/react";

const AddProject = () => {
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
              <Button colorScheme="" variant="solid">
               + Add Project
              </Button >
              <Button colorScheme="" variant="solid">
               + Add Member
              </Button >
            </Stack>
            <div className="q-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
