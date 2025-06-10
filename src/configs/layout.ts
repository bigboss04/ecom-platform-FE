export const VerticalItems = [
  {
    title: 'System',
    icon: 'mage:message',
    children: [
      {
        title: 'Children1',
        icon: 'mage:message',
        path: '/product ',
        children: [{ title: 'Children111', icon: 'mage:message', path: '/product-type' }]
      }
    ]
  },
  {
    title: 'User',
    icon: 'mage:message',
    path: '/user',
    children: [
      {
        title: 'Children2',
        icon: 'mage:message',
        path: '',
        children: [{ title: 'Children21', icon: 'mage:message', path: '' }]
      }
    ]
  }
]
