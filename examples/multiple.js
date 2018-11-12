/* eslint no-console: 0 */

import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.less';
import ReactDOM from 'react-dom';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} title={`中文${i}`}>
      中文{i}
    </Option>
  );
}

class Test extends React.Component {
  state = {
    useAnim: 0,
    value: [],
    customInfo: ''
  }

  onChange = (value, options) => {
    console.log('onChange', value, options);
    let customInfo = 
      value.length === 0 
        ? '请选择' 
        : value.length === children.length ? '全部' : `${value.length}个`;
    this.setState({
      value,
      customInfo
    });
  }

  onSelect = (...args) => {
    console.log(args);
  }

  onDeselect = (...args) => {
    console.log(args);
  }

  useAnim = (e) => {
    this.setState({
      useAnim: e.target.checked,
    });
  }

  render() {
    const dropdownMenuStyle = {
      maxHeight: 200,
    };
    const suffixIcon = () => {
      return (
        <div>
          <ul>test</ul>
        </div>
      )
    }
    return (
      <div>
        <h2>multiple select（scroll the menu）</h2>

        <p>
          <label>
            anim
            <input checked={this.state.useAnim} type="checkbox" onChange={this.useAnim} />
          </label>
        </p>
        <div style={{ width: 300 }}>
          <Select
            value={this.state.value}
            animation={this.state.useAnim ? 'slide-up' : null}
            choiceTransitionName="rc-select-selection__choice-zoom"
            dropdownMenuStyle={dropdownMenuStyle}
            style={{ width: '300px' }}
            multiple
            allowClear
            optionFilterProp="children"
            optionLabelProp="children"
            onSelect={this.onSelect}
            onDeselect={this.onDeselect}
            placeholder="please select"
            onChange={this.onChange}
            onFocus={() => console.log('focus')}
            onBlur={(v) => console.log('blur', v)}
            tokenSeparators={[' ', ',']}
            renderExtraTopper={() => '自定义头部内容'}
            showChosenAmount
            customAmount={this.state.customInfo}
            customDropDown={() => (<div><h1>自定义下拉框内容</h1></div>)}
            suffixIcon={suffixIcon()}
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
