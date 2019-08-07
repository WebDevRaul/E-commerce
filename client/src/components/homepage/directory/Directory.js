import React, { Component } from 'react';

// Components
import MenuItem from '../menu_item/Menu_item';

// Scss
import './directory.scss';

export default class Directory extends Component {
  state = {
    sections:[
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: '',
        linkUrl: 'hats',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: '',
        linkUrl: 'jackets',
        id: 2
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: '',
        linkUrl: 'sneakers',
        id: 3
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        linkUrl: 'womens',
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        linkUrl: 'mens',
        id: 5
      }
    ]
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...rest }) => (
            <MenuItem key={id} {...rest} />
          ))
        }
      </div>
    )
  }
}
