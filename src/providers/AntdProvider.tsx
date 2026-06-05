import { App, ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { ReactNode } from 'react'

export function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#d86f8a',
          colorInfo: '#d86f8a',
          colorSuccess: '#4f9a72',
          colorWarning: '#d99a3a',
          colorError: '#c95f67',
          colorText: '#34291f',
          colorTextSecondary: '#65564a',
          colorTextTertiary: '#8f7f71',
          colorBgLayout: '#fff8ef',
          colorBgContainer: '#fffdf8',
          colorBgElevated: '#fffaf3',
          colorFillSecondary: '#fff1e2',
          colorBorder: '#eddcca',
          colorBorderSecondary: '#f1e4d7',
          borderRadius: 12,
          fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
          fontSize: 14,
        },
        components: {
          Button: {
            controlHeight: 38,
            paddingContentHorizontal: 18,
            borderRadius: 10,
          },
          Card: {
            headerFontSize: 15,
            colorBgContainer: '#fffdf8',
          },
          Tabs: {
            titleFontSize: 15,
            horizontalMargin: '0 0 12px 0',
          },
          Segmented: {
            itemSelectedBg: '#fffdf8',
            itemSelectedColor: '#d86f8a',
          },
          Upload: {
            paddingLG: 24,
          },
        },
      }}
    >
      {/* message 轻提示：位置见 index.css（右下角） */}
      <App message={{ duration: 2.4, maxCount: 3 }}>{children}</App>
    </ConfigProvider>
  )
}
