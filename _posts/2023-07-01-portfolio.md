--- 
layout: post
title : 学术顾问
subtitle: "Academic board"
feature-img: "assets/img/header/triangular.jpeg"
tags: [Post]
---

{% for item in site.portfolio %}
#### [{{ item.title }}]({{ item.url | relative_url }})

![{{ item.title }}]({{ item.img | relative_url }})

{{ item.description }}

{% endfor %}