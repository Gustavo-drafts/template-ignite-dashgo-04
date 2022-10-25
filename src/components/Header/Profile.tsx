import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile( { showProfileData = true }: ProfileProps ) {
  return (
    <Flex align={'center'}>
      {showProfileData && (
        <Box mr={4} textAlign='right'>
          <Text>Gustavo Trindade</Text>
          <Text color='gray.300'>gu@gu.com</Text>
        </Box>
      )}

      <Avatar size={'md'} name='Gusatvo Trindade' src='https://github.com/gutoo01.png' />

    </Flex>
  )
}