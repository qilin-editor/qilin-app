import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "typography";
import githubTheme from "typography-theme-github";

class Typo extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  typography = new Typography(githubTheme);

  getStyles() {
    let styles = this.typography.toString();

    styles = styles.replace(/([^]*?)({[^]*?}|,)/g, ".typo $1 $2");
    styles = styles.replace(/(html *?)({[^]*?}|,)/g, "$2");
    styles = styles.replace(/(body *?)({[^]*?}|,)/g, "$2");
    styles += ".typo {padding: 1rem}";

    return styles;
  }

  render() {
    return [
      <style
        key="typo"
        dangerouslySetInnerHTML={{
          __html: this.getStyles()
        }}
      />,
      this.props.children
    ];
  }
}

export default Typo;
