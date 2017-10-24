import React, {Component} from "react";
import PropTypes from "prop-types";
import className from "classnames";
import {getMarkdown} from "../../utils/MarkdownUtils";

class Markdown extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    className: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    onClick: PropTypes.func,
    isLazy: PropTypes.bool,
  }

  static defaultProps = {
    onClick: () => null,
    isLazy: false,
  }

  static renderer = getMarkdown({
    html: true,
    linkify: true,
    typography: true,
  })

  // For lazy reload:
  timeout = 0

  shouldComponentUpdate(nextProps) {
    if (nextProps.isLazy) {
      if (this.timeout > +new Date()) {
        return false;
      }

      this.timeout = +new Date() + 500;
    }

    return true;
  }

  render() {
    return (
      <div
        role="presentation"
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
