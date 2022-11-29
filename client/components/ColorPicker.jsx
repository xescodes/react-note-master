import React from 'react';
import cx from 'classnames';

import './ColorPicker.less';

const COLORS = ['#E57373', '#F06292', '#7986CB', '#64B5F6', '#4FC3F7', '#81C784', '#DCE775', '#FFF176', '#FFD54F', '#FFB74D'];

const ColorPicker = React.createClass({
    render() {
        return (
            <div className='ColorPicker'>
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
});

export default ColorPicker;