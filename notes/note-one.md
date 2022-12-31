---
title: "What are getStaticProps and getStaticPaths?"
date: "February, 2022"
excerpt: "Overview of getStaticProps and getStaticPaths in NextJS"
cover_image: "/images/posts/img3.jpg"
tags: ["Kubernetes", "test2"]
category: "NextJS"
author: "Stephanie Sarah"
author_image: "https://randomuser.me/api/portraits/women/12.jpg"
---

# Deploying Kubernetes

# NEXTJS - getStaticProps, getStaticPaths

SSG stands for Static Site Generation. NextJS prerenders the page at build time using the props out of getStaticProps

When to use it:

- Data required to render the page is available at build time AHEAD of user's request
- Data comes from a headless CMS
- Data is not user specific and publicly cached
- Page must be prerendered for SEO and be very fast, both HTML and JSON files can be cached by a CDN for performance purposes

SSG does not have access to incoming request, query paremeters etc. it generates static HTML, if needed you need to use a Middleware too.

fetch() API can be used directly in getStaticProps

When a page with `getStaticProps` is pre-rendered at build time, in addition to the page HTML file, Next.js generates a JSON file holding the result of running `getStaticProps`.
