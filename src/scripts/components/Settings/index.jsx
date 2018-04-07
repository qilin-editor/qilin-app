import React, {Component} from "react";
import QilinManager from "qilin-manager";
import Panel from "qilin-components/panel";
import Section from "qilin-components/section";

class SettingsView extends Component {
  qpm = new QilinManager();

  render() {
    return (
      <Section vertical>
        <Panel width="200px" border="0 1px 0 0">
          Something 1
        </Panel>

        <Panel width="150px" border="0 1px 0 0">
          Something 2
        </Panel>

        <Section horizontal>
          Content
        </Section>
      </Section>
    );
  }
}

export default SettingsView;
