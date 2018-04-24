import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import QilinManager from "qilin-manager";
import Panel from "qilin-components/panel";
import Section from "qilin-components/section";
import List, { ListItem, ListText, ListSeparator } from "qilin-components/list";
import Icon from "qilin-components/icon";

import CoreSection from "./sections/Core";
import EditorSection from "./sections/Editor";
import PluginsSection from "./sections/Plugins";
import ThemesSection from "./sections/Themes";
import InstallSection from "./sections/Install";

class SettingsView extends Component {
  qpm = new QilinManager();

  render() {
    return (
      <Section vertical>
        <Panel width="220px" border="0 1px 0 0">
          <List>
            <ListItem component={<Link />} to="/settings/core">
              <Icon icon="tune" size="28" />
              <ListText primary="Core" secondary="Qilin settings" />
            </ListItem>

            <ListItem component={<Link />} to="/settings/editor">
              <Icon icon="code" size="28" />
              <ListText primary="Editor" secondary="Editor settings" />
            </ListItem>

            <ListSeparator />

            <ListItem component={<Link />} to="/settings/plugins">
              <Icon icon="extension" size="28" />
              <ListText primary="Plugins" secondary="Plugin manager" />
            </ListItem>

            <ListItem component={<Link />} to="/settings/themes">
              <Icon icon="palette" size="28" />
              <ListText primary="Themes" secondary="Theme manager" />
            </ListItem>

            <ListItem component={<Link />} to="/settings/install">
              <Icon icon="file_download" size="28" />
              <ListText primary="Install" secondary="Install new packages" />
            </ListItem>

            <ListSeparator />
          </List>
        </Panel>

        <Route path="/settings/core" component={CoreSection} />
        <Route path="/settings/editor" component={EditorSection} />
        <Route path="/settings/plugins" component={PluginsSection} />
        <Route path="/settings/themes" component={ThemesSection} />
        <Route path="/settings/install" component={InstallSection} />
      </Section>
    );
  }
}

export default SettingsView;
