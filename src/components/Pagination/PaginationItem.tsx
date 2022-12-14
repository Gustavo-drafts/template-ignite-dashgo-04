import { Button } from "@chakra-ui/react";

interface PaginationProps {
  number: number;
  isCurrentPage?: boolean;
}

export function PaginationItem( {
  isCurrentPage = false,
  number
}: PaginationProps ) {

  if ( isCurrentPage ) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}