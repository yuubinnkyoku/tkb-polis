// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as globals from "./globals";
import f from "../strings/strings";

const computeVoteTotal = (users) => {
  let voteTotal = 0;

  for (const count in users) {
    voteTotal += users[count];
  }

  return voteTotal;
};

const Number = ({ number, label }) => (
  <div style={{ marginLeft: "10px", marginRight: "10px" }}>
    <p style={globals.overviewNumber}>{number.toLocaleString()}</p>
    <p style={globals.overviewLabel}>{label}</p>
  </div>
);

const Overview = ({ conversation, ptptCount, ptptCountTotal, math, computedStats }) => {
  return (
    <div>
      <div>
        <p style={globals.primaryHeading}>{f("overview_title")}</p>
        <p style={globals.paragraph}>
          {f("overview_description")}
        </p>
        <p style={globals.paragraph}>
          <strong>{f("participants_label")}</strong> {f("participants_desc")}
        </p>
        <p style={globals.paragraph}>
          <strong>{f("statements_label")}</strong> {f("statements_desc")}
        </p>
        <p style={globals.paragraph}>
          <strong>{f("opinion_groups_label")}</strong> {f("opinion_groups_desc")}
        </p>

        <p style={globals.paragraph}>
          {conversation && conversation.ownername
            ? f("conversation_run_by") + conversation.ownername + ". "
            : null}
          {conversation && conversation.topic
            ? f("topic_was") + conversation.topic + "'. "
            : null}
        </p>
      </div>

      <div style={{ maxWidth: 1200, display: "flex", justifyContent: "space-between" }}>
        <Number number={ptptCountTotal} label={f("people_voted")} />
        <Number number={ptptCount} label={f("people_grouped")} />

        <Number number={computeVoteTotal(math["user-vote-counts"])} label={f("votes_cast")} />
        {/* Leaving this out for now until we get smarter conversationStats */}
        {/* <Number number={comments.length} label={"people submitted statements"} /> */}
        <Number number={math["n-cmts"]} label={f("statements_submitted")} />
        <Number
          number={computedStats.votesPerVoterAvg.toFixed(2)}
          label={f("votes_per_voter")}
        />
        <Number
          number={computedStats.commentsPerCommenterAvg.toFixed(2)}
          label={f("statements_per_author")}
        />
      </div>
    </div>
  );
};

export default Overview;
