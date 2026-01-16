// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import CommentList from "./commentList.jsx";
import * as globals from "../globals.js";
// import style from "../../util/style";
import Narrative from "../narrative/index.jsx";
import f from "../../strings/strings";

const Uncertainty = ({
  conversation,
  comments,
  ptptCount,
  uncertainty,
  formatTid,
  math,
  voteColors,
  narrative,
}) => {
  if (!conversation) {
    return <div>{f("uncertainty_loading")}</div>;
  }
  return (
    <div>
      <p style={globals.primaryHeading}> {f("uncertainty_title")} </p>
      <p style={globals.paragraph}>
        {f("uncertainty_description", { count: ptptCount })}
      </p>
      <p style={globals.paragraph}>
        {f("uncertainty_subtitle")}
      </p>
      <div style={{ marginTop: 50 }}>
        <CommentList
          conversation={conversation}
          ptptCount={ptptCount}
          math={math}
          formatTid={formatTid}
          tidsToRender={uncertainty /* uncertainTids would be funnier */}
          comments={comments}
          voteColors={voteColors}
        />
      </div>
    </div>
  );
};

export default Uncertainty;
