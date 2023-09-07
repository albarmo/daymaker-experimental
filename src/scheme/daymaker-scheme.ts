// single page schema
export const appSchema = {
  app: {
    appId: 'uuid',
    appType: 'Store',
    description: 'app description',
  },
  user: { id: '', email: '' },
  pages: [
    {
      pageName: 'Page 1',
      pageId: 'short-uuid',
      pageContext: '',
      screenComponents: [
        {
          compId: 'uuid',
          compType: 'header',
          description: 'flat navbar',
          properties: {
            //dynamic
            colorScheme: '',
            logo: '',
            title: '',
            submenu: [{ id: '', target: '' }],
            action: [{ id: '', target: '' }],
          },
        },
      ],
    },
  ],
}

// multiple page scheme
export const appSchemaMultiple = {
  app: {
    appId: 'uuid',
    appType: 'Store',
    description: 'app description',
  },
  user: { id: '', email: '' },
  pages: [
    {
      pageName: 'Home',
      pageId: 'short-uuid',
      pageContext: '',
      screenComponents: [
        {
          compId: 'uuid',
          compType: 'header',
          description: 'flat navbar',
          properties: {
            //dynamic
            colorScheme: '',
            logo: '',
            title: '',
            submenu: [{ id: '', target: '' }],
            action: [{ id: '', target: '' }],
          },
        },
        {
          compId: 'uuid',
          compType: 'article',
          description: 'article list',
          properties: {
            //dynamic
            colorScheme: '',
            logo: '',
            title: '',
            submenu: [{ id: '', target: '' }],
            action: [{ id: '', target: '' }],
          },
        },
      ],
    },
    {
      pageName: 'About',
      pageId: 'short-uuid',
      pageContext: '',
      screenComponents: [
        {
          compId: 'uuid',
          compType: 'header',
          description: 'flat navbar',
          properties: {
            //dynamic
            colorScheme: '',
            logo: '',
            title: '',
            submenu: [{ id: '', target: '' }],
            action: [{ id: '', target: '' }],
          },
        },
      ],
    },
  ],
}
