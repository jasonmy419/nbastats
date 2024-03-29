import React from 'react';
import {
    Row, Col, Slider, InputNumber
} from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value
    }

    onChange = (value) => {
        let cleanValue = Number.parseInt(value,10);
        cleanValue = isNaN(cleanValue) ? this.props.inputValue : cleanValue;
        this.setState({
            inputValue: cleanValue
        });
        this.props.onMinCountChange(cleanValue);
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={2}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}