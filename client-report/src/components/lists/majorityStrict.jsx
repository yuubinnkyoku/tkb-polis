// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import * as globals from "../globals";
import CommentList from "./commentList.jsx";
import Legend from "../framework/legend.jsx";
import f from "../../strings/strings";

const MajorityStrict = ({
  conversation,
  comments,
  ptptCount,
  consensus,
  formatTid,
  math,
  voteColors,
}) => {
  if (!conversation) {
    return <div>{f("majority_strict_loading")}</div>;
  }

  // const _comments = _.keyBy(comments, "tid");
  const _consensusTids = [];
  consensus.agree.forEach((c) => {
    _consensusTids.push(c.tid);
  });
  consensus.disagree.forEach((c) => {
    _consensusTids.push(c.tid);
  });

  return (
    <div>
      <p style={globals.primaryHeading}> {f("majority_strict_title")} </p>
      <p style={globals.paragraph}>{f("majority_strict_subtitle")}</p>
      <p style={globals.paragraph}>
        {f("majority_strict_description")}
      </p>
      <Legend voteColors={voteColors} />
      <div style={{ marginTop: 20 }}>
        <CommentList
          conversation={conversation}
          ptptCount={ptptCount}
          math={math}
          formatTid={formatTid}
          tidsToRender={_consensusTids.sort((a, b) => a - b)}
          comments={comments}
          voteColors={voteColors}
        />
      </div>
    </div>
  );
};

export default MajorityStrict;

// These comments were also voted on by greater than [n%] of total voters.
