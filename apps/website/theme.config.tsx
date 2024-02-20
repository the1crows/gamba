import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
// import { ExtraContent } from './components/extra-content'

const config: DocsThemeConfig = {
  logo: (
    <span>
      <svg height="2.5em" viewBox="0 0 610 603" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M104.743 426.581C104.743 426.581 157.839 366.774 241.012 367.571C241.012 367.571 236.757 337.272 246.768 313.465C246.768 313.465 151.712 288.442 147.384 177.684C147.384 177.684 38.9024 271.159 104.743 426.581Z" fill="url(#paint0_linear_629_335)" />
        <path d="M119.381 449.556C163.582 521.494 246.631 544.217 246.631 544.217L246.796 542.324C237.369 488.899 284.152 431.132 284.152 431.132C264.34 418.546 251.281 394.151 251.281 394.151C250.104 394.195 249.157 394.112 248.21 394.029C170.5 394.222 119.381 449.556 119.381 449.556Z" fill="url(#paint1_linear_629_335)" />
        <path d="M275.105 550.488C345.061 563.728 394.621 534.465 394.621 534.465C356.635 502.213 354.694 450.486 354.694 450.486C324.035 451.345 308.912 443.687 308.912 443.687C263.094 487.716 275.105 550.488 275.105 550.488Z" fill="url(#paint2_linear_629_335)" />
        <path d="M408.347 441.236L381.756 449.188C381.756 449.188 381.695 488.58 423.013 521.236C423.013 521.236 453.264 500.764 455.025 497.396C455.025 497.396 557.571 470.684 565.661 340.066C565.661 340.066 543.285 340.902 512.418 357.505L524.69 300.911C524.69 300.911 418.495 334.128 408.347 441.236Z" fill="url(#paint3_linear_629_335)" />
        <path d="M375.77 167.059C375.77 178.993 366.096 188.668 354.162 188.668C342.227 188.668 332.553 178.993 332.553 167.059C332.553 155.125 342.227 145.45 354.162 145.45C366.096 145.45 375.77 155.125 375.77 167.059Z" fill="url(#paint4_linear_629_335)" />
        <path d="M409.455 47.6428C392.67 59.238 374.35 70.7726 355.017 80.4582C335.685 90.1438 315.697 98.0849 295.957 103.186L253.197 113.984C243.275 116.713 233.1 118.98 223.282 121.352C213.002 123.977 190.511 131.186 174.221 149.721C174.221 149.721 158.955 227.184 227.662 276.388C227.662 276.388 254.111 296.156 302.412 291.637C324.386 289.519 345.365 282.838 364.549 272.332C380.139 263.494 402.157 249.934 416.119 235.379C417.357 233.799 418.722 232.451 420.087 231.103C421.116 230.239 422.481 228.89 423.95 227.184L511.561 135.342C506.206 127.758 495.646 126.03 488.062 131.385L440.146 165.136C445.286 132.276 421.303 52.271 421.303 52.271C419.845 47.962 416.037 47.043 413.093 47.153C410.968 47.1145 409.455 47.6428 409.455 47.6428ZM311.9 166.864C311.735 143.519 330.842 124.643 354.186 124.478C377.426 124.671 396.533 143.651 396.341 166.891C396.506 190.236 377.525 209.343 354.054 209.277C330.941 209.315 311.834 190.335 311.9 166.864Z" fill="url(#paint5_linear_629_335)" />
        <path d="M375.77 167.059C375.77 178.993 366.096 188.668 354.162 188.668C342.227 188.668 332.553 178.993 332.553 167.059C332.553 155.125 342.227 145.45 354.162 145.45C366.096 145.45 375.77 155.125 375.77 167.059Z" fill="url(#paint6_linear_629_335)" />
        <path d="M375.77 167.059C375.77 178.993 366.096 188.668 354.162 188.668C342.227 188.668 332.553 178.993 332.553 167.059C332.553 155.125 342.227 145.45 354.162 145.45C366.096 145.45 375.77 155.125 375.77 167.059Z" fill="url(#paint7_linear_629_335)" />
        <defs>
          <linearGradient id="paint0_linear_629_335" x1="264.451" y1="532.053" x2="137.877" y2="300.92" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint1_linear_629_335" x1="254.864" y1="537.305" x2="128.291" y2="306.171" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint2_linear_629_335" x1="316.609" y1="503.492" x2="190.036" y2="272.358" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint3_linear_629_335" x1="479.903" y1="414.069" x2="353.33" y2="182.935" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint4_linear_629_335" x1="487.272" y1="410.034" x2="360.698" y2="178.9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint5_linear_629_335" x1="476.903" y1="415.711" x2="350.33" y2="184.577" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint6_linear_629_335" x1="487.272" y1="410.034" x2="360.698" y2="178.9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
          <linearGradient id="paint7_linear_629_335" x1="487.272" y1="410.034" x2="360.698" y2="178.9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF1653" />
            <stop offset="1" stop-color="#FF7A53" />
          </linearGradient>
        </defs>
      </svg>



    </span>
  ),
  project: { link: 'http://github.com/gamba-labs' },
  chat: { link: 'https://discord.gg/xjBsW3e8fK' },
  docsRepositoryBase: 'http://github.com/gamba-labs/gamba',
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  themeSwitch: { component: () => null },
  footer: { text: 'Gamba ©©©©©©©©' },
  head: () => {
    const { asPath, pathname } = useRouter()
    const { frontMatter } = useConfig()
    const ogConfig = {
      title: 'Gamba',
      description: 'Build your own web3 games with Gamba, a decentralized betting platform on Solana',
      author: { twitter: 'gambalabs' },
      favicon: '/favicon.svg',
    }
    const favicon = String(ogConfig.favicon)
    const title = String(frontMatter.title || ogConfig.title)
    const description = String(frontMatter.description || ogConfig.description)
    const canonical = new URL(asPath, 'https://gamba.so').toString()
    const image = 'https://www.gamba.so/og.png'

    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={image} />
        <meta property="og:image" content={image} />
        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </>
    )
  },
  sidebar: { toggleButton: true },
  useNextSeoProps() {
    const { asPath } = useRouter()

    if (['/', '/docs'].includes(asPath)) {
      return { titleTemplate: 'Gamba' }
    }

    return { titleTemplate: '%s | Gamba' }
  },
  primaryHue: {
    light: 270,
    dark: 204,
  },
}

export default config