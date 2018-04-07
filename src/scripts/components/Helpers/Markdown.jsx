import React, {Component} from "react";
import PropTypes from "prop-types";
import className from "classnames";
import {getMarkdown} from "../../utils/MarkdownUtils";

class Markdown extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    onClick: () => null,
  }

  static renderer = getMarkdown({
    html: true,
    linkify: true,
    typography: true,
  })

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={className(this.props.className)}
        dangerouslySetInnerHTML={{
          __html: Markdown.renderer.render(this.props.content),
        }}
      />
    );
  }
}

export default Markdown;
