import React from 'react';
import TopicScatterplot from '../../topicScatterplot/TopicScatterplot.jsx';
import f from "../../../strings/strings";

const TopicOverviewScatterplot = ({ latestRun, statsData, math, voteColors, onTopicClick }) => {
  if (!statsData || !math) {
    return null;
  }

  // Use normalized consensus if available, fall back to raw
  const consensusData = math["group-consensus-normalized"] || math["group-aware-consensus"];
  if (!consensusData) {
    return null;
  }

  const data = (() => {
    const scatterData = [];
    let minConsensus = Infinity;
    let maxConsensus = -Infinity;

    Object.entries(latestRun.topics_by_layer || {}).forEach(([layerId, topics]) => {
      Object.entries(topics).forEach(([clusterId, topic]) => {
        const stats = statsData[topic.topic_key] || {};

        // Calculate average group consensus for this topic
        let groupConsensus = null;
        if (stats.comment_tids) {
          const consensusValues = stats.comment_tids
            .map(tid => consensusData[tid])
            .filter(val => val !== undefined);

          if (consensusValues.length > 0) {
            groupConsensus = consensusValues.reduce((sum, val) => sum + val, 0) / consensusValues.length;
          }
        }

        if (stats.comment_count > 0 && groupConsensus !== null) {
          const avgVotes = stats.vote_density || 0;

          // Track min/max consensus for color scaling
          minConsensus = Math.min(minConsensus, groupConsensus);
          maxConsensus = Math.max(maxConsensus, groupConsensus);

          scatterData.push({
            topic_name: topic.topic_name,
            consensus: groupConsensus,
            avg_votes_per_comment: avgVotes,
            comment_count: stats.comment_count || 0,
            layer: layerId,
            topic_key: topic.topic_key
          });
        }
      });
    });

    // Fix edge case where no data
    if (minConsensus === Infinity) {
      minConsensus = 0;
      maxConsensus = 1;
    }

    // Add consensus extents to each item for color calculation
    return scatterData.map(d => ({ ...d, minConsensus, maxConsensus }));
  })();

  return (
    <div style={{ marginTop: 30, marginBottom: 40, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
      <h3>{f("topic_overview_scatterplot_title")}</h3>
      <p style={{ marginBottom: 15, fontSize: "0.9em", color: "#666" }}>
        <strong>{f("topic_overview_scatterplot_y_axis_label")}</strong> {f("topic_overview_scatterplot_y_axis_desc")}<br />
        <strong>{f("topic_overview_scatterplot_x_axis_label")}</strong> {f("topic_overview_scatterplot_x_axis_desc")} | <strong>{f("topic_overview_scatterplot_bubble_label")}</strong> {f("topic_overview_scatterplot_bubble_desc")}<br />
        <strong>{f("topic_overview_scatterplot_colors_label")}</strong> <span style={{ color: voteColors?.agree || "#21a53a" }}>{f("topic_overview_scatterplot_green")}</span>{f("topic_overview_scatterplot_high_consensus")}
        <span style={{ color: voteColors?.disagree || "#e74c3c" }}> {f("topic_overview_scatterplot_red")}</span>{f("topic_overview_scatterplot_low_consensus")}
      </p>
      <TopicScatterplot
        data={data}
        config={{
          height: 600,
          bubbleOpacity: 0.8,
          xTransform: 'sqrt',
          yTransform: 'pow2',
          yAxisLabel: f("layer_distribution_modal_y_axis"),
          xAxisLabel: f("topic_overview_scatterplot_x_axis_desc"),
          useColorScale: true,
          colorScale: [[0, '#e74c3c'], [0.5, '#f1c40f'], [1, '#21a53a']]
        }}
        onClick={onTopicClick}
      />
    </div>
  );
};

export default TopicOverviewScatterplot;