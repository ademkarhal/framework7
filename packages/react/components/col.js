import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7Col extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onClick(e) {
    this.dispatchEvent('click', e);
  }

  render() {
    const self = this;
    const props = self.props;
    const {
      className,
      id,
      style,
      tag,
      width,
      tabletWidth,
      desktopWidth
    } = props;
    const ColTag = tag;
    const classes = Utils.classNames(className, {
      col: width === 'auto',
      [`col-${width}`]: width !== 'auto',
      [`tablet-${tabletWidth}`]: tabletWidth,
      [`desktop-${desktopWidth}`]: desktopWidth
    }, Mixins.colorClasses(props));
    return React.createElement(ColTag, {
      id: id,
      style: style,
      className: classes,
      onClick: self.onClick.bind(self)
    }, this.slots['default']);
  }

  get slots() {
    return __reactComponentSlots(this.props);
  }

  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }

}

__reactComponentSetProps(F7Col, Object.assign({
  id: [String, Number],
  tag: {
    type: String,
    default: 'div'
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  tabletWidth: {
    type: [Number, String]
  },
  desktopWidth: {
    type: [Number, String]
  }
}, Mixins.colorProps));

export default F7Col;