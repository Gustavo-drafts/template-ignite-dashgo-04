import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}


export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>()

function handleSignIn(data: any) {
  console.log(data) 
}

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align={'center'}
        justify="center"
      >
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p='8'
          borderRadius={8}
          flexDir='column'
          onSubmit={handleSubmit( handleSignIn )}
        >
          <Stack spacing={4}>
            <Input
              type='email'
              label="e-mail"
              {...register( "email" )}
            />
            <Input
              type='password'
              label="senha"
              {...register( "password")}
            />
          </Stack>

          <Button type="submit" mt='6' colorScheme='blue' size='lg' >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}