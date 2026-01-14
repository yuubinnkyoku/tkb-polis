import React from "react";
import Heading from "./framework/heading.jsx";
import Footer from "./framework/Footer.jsx";
import f from "../strings/strings";
import RawDataExport from "./RawDataExport.jsx";
import TopicsVizReport from "./topicsVizReport/TopicsVizReport.jsx";
import TopicReport from "./topicReport/TopicReport.jsx";

export default ({ conversation, report_id, ptptCountTotal, math, computeVoteTotal, globals, comments, formatTid, voteColors }) => (
  <div style={{ margin: "0px 10px", maxWidth: "1200px", padding: "20px" }} data-testid="reports-overview">
    <Heading conversation={conversation} />
    <div
      style={{
        marginTop: 40,
      }}
    >

      <div style={{ marginBottom: 20 }}>
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
      </div>
      <section style={{ maxWidth: 1200, display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ flex: 1, minWidth: "200px", border: "1px solid #333", padding: "1rem", textAlign: "center" }}>
          <h3>{f("participants")}</h3>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: "2.5rem", margin: 0 }}>{ptptCountTotal}</p>
        </div>
        <div style={{ flex: 1, minWidth: "200px", border: "1px solid #333", padding: "1rem", textAlign: "center" }}>
          <h3>{f("comments")}</h3>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: "2.5rem", margin: 0 }}>{math["n-cmts"]}</p>
        </div>
        <div style={{ flex: 1, minWidth: "200px", border: "1px solid #333", padding: "1rem", textAlign: "center" }}>
          <h3>{f("votes")}</h3>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: "2.5rem", margin: 0 }}>{computeVoteTotal(math["user-vote-counts"])}</p>
        </div>
        <div style={{ flex: 1, minWidth: "200px", border: "1px solid #333", padding: "1rem", textAlign: "center" }}>
          <h3>{f("opinion_groups")}</h3>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: "2.5rem", margin: 0 }}>{math["group-clusters"].length}</p>
        </div>
      </section>
      <TopicsVizReport report_id={report_id} />
      <TopicReport report_id={report_id} math={math} comments={comments} conversation={conversation} ptptCount={ptptCountTotal} formatTid={formatTid} voteColors={voteColors} />
      <div style={{ marginTop: 20 }}>
        <RawDataExport conversation={conversation} report_id={report_id} />
      </div>
      <Footer />
    </div>
  </div>
);