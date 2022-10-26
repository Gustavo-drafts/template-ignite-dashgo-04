import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}




const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ( { name, label, ...rest }, ref ) => {

  return (
    <FormControl>
      {!!label &&
        <FormLabel htmlFor={name} id={name}>
          {label}
        </FormLabel>
      }

      <ChakraInput
        id={name}
        name={name}
        type='email'
        focusBorderColor="purple.500"
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg'
        ref={ref}
        {...rest} // repasse de todas as props de InputProps + ChakraInputProps
      />
    </FormControl>
  )
}

export const Input = forwardRef( InputBase )

// forwardRef() -> usado para fazer encaminhamento de 'propriedades reservadas'