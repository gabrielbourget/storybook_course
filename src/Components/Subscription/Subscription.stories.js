import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

const storyInfo = {
  title: "Subscription"
}

export default storyInfo;

// - TODO: -> How to import prebuilt story components when theyr'e being used with props dynamically off of templates?

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)
