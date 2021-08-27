import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  FormHelperText,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  Select,
  Button
} from "@chakra-ui/react"

type Props = {
  settings: {
    nodes: number;
    prob: string;
    knei: number;
    layout: string;
  }
  setSettings: React.Dispatch<React.SetStateAction<{
    nodes: number;
    prob: string;
    knei: number;
    layout: string;
  }>>
  // handleNodeChange: (valStr: string, valNum: number) => void,
  // handleProbChange: (valStr: string, valNum: number) => void,
  // handleLayoutChange: (valStr: string, valNum: number) => void,
};

export default function RandomForm({ settings, setSettings }: Props) {
  const [params, setParams] = useState({
    nodes: 0,
    prob: '0',
    layout: 'random'
  });

  const localHandleNodes = (valStr: string, valNum: number) => {
    if (isNaN(valNum)) {
      valNum = 0;
    }

    setParams({
      ...params,
      nodes: valNum
    })
  };

  const localHandleProb = (valStr: string, valNum: number) => {
    setParams({
      ...params,
      prob: valStr
    })
  };

  const localHandleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (n: number, p: string, l: string) => {
    setSettings({
      ...settings,
      nodes: n,
      prob: p,
      layout: l
    });
    // props.handleNodeChange('', nodes);
    // props.handleProbChange(prob, 0);
    // props.handleLayoutChange(layout, 0)
  };

  return (
    <form>
      <FormControl id='nodes' isRequired mt={3}>
        <FormLabel color='#2D3748'>Number of Nodes</FormLabel>
        <NumberInput 
          value={params.nodes} 
          onChange={localHandleNodes}
          min={0} 
          max={500}
          inputMode='numeric'
        >
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 500</FormHelperText>
      </FormControl>
      <FormControl id='prob' isRequired mt={3}>
        <FormLabel color='#2D3748'>Probability of an Edge Between Two Nodes</FormLabel>
        <NumberInput
          value={params.prob}
          onChange={localHandleProb}
          step={0.01}
          min={0} 
          max={1}
          inputMode='decimal'
        >
          <NumberInputField
            color='#2D3748' 
            border='1px' 
            borderColor='#2D3748'
            _hover={{
              borderColor: 'gray.400'
            }}
            _focus={{
              borderColor: 'gray.400'
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color='#2D3748' />
            <NumberDecrementStepper color='#2D3748' />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color='gray.500'>0 to 1</FormHelperText>
      </FormControl>
      <FormControl id='layout' isRequired mt={3}>
        <FormLabel color='#2D3748'>Layout</FormLabel>
        <Select
          name='layout'
          value={params.layout}
          onChange={localHandleLayout}
          color='#2D3748'
          backgroundColor='#f8f8ff'
          border='1px' 
          borderColor='#2D3748'
          _hover={{
            borderColor: 'gray.400'
          }}
          _focus={{
            borderColor: 'gray.400'
          }}
        >
          <option value="random" style={{backgroundColor: '#f8f8ff'}}>Random</option>
          <option value="grid" style={{backgroundColor: '#f8f8ff'}}>Grid</option>
          <option value="circle" style={{backgroundColor: '#f8f8ff'}}>Circle</option>
          <option value="concentric" style={{backgroundColor: '#f8f8ff'}}>Concentric</option>
          <option value="breadthfirst" style={{backgroundColor: '#f8f8ff'}}>Breadthfirst</option>
          <option value="cose" style={{backgroundColor: '#f8f8ff'}}>Cose</option>
        </Select>
      </FormControl>
      <Flex justify='end'>
        <Button
          mt={6}
          bgColor="gray.700"
          _hover={{ bg: 'gray.600' }}
          _active={{ bg: 'gray.800' }}
          type="button"
          onClick={() => handleSubmit(params.nodes, params.prob, params.layout)}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
}