import React from "react";
//chakra
import {
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

const AlertMessage = (props) => {
  return (
    <Alert status='error' mb={10} mt={4}>
      <AlertIcon />
      <AlertDescription>
        {props.message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
