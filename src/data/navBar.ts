const navBarData = {
  navList: [
    {
      text: "介绍",
      link: "/introduction/index",
      activeMatch: "^/introduction",
    },
    {
      text: "指南",
      link: "/guide/list",
      activeMatch: "^/guide/",
    },
    {
      text: '服务',
      items: [
        {
          text: '定制服务',
          link: '/'
        },
        {
          text: '赞助',
          link: '/'
        }
      ]
    }
  ],
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/utopiajs/",
    },
  ],
};

export default navBarData;