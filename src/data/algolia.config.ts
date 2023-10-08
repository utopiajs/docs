const algoliaConfig = {
  placeholder: "搜索",
  container: "#docsearch",
  indexName: 'docs',
  appId: 'VZW7JYQVIQ',
  apiKey: 'b16c1dc0697e13c7a3387f43a719c2db',
  translations: {
    button: {
      buttonText: "搜索",
      buttonAriaLabel: "搜索",
    },
    modal: {
      searchBox: {
        resetButtonTitle: "清除查询条件",
        resetButtonAriaLabel: "清除查询条件",
        cancelButtonText: "取消",
        cancelButtonAriaLabel: "取消",
      },
      startScreen: {
        recentSearchesTitle: "搜索历史",
        noRecentSearchesText: "没有搜索历史",
        saveRecentSearchButtonTitle: "保存至搜索历史",
        removeRecentSearchButtonTitle: "从搜索历史中移除",
        favoriteSearchesTitle: "收藏",
        removeFavoriteSearchButtonTitle: "从收藏中移除",
      },
      errorScreen: {
        titleText: "无法获取结果",
        helpText: "你可能需要检查你的网络连接",
      },
      footer: {
        selectText: "选择",
        navigateText: "切换",
        closeText: "关闭",
        searchByText: "搜索供应商",
      },
      noResultsScreen: {
        noResultsText: "无法找到相关结果",
        suggestedQueryText: "你可以尝试查询",
        reportMissingResultsText: "你认为该查询应该有结果？",
        reportMissingResultsLinkText: "点击反馈",
      },
    },
  },
};

export default algoliaConfig;