import { Button, ButtonGroup } from '@chakra-ui/react'


const hideButton  = () => {
    return (
        <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Show</Button>
            <Button>Hide</Button>
        </ButtonGroup>
    )
}
export default hideButton;