import React from "react";
import * as globals from "./globals";
import f from "../strings/strings";

const getCurrentTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}-${hours}${minutes}`;
};

const getDownloadFilename = (file, conversation) => {
  return `${getCurrentTimestamp()}-${conversation.conversation_id}-${file}.csv`;
};

const RawDataExport = ({ conversation, report_id }) => {
  const doShowDataLicenseTerms = ["pol.is", "preprod.pol.is", "localhost"].includes(
    window.location.hostname
  );

  return (
    <div
      style={{
        background: "#f1f1f1",
        padding: 10,
        borderRadius: 3,
        width: 960,
        maxWidth: "100%",
      }}
    >
      <p style={{ wordBreak: "break-all", fontFamily: "monospace", fontSize: globals.fontSizes.medium }}>
        <strong>{f("export_title")}</strong>
      </p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace", fontStyle: "italic" }}>
        {f("export_description")}
        <a href="https://compdemocracy.org/export/"> https://compdemocracy.org/export/ </a>
      </p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
        {f("export_summary")}
        <a
          download={getDownloadFilename("summary", conversation)}
          href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/summary.csv`}
          type="text/csv"
        >
          {getDownloadFilename("summary", conversation)}
        </a>
      </p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
        {f("export_comments")}
        <a
          download={getDownloadFilename("comments", conversation)}
          href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/comments.csv`}
          type="text/csv"
        >
          {getDownloadFilename("comments", conversation)}
        </a>
        {f("export_may_take_minutes")}
      </p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
        {f("export_votes_history")}
        <a
          download={getDownloadFilename("votes", conversation)}
          href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/votes.csv`}
          type="text/csv"
        >
          {getDownloadFilename("votes", conversation)}
        </a>
        {f("export_as_event_log")}
      </p>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
        {f("export_votes_matrix")}
        <a
          download={getDownloadFilename("participant-votes", conversation)}
          href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/participant-votes.csv`}
          type="text/csv"
        >
          {getDownloadFilename("participant-votes", conversation)}
        </a>
        {f("export_as_matrix")}
      </p>
      {conversation.importance_enabled && (
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {f("export_importance_matrix")}
          <a
            download={getDownloadFilename("participant-importance", conversation)}
            href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/participant-importance.csv`}
            type="text/csv"
          >
            {getDownloadFilename("participant-importance", conversation)}
          </a>
          {f("export_as_matrix")}
        </p>
      )}
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
        {f("export_comment_groups")}
        <a
          download={getDownloadFilename("comment-groups", conversation)}
          href={`//${window.location.hostname}/api/v3/reportExport/${report_id}/comment-groups.csv`}
          type="text/csv"
        >
          {getDownloadFilename("comment-groups", conversation)}
        </a>
      </p>

      <div style={{ marginTop: "3em" }}>
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          <strong>{f("export_public_api")}</strong>
        </p>
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/summary.csv`}
        </p>
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/comments.csv`}
        </p>
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/votes.csv`}
        </p>
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/participant-votes.csv`}
        </p>
        {conversation.importance_enabled && (
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
            {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/participant-importance.csv`}
          </p>
        )}
        <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
          {`$ curl ${window.location.protocol}//${window.location.hostname}/api/v3/reportExport/${report_id}/comment-groups.csv`}
        </p>
      </div>

      {doShowDataLicenseTerms && (
        <div style={{ marginTop: "3em" }}>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
            <strong>{f("export_attribution_title")}</strong>
          </p>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
            {f("export_attribution_license")}
            https://creativecommons.org/licenses/by/4.0/
          </p>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>{f("export_statement_begin")}</p>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
            {f("export_attribution_description") + window.location.href}
          </p>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>{f("export_statement_end")}</p>
          <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>
            {f("export_attribution_best_practices")}
            https://wiki.creativecommons.org/wiki/Best_practices_for_attribution#Title.2C_Author.2C_Source.2C_License
          </p>
        </div>
      )}
    </div>
  );
};

export default RawDataExport;
