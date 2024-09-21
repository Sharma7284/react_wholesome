import React from "react";
import { Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import APP_LOGO from "../../assets/images/wh_logo.svg";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="bg-[#085946] min-h-screen flex flex-col gap-8 items-center justify-center">
      <div className="cursor-pointer" onClick={() => navigate(`/`)}>
        <img src={APP_LOGO} alt="app_logo.png" />
      </div>
      <div className="flex flex-col gap-8 w-full max-w-[25%]">
        <div className="bg-white rounded-lg">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors[`email`] = `Required.`;
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors[`email`] = `Invalid email address`;
              }
              return errors;
            }}
            onSubmit={() => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className="flex flex-col py-8 px-4 gap-4"
                onSubmit={handleSubmit}
              >
                <FormControl isInvalid={!!errors?.email}>
                  <FormLabel>Enter your name</FormLabel>
                  <Input type="text" name="name" placeholder="Enter name" />
                  {errors.email && touched.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={!!errors?.email}>
                  <FormLabel>Enter your email</FormLabel>
                  <Input type="email" name="email" placeholder="Enter email" />
                  {errors.email && touched.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={!!errors?.password}>
                  <FormLabel>Enter your password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.email && touched.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  Register
                </Button>
              </form>
            )}
          </Formik>
        </div>
        <div className="bg-white rounded-lg p-4">
          <Text className="text-center">
            Have an account ?
            <Link className="text-center font-bold" to={"/login"}>
              {" "}
              Login
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Register;
