import React from "react"
import CMS from "netlify-cms-app"
import { ThemeProvider } from "styled-components"

import { BlogPost } from "./components/elements/blog-post"
import { GlobalStyles, theme } from "./styles"

const BlogPostPreview = ({ widgetFor }) => {
  console.log(widgetFor("body"))
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BlogPost dangerouslySetInnerHTML={{ __html: widgetFor("body") }}>
        <h1>Title</h1>
      </BlogPost>
    </ThemeProvider>
  )
}
CMS.registerPreviewTemplate("blog", BlogPostPreview)
