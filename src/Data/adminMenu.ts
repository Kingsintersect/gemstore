export interface menuSection {
    name: string;
    href: string;
    icon: string;
}

export const adminMenu = [
    {
      name: 'DashBoard',
      href: "admin/dashboard",
      icon: "home",
    },
    {
      name: 'Orders',
      href: "admin/orders",
      icon: "home",
    },
    {
      name: 'New Product',
      href: "admin/create/product",
      icon: "home",
    },
    {
      name: 'Customers',
      href: "admin/customers",
      icon: "person",
    },
  ];