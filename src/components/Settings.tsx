import React from "react";
import {
  Heading,
  Box,
  FormLabel,
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import RadioCard from "./RadioCard.jsx";
import RandomForm from "./algo-forms/RandomForm";
import SmallWorldForm from "./algo-forms/SmallWorldForm";
import PreferentialForm from "./algo-forms/PreferentialForm";

type Props = {
  algo: string,
  setAlgo: React.Dispatch<React.SetStateAction<string>>,
  settings: {
    nodes: number;
    prob: string;
    knei: number;
    layout: string;
  },
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

export default function Settings(props: Props) {
  const algoOptions = ['Random', 'Small-world', 'Preferential Attachment'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Random',
    onChange: props.setAlgo,
  });

  const group = getRootProps();

  return (
    <Box
      p={4} 
      m={4} 
      border='1px' 
      borderColor='#2D3748' 
      borderRadius='md' 
      shadow='xl'
      bg='#f8f8ff'
    >
      <Heading as='h1' size='md' color='#2D3748'>Graph Settings</Heading>
      <FormLabel color='#2D3748' mt={3}>Generation Algorithm</FormLabel>
      <HStack {...group}>
        {algoOptions.map(value => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
      <Box mb={-3}>
        {props.algo === 'Random' 
          ? <RandomForm 
              settings={props.settings}
              setSettings={props.setSettings}
              // handleNodeChange={props.handleNodeChange}
              // handleProbChange={props.handleProbChange}
              // handleLayoutChange={props.handleLayoutChange}
            /> 
          : (props.algo === 'Small-world' 
              ? <SmallWorldForm/> 
              : <PreferentialForm/>)};
      </Box>
    </Box> 
  );
}