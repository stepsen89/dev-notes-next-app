---
title: "React Hooks Pt 1"
date: "February 7, 2021"
excerpt: "In this article a overview of the topic Accessibility is given"
cover_image: "/images/posts/img4.jpg"
tags: ["React"]
category: "React"
author: "Steph"
author_image: "https://randomuser.me/api/portraits/women/12.jpg"
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->

# React Hooks Explained Pt 1

## What are Hooks?

Only usable in function component
Every time when the component renders the hooks are executed in the same order - must be the same exact order, so you can't not put it inside of functions, conditional statement etc.

## useState Hook

state always returns two values
first is always the current state
second one is the function which allows you to update the state

const [count, setCount] = useState(4) -> value of count when component is rendered

setCount can be called inside e.g decrementCount or incrementCount = and it will update the state
if you want to use the previous state you need to set it to

setCount(prevCount => prevCount - 1) // to access the previous value of state

NOTE: useState with a function will render only the first time the component renders
useful for complex methods

```javascript
const [count, setCount] = useState(() => {
	console.log("run");
	return 4;
	}
```
