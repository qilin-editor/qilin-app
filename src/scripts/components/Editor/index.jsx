import React, {PureComponent} from "react";
import SplitPane from "react-split-pane";
import Panel from "qilin-components/panel";
import Section from "qilin-components/section";
import ContentPreview from "./ContentPreview";
import ContentEditable from "./ContentEditable";

class Editor extends PureComponent {
  render() {
    return (
      <Section horizontal>
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={-300}
          defaultSize="50%"
        >
          <Panel width="100%" height="100%">
            <ContentEditable />
          </Panel>

          <Panel width="100%" height="100%">
            <ContentPreview />
          </Panel>
        </SplitPane>
      </Section>
    );
  }
}

export default Editor;
