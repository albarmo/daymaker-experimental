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
