import React, { useState } from "react";
import * as globals from "../globals.js";
import Narrative from "../narrative/index.jsx";
import CommentList from "./commentList.jsx";
import getNarrativeJSON from "../../util/getNarrativeJSON.js";
import f from "../../strings/strings";
const ConsensusNarrative = ({
  math,
  comments,
  conversation,
  ptptCount,
  formatTid,
  voteColors,
  narrative,
  model,
}) => {
  try {
    const narrativeJSON = getNarrativeJSON(narrative, narrative?.model);

    // Extract all citation IDs from the narrative structure
    const uniqueTids = narrativeJSON.paragraphs.reduce((acc, paragraph) => {
      paragraph?.sentences?.forEach((sentence) => {
        sentence?.clauses?.forEach((clause) => {
          if (Array.isArray(clause?.citations)) {
            acc.push(...clause.citations);
          }
        });
      });
      return acc;
    }, []);

    // Deduplicate the IDs
    const dedupedTids = [...new Set(uniqueTids || [])];
    return (
      <div>
        <p style={globals.primaryHeading}> {f("consensus_narrative_title")} </p>
        <p style={globals.paragraph}>
          {f("narrative_hallucination_warning")}
        </p>
        <Narrative sectionData={narrative} model={model} />
        {narrative.errors === undefined && (
          <div style={{ marginTop: 50 }}>
            <CommentList
              conversation={conversation}
              ptptCount={ptptCount}
              math={math}
              formatTid={formatTid}
              tidsToRender={dedupedTids}
              comments={comments}
              voteColors={voteColors}
            />
          </div>
        )}
      </div>
    );
  } catch (err) {
    console.error("Failed to parse narrative:", {
      error: err,
      rawText: narrative,
      model: narrative?.model,
    });
    return (
      <div>
        <p>{f("narrative_error")}</p>
        <pre>{err.message}</pre>
      </div>
    );
  }
};
export default ConsensusNarrative;
