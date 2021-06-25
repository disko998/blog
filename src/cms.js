import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { BlogPost } from "./components/elements/blog-post"
import GlobalStyles from "./styles/global"
import theme from "./src/styles/theme"

const BlogPostPreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BlogPost dangerouslySetInnerHTML={{ __html: widgetFor("body") }} />
    </ThemeProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)