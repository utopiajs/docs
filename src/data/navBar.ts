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
      text: "演练场",
      link: "http://sss",
    },
    {
      text: "生态系统",
      items: [
        {
          text: "官方库",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
        },
      ],
    },
  ],
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/utopiajs/",
    },
  ],
};

export default navBarData;