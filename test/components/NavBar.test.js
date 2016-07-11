import React from 'react'
import NavBar from '../../universal/components/NavBar/index.js';

describe.skip('(Component) NavBar', () => {
  const data = {
    userNav: 'admin',
    brandNav: 'Monitor Reservalia',
    linkNav: [
      {
        name: 'Dashboard',
        route: '/'
      },
      {
        name: 'Availability',
        route: '/availability'
      },
      {
        name: 'Charts',
        route: '/charts'
      }
    ]
  };

  it('should exist', () => {

  })
});
