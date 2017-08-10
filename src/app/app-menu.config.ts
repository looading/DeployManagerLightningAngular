
export interface MenuItem {
  title: string;
  link?: string;
  children?: MenuData;
}

export type MenuData = MenuItem[];

export const menuData: MenuData = [{
  title: '项目列表',
  link: '/pages/list',
}, {
  title: '审批',
  link: '/pages/approval',
}, {
  title: '用户',
  children: [{
    title: '用户信息',
    link: '/pages/user'
  }, {
    title: '编辑用户',
    link: '/pages/user/create'
  }, {
    title: 'userInfo',
    link: '/pages/user/info'
  }]
}];
