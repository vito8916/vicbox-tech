---
layout: "../../../layouts/SnippetLayout.astro"
title: 'Responsive grid columns'
pubDate: "2022/11/04"
updatedDate: "2022/11/04"
---


```css
.parent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
```