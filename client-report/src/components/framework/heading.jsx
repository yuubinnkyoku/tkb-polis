import React from "react";
import * as globals from "../globals";
import f from "../../strings/strings";

const Content = ({ conversation }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <div>
        <h1 style={globals.primaryHeading}>
          {conversation.topic}
        </h1>
        <p style={globals.secondaryHeading}>
          {conversation.description}
        </p>
      </div>
      <div>
        <p style={globals.paragraph}>
          {f("participants")}: {conversation.participant_count}
        </p>
      </div>
    </div>
  );
};

const Heading = ({ conversation }) => {
  return (
    <div>
      {conversation ? <Content conversation={conversation} /> : f("loading")}
    </div>
  )
};

export default Heading;
