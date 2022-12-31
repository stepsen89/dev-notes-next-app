---
title: "React LifeCycles"
date: "May 5, 2021"
excerpt: "Django is a very powerful, high level Python framework for building web applications"
cover_image: "/images/posts/img3.jpg"
tags: ["Python"]
category: "Python"
author: "Sam Smith"
author_image: "https://randomuser.me/api/portraits/men/12.jpg"
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->

# React LifeCycle Methods

## What are LifeCycle Methods?

A lifecycle in React is the timeline - e.g. a component is mounted, removed, updated

Very distinct and discreet times

**constructor** method will be called // good place to do one time setup and state initialisation and e.g. geolocation setup
**render** has to be defined (technically lifecycle) // avoid doing anything besides rendering JSX
**componentDidMount** // good place to do data loading
**componentDidUpdate** // good place to do more data loading when state/props change
**componentWillUnmount** // good place to do cleanup (especially non react stuff)

## ComponentDidMount

When component appears on the browser when component is rendered, will be automatically called one time, when the component first shows up
Also good to do things only once - e.g. get geolocation because you only need it once

BEST PRACTICE: Do not do data loading inside the constructor - it is recommended to do it inside this method
WHY: data loading code should be inside component did mount and not being spread between constructor and this method

## ComponentDidUpdate

Gets called every single time a component gets updated, new set of props, etc.
Also good for data loading which needs to be done every single time when something changes, e.g. network requests with new data, or enters some text in input

## ComponentWillUnmount

when component will be removed from the screen

## Other LifeCycle Methods

very rarely used:

shouldComponentUpdate
getDerivedStateFromProps
getSnapshotBeforeUpdate
