import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

const storyInfo = {
  title: "Subscription"
}

export default storyInfo;

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)