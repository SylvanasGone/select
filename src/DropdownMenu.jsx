import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import toArray from 'rc-util/lib/Children/toArray';
import Menu from 'rc-menu';
import scrollIntoView from 'dom-scroll-into-view';
import raf from 'raf';
import { getSelectKeys, preventDefaultEvent, saveRef } from './util';

export default class DropdownMenu extends React.Component {
  static displayName = 'DropdownMenu';
  static propTypes = {
    ariaId: PropTypes.string,
    defaultActiveFirstOption: PropTypes.bool,
    value: PropTypes.any,
    dropdownMenuStyle: PropTypes.object,
    multiple: PropTypes.bool,
    onPopupFocus: PropTypes.func,
    onPopupScroll: PropTypes.func,
    onMenuDeSelect: PropTypes.func,
    onMenuSelect: PropTypes.func,
    prefixCls: PropTypes.string,
    menuItems: PropTypes.any,
    inputValue: PropTypes.string,
    visible: PropTypes.bool,
    firstActiveValue: PropTypes.string,
    menuItemSelectedIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  };

  constructor(props) {
    super(props);
    this.lastInputValue = props.inputValue;
    this.saveMenuRef = saveRef(this, 'menuRef');
  }

  componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return (
      (this.props.visible && !nextProps.visible) ||
      nextProps.visible ||
      nextProps.inputValue !== this.props.inputValue
    );
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  }

  componentWillUnmount() {
    if (this.rafInstance && this.rafInstance.cancel) {
      this.rafInstance.cancel();
    }
  }

  scrollActiveItemToView = () => {
    // scroll into view
    const itemComponent = findDOMNode(this.firstActiveItem);
    const { value, visible, firstActiveValue } = this.props;

    if (!itemComponent || !visible) {
      return;
    }
    const scrollIntoViewOpts = {
      onlyScrollIfNeeded: true,
    };
    if ((!value || value.length === 0) && firstActiveValue) {
      scrollIntoViewOpts.alignWithTop = true;
    }

    // Delay to scroll since current frame item position is not ready when pre view is by filter
    // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462
    this.rafInstance = raf(() => {
      scrollIntoView(itemComponent, findDOMNode(this.menuRef), scrollIntoViewOpts);
    });
  };

  renderTopper = (...args) => {
    const { renderExtraTopper } = this.props;
    return renderExtraTopper ? (
      <div style={{ paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px' }}>
        {renderExtraTopper(...args)}
      </div>
    ) : null;
  }

  renderCustomDropDown = (...args) => {
    const { customDropDown } = this.props;
    return customDropDown ? (
      <div style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px' }}>
        {customDropDown(...args)}
      </div>
    ) : null
  }

  renderMenu() {
    const props = this.props;
    const {
      menuItems,
      menuItemSelectedIcon,
      defaultActiveFirstOption,
      value,
      prefixCls,
      multiple,
      onMenuSelect,
      inputValue,
      firstActiveValue,
      backfillValue,
    } = props;
    if (menuItems && menuItems.length) {
      const menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      const selectedKeys = getSelectKeys(menuItems, value);
      const activeKeyProps = {};

      let clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        } else if (!props.visible) {
          activeKeyProps.activeKey = null;
        }
        let foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        const clone = item => {
          if (
            (!foundFirst && selectedKeys.indexOf(item.key) !== -1) ||
            (!foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1)
          ) {
            foundFirst = true;
            return cloneElement(item, {
              ref: ref => {
                this.firstActiveItem = ref;
              },
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(item => {
          if (item.type.isMenuItemGroup) {
            const children = toArray(item.props.children).map(clone);
            return cloneElement(item, {}, children);
          }
          return clone(item);
        });
      } else {
        // Clear firstActiveItem when dropdown menu items was empty
        // Avoid `Unable to find node on an unmounted component`
        // https://github.com/ant-design/ant-design/issues/10774
        this.firstActiveItem = null;
      }

      // clear activeKey when inputValue change
      const lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }
      return (
        <Menu
          ref={this.saveMenuRef}
          style={this.props.dropdownMenuStyle}
          defaultActiveFirst={defaultActiveFirstOption}
          role="listbox"
          itemIcon={multiple ? menuItemSelectedIcon : null}
          {...activeKeyProps}
          multiple={multiple}
          {...menuProps}
          selectedKeys={selectedKeys}
          prefixCls={`${prefixCls}-menu`}
        >
          {clonedMenuItems}
        </Menu>
      );
    }
    return null;
  }

  render() {
    const renderTopper = this.renderTopper();
    const renderMenu = this.renderMenu();
    const renderCustomDropDown = this.renderCustomDropDown();
    const { onPopupFocus, onPopupScroll, customDropDown } = this.props;

    return renderMenu ? (
      <div
        style={{
          overflow: 'auto',
          transform: 'translateZ(0)'
        }}
        onFocus={onPopupFocus}
        id={this.props.ariaId}
        onMouseDown={preventDefaultEvent}
        onScroll={onPopupScroll}
      >
        {renderTopper}
        {customDropDown ? renderCustomDropDown : renderMenu}
      </div>
    ) : null;
  }
}
