import React, { useState,useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  border,
  Box,
  Button,
  Input,
  Text,
  GridItem,
  Grid,
  Image,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [loginerrorcheck, setLoginErrorcheck] = useState(false);
  const toast = useToast();
  let info = JSON.parse(localStorage.getItem("userData"));
  console.log("info", info);
  const handleLoginEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    info.map((ele) =>
      ele.email === email && ele.password === password
        ? setDone(true)
        : setLoginErrorcheck(true)
    );
   
  };
  console.log("done",loginerrorcheck);
  useEffect(() => {
    if (loginerrorcheck) {
      toast({
        title: "please enter correct email and password !",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
   
  }, [loginerrorcheck])
 

  if (done) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      <Box w="400px" h="480px" m="auto">
        <Text
          textAlign="center"
          color="#333c43"
          fontWeight="bolder !important"
          fontSize="2.625rem"
          mb="30px"
        >
          Log in to DeskTime
        </Text>

        <label>Email</label>
        <Input
          placeholder="Type in your email address"
          mb="30px"
          type="email"
          value={email}
          onChange={handleLoginEmail}
          border="1px solid #999da1"
          mt="10px"
        />

        {/* {loginerrorcheck && (
          <Alert status="error" h="30px" background="none" border="1px solid black">
            <AlertIcon />
            There was an error processing your request
          </Alert> */}
        {/* )} */}
        <label>Password</label>
        <Input
          placeholder="Type in your password"
          mb="30px"
          type="password"
          value={password}
          onChange={handlePassword}
          mt="10px"
        />
        {/* {loginerrorcheck && (
          <Alert status="error" h="30px" background="none" border="1px solid black" mb="20px">
            <AlertIcon />
            There was an error processing your request
          </Alert> */}
        {/* )} */}
        <Button
          backgroundColor="#4EA819"
          border="1px solid #43762b"
          color="#FFFFFF"
          w="100%"
          mb="30px"
          onClick={handleLogin}
        >
          LOGIN
        </Button>
        <Text textAlign="center" fontWeight="bolder !important" mb="20px">
          I forget my password
        </Text>
        <Text textAlign="center">
          Dont have an account yet?
          <Link to="/Signup" fontWeight="bold">
            Sign up here!
          </Link>
        </Text>
      </Box>
      <Box>
        <Text textAlign="center" mt="20px" fontWeight="bold">
          or connect with us
        </Text>
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={6}
          w="400px"
          h="200px"
          m="auto"
          mt="30px"
          pt="100px"
          pl="10px"
          pr="10px"
        >
          <GridItem w="100%" h="10">
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=164024813631314&kid_directed_site=0&app_id=164024813631314&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Foauth%3Fclient_id%3D164024813631314%26redirect_uri%3Dhttps%253A%252F%252Fdesktime.com%252Fauth%252Flogin%252Ffacebook%252Fcallback%26scope%3Demail%26response_type%3Dcode%26state%3DDrIaUqmV2ORZk6JD4pkO8KrQCfViQ5b9IoiUuHHU%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D7e936872-9d58-45da-8cf3-b5f830844895%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fdesktime.com%2Fauth%2Flogin%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DDrIaUqmV2ORZk6JD4pkO8KrQCfViQ5b9IoiUuHHU%23_%3D_&display=page&locale=kn_IN&pl_dbl=0">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png"
                alt="facebook"
              />
            </a>
          </GridItem>
          <GridItem w="100%" h="10">
            {" "}
            <a href="https://api.twitter.com/oauth/authorize?oauth_token=njFckgAAAAAAB8ojAAABhQ9Pq9M">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"
                alt="facebook"
              />
            </a>
          </GridItem>
          <GridItem w="100%" h="10">
            <a href="https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D279677%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522J8byovjgGhgRY0GnCcTyXQ478ArvXPwnzDtjuMS9%2522%252C%2522appId%2522%253A279677%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1670999182438%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fdesktime.com%252Fauth%252Flogin%252Flinkedin%252Fcallback%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D279677%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522J8byovjgGhgRY0GnCcTyXQ478ArvXPwnzDtjuMS9%2522%252C%2522appId%2522%253A279677%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1670999182438%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fdesktime.com%252Fauth%252Flogin%252Flinkedin%252Fcallback%2522%257D">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                alt="facebook"
              />
            </a>
          </GridItem>
          <GridItem w="100%" h="10">
            <a href="www.google.com">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2504/2504914.png"
                alt="facebook"
              />
            </a>
          </GridItem>
          <GridItem w="100%" h="10">
            <a href="https://appleid.apple.com/auth/authorize?client_id=com.desktime.service&redirect_uri=https%3A%2F%2Fdesktime.com%2Fauth%2Flogin%2Fapple%2Fcallback&scope=name%20email&response_type=code&response_mode=form_post&state=hciO8QhHntRs6PUh0ccqqy0Qoz9HqVF6QWaAi8wC">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2504/2504884.png"
                alt="facebook"
              />
            </a>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
