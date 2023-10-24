export interface menuSection {
    name: string;
    href: string;
    icon: string;
}

export const adminMenu = [
    {
      name: 'DashBoard',
      href: "dashboard",
      icon: "heroChartBarSquare",
    },
    {
      name: 'Orders',
      href: "orders",
      icon: "heroCircleStack",
    },
    {
      name: 'All Products',
      href: "products",
      icon: "heroListBullet",
    },
    {
      name: 'New Product',
      href: "product/create",
      icon: "heroDocumentPlus",
    },
    {
      name: 'New Messages',
      href: "new/messages",
      icon: "heroEnvelope",
    },
    {
      name: 'Customers',
      href: "customers",
      icon: "heroUserGroup",
    },
  ];

export const adminGeneralMenu = [
    {
      name: 'Settings',
      href: "settings",
      icon: "heroCog6Tooth",
    },
    {
      name: 'Help',
      href: "help",
      icon: "heroQuestionMarkCircle",
    },
  ];