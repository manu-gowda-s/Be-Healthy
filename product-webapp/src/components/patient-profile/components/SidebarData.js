import React from 'react';

import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Appointments',
    path: 'appointment',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },

  {
    title: 'Profile',
    path: 'profile',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: 'support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
