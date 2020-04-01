import React, { Component } from 'react';
import sections from '../../data/mockdata';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
