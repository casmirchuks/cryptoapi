import { gql, useQuery } from '@apollo/client'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

import React from 'react'


const GET_MARKET_DATA = gql`
  query Query($marketDataId: ID!) {
    marketData(id: $marketDataId) {
      name
      base
      quote
    }
  }

`

const MyModal: React.FC = ()=> {
    const [isOpen, setIsOpen] = React.useState<boolean>(true)
    
    return (
        <>
<Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      "hey body"
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={()=>setIsOpen(false)}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
        </>
    )
}

export default MyModal