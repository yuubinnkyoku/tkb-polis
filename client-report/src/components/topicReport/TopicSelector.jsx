import React from 'react';
import f from "../../strings/strings";

const TopicSelector = ({ sections, selectedTopic, onTopicChange, loading }) => {
  return (
    <div className="topic-selector">
      <select
        value={selectedTopic}
        onChange={onTopicChange}
        disabled={loading}
      >
        <option value="">{f("comments_report_select_section")}</option>

        {/* Global sections */}
        {sections.filter(topic => topic.isGlobal).length > 0 && (
          <optgroup label={f("topic_selector_global_analysis")}>
            {sections.filter(topic => topic.isGlobal).map(topic => (
              <option key={topic.key} value={topic.key}>
                {topic.name}
              </option>
            ))}
          </optgroup>
        )}

        {/* Layer topics grouped by layer */}
        {Object.entries(
          sections
            .filter(topic => !topic.isGlobal)
            .reduce((groups, topic) => {
              const layer = topic.displayKey ? topic.displayKey.split('_')[0] : '0';
              if (!groups[layer]) groups[layer] = [];
              groups[layer].push(topic);
              return groups;
            }, {})
        ).map(([layer, layerTopics]) => (
          <optgroup key={layer} label={f("topic_selector_layer_topics", { layer })}>
            {layerTopics.map(topic => (
              <option key={topic.key} value={topic.key}>
                {topic.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default TopicSelector;