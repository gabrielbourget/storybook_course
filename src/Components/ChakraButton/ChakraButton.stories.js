import React from "react";
import { Button } from "@chakra-ui/core";

const storyInfo = {
  title: "Chakra/Button",
  component: Button
};

export default storyInfo;

export const Success = () => <Button variantColor="green">Success</Button>
export const Danger = () => <Button variantColor="red">Danger</Button>