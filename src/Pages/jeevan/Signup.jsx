import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Text,
  Grid,
  GridItem,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, ViewIcon } from "@chakra-ui/icons";
let getData = JSON.parse(localStorage.getItem("userData"));

const Signup = () => {
  // const [rightmark,setRightmark]=useState(false)
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);
  const [view, setView] = useState(false);
  const [load, setLoad] = useState(false);

  const [data, setData] = useState([]);
  const [move, setMove] = useState(false);
  const toast = useToast();
  // JSON.parse(localStorage.getItem("userData"))
  const handleChange1 = (e) => {
    setText1(e.target.value);
  };
  const handleChange2 = (e) => {
    setText2(e.target.value);
  };
  const handleChange3 = (e) => {
    setText3(e.target.value);
  };

  const handleClick = () => {
    if (text1.length <= 5) {
      setAlert1(true);
    } else {
      setAlert1(false);
    }
    if (text2.length <= 6) {
      setAlert2(true);
    } else {
      setAlert2(false);
    }
    if (text3.length <= 5) {
      setAlert3(true);
    } else {
      setAlert3(false);
    }
    let payload = {
      name: text1,
      email: text2,
      password: text3,
    };
    if (text1.length > 5 && text2.length > 6 && text3.length > 5) {
      setData([...data, payload]);
      localStorage.setItem("userData", JSON.stringify([...data, payload]));
    }
    console.log("get", getData);
    setTimeout(() => {
      setText1("");
    }, 300);
    setTimeout(() => {
      setText2("");
    }, 400);
    setTimeout(() => {
      setText3("");
    }, 500);
    if (text1.length > 5 && text2.length > 6 && text3.length > 5) {
      setLoad(true);
    }

    setTimeout(() => {
      if (text1.length > 5 && text2.length > 6 && text3.length > 5) {
        setMove(true);
        setLoad(false);
      }
    }, 5000);
    setTimeout(() => {
      if (text1.length > 5 && text2.length > 6 && text3.length > 5) {
        toast({
          title: "Account created.",
          description: "We've created your account for you. Please login now",
          status: "success",
          duration: 9000,
          isClosable: { load },
          position: "top",
        });
      }
    }, 3000);
  };
  useEffect(() => {}, [text1]);

  console.log("alert1", alert1);
  console.log("data", data);
  const handleview = () => {
    setView((prev) => !prev);
  };
  console.log("move", move);

  if (move) {
    return <Navigate to="/Login" />;
  }

  return (
    <Box fontFamily="Source sanse pro,sans-serif" boxSizing="border-box" m="0" p="0">
      <Text
        fontWeight="bold"
        fontSize="32px"
        color="#212529"
        textAlign="center"
      >
        Sign up for a FREE DeskTime trial
      </Text>
      <Text fontWeight="medium" textAlign="center">
        Start tracking your productivity in less than a minute!
      </Text>
      <Box
        w="400px"
        m="auto"
        h="550px"
        fontFamily="Source sanse pro,sans-serif"
        pt="10px"
      >
        <label style={{ textAlign: "left" }}>First and Last</label>
        <InputGroup>
          <Input
            placeholder="Enter your full name"
            onChange={handleChange1}
            value={text1}
            type="text"
            mt="10px"
            mb="20px"
            border="1px solid #999da1"
          />
          {text1.length > 5 && (
            <InputRightElement
              children={<CheckIcon color="green.500" mt="15px" />}
            />
          )}
        </InputGroup>
        {alert1 && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Please! Enter more than 5 character</AlertTitle>
          </Alert>
        )}
        <label>Email</label>
        <InputGroup>
          <Input
            placeholder="Enter your email "
            onChange={handleChange2}
            value={text2}
            type="email"
            mt="10px"
            mb="20px"
            border="1px solid #999da1"
          />
          {text2.length > 6 && (
            <InputRightElement
              children={<CheckIcon color="green.500" mt="15px" />}
            />
          )}
        </InputGroup>
        {alert2 && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Please! Enter more than 5 character</AlertTitle>
          </Alert>
        )}
        <label textAlign="center">Password</label>
        <InputGroup>
          <Input
            placeholder="Enter your password"
            onChange={handleChange3}
            value={text3}
            type={view ? "text" : "password"}
            mt="10px"
            mb="20px"
            border="1px solid #999da1"
          />
          <InputRightElement
            children={
              <Button
                mr="80px"
                border="none"
                background="none"
                onClick={handleview}
                mt="20px"
              >
                <ViewIcon color="green.500" />
              </Button>
            }
          />
          d
          {text3.length > 5 && (
            <InputRightElement
              children={<CheckIcon color="green.500" mt="15px" />}
            />
          )}
        </InputGroup>
        {alert3 && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Please! Enter more than 5 character</AlertTitle>
          </Alert>
        )}

        <Button
          w="400px"
          onClick={handleClick}
          isLoading={load}
          disabled={text1 === "" && text2 === "" && text3 === ""}
          background="#4EA819"
          border="1px solid #43762b"
          color="#FFFFFF"
          mt="30px"
        >
          SIGN UP FOR FREE
        </Button>

        <Text mt="20px">
          Try free for 14 days. No credit card required. By signing up, you
          agree to our
          <a href="https://desktime.com/terms" style={{ fontWeight: "bold" }}>
            {" "}
            terms{" "}
          </a>{" "}
          and{" "}
          <a href="https://desktime.com/terms" style={{ fontWeight: "bold" }}>
            {" "}
            privacy policy.{" "}
          </a>{" "}
        </Text>
        <Text textAlign="center" mt="20px">
          Already have account please{" "}
          <NavLink to="/Login" fontWeight="bold" color="blue">
            login here
          </NavLink>
        </Text>
      </Box>
      <Box mt="30px" pt="20px" w="400px" m="auto">
        <Text textAlign="center" fontWeight="bold" mt="30px">
          Or connect with us
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

export default Signup;
