
export interface MenuItem {
  title: string;
  children?: MenuData;
}

export type MenuData = MenuItem[];

export const menuData: MenuData = [{
  title: 'aaaa',
  children: [{
    title: 'bbbb'
  }]
}];
