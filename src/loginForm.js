import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Flex,
    Link,
    Stack,
    Text,
    VStack,
    FormHelperText,
    FormErrorMessage,
    IconButton,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import css
import './index.css';


function ErrorMessageExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setTimeout(() => {
      setShowPassword(false);
    }, 300); 
  };
  const isEmailError = email === '';
  const isPasswordError = password === '';

  let emailErrorMessage = null;
  let passwordErrorMessage = null;
  // let emailHelperText = 'Enter the email you\'d like to receive the newsletter on.';
  let passwordHelperText = 'Enter your password.';

  if (isEmailError) {
    emailErrorMessage = 'Email is required.';
    // emailHelperText = null;
  }

  if (isPasswordError) {
    passwordErrorMessage = 'Password is required.';
    passwordHelperText = null;
  }



    return (
      <Box mt='10'>
        <Center my='auto'>
          <Stack spacing='4'>
            
            <Card variant='outline' bg='#f6f8fa' borderColor='#ccc'>
              <CardBody>
                <Center>
                  <HStack fontSize='' spacing='1'>
                   <Heading fontSize='2xl'>
                    Sign in to Cheap_Pay
                   </Heading>
                  </HStack>
                </Center>
              </CardBody>
            </Card>

            
            <Card bg='#f6f8fa' variant='outline' borderColor='#ccc' w='400px'>
              <CardBody>
                <form>
                  <Stack spacing='4'>
                  <FormControl isInvalid={isEmailError}>
      <FormLabel size='sm'>Email</FormLabel>
      <Input type='email'
       bg='white'
          borderColor='#d8dee4'
         size='sm'
          borderRadius='6px'
      value={email} onChange={handleEmailChange} />
      {/* {emailHelperText && (
        <FormHelperText>
          {emailHelperText}
        </FormHelperText>
      )} */}
      {emailErrorMessage && (
        <FormErrorMessage>
          {emailErrorMessage}
        </FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isPasswordError}>
    <HStack justify='space-between'>
    <FormLabel size='sm'>Password</FormLabel>
    <Button
      as='a'
      href='#'
      variant='link'
      size='xs'
      color='#0969da'
      fontWeight='500'
    >
      Forgot password?
    </Button>
  </HStack>
      <Flex position='relative'>
        <Input
        type={showPassword ? 'text' : 'password'}
          bg='white'
          borderColor='#ccc'
             size='sm'
            borderRadius='6px'
        value={password} onChange={handlePasswordChange} />
            <IconButton
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={handleTogglePassword}
            position='absolute'
            top='50%'
            right='10px'
            transform='translateY(-50%)'
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            variant='ghost'
          />
      </Flex>
      {passwordHelperText && (
        <FormHelperText>
          {passwordHelperText}
        </FormHelperText>
      )}
      {passwordErrorMessage && (
        <FormErrorMessage>
          {passwordErrorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
                    <Button
                      bg='#DC5F20'
                      color='white'
                      size='sm'
                      _active={{ bg: '#DC5F20' }}
                      _hover={{ bg: '#fc8403' }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </CardBody>
            </Card>
  
            <Card variant='outline'bg='#f6f8fa' borderColor='#ccc'>
              <CardBody>
                <Center>
                  <HStack fontSize='sm' spacing='1'>
                    <Text>New to Cheap_Pay?</Text>
                    <Link isExternal color='#DC5F20' href='#'>
                      Create an account.
                    </Link>
                  </HStack>
                </Center>
              </CardBody>
            </Card>
          </Stack>
        </Center>

      </Box>
    );
  }
  export default ErrorMessageExample;


//   <FormControl>
//   <HStack justify='space-between'>
//     <FormLabel size='sm'>Password</FormLabel>
//     <Button
//       as='a'
//       href='#'
//       variant='link'
//       size='xs'
//       color='#0969da'
//       fontWeight='500'
//     >
//       Forgot password?
//     </Button>
//   </HStack>
//   <Input
//     type='password'
//     bg='white'
//     borderColor='#d8dee4'
//     size='sm'
//     borderRadius='6px'
//   />
// </FormControl>


// <FormControl>
// <FormLabel size='sm'>Username or email address</FormLabel>
// <Input
//   type='text'
//   bg='white'
//   borderColor='#d8dee4'
//   size='sm'
//   borderRadius='6px'
// />