import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: "道德之地",
    subtitle: "Daodezhidi", // 修改这里替换 Typography，如果不想显示英文，可以直接写成空字符串 ""
    author: "Xavier"             // 添加这行，底部的版权信息就会变成 Xavier
  },
  seo: {
    twitter: "@xavier"
  },
}
