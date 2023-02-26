export default {
    themeConfig: {
        siteTitle: 'JIAnnLee22\'s 学习笔记',
        description: 'a android note',
        sidebar: [
            {
                text: "Android",
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "安卓基础",
                        link: "articals/android/common"
                    },
                    {
                        text: "安卓高级",
                        link: "articals/android/advance"
                    },
                    {
                        text: "安卓自定义view",
                        link: "articals/android/customview"
                    }
                ]
            },
            {
                text: "Java",
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "Java基础",
                        link: "articals/java/common"
                    }
                ]
            }
        ],
    }
}