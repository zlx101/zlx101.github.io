---
layout: page
title: Tags
permalink: /tags/
---

<div class="tags-page">
  {% assign tags = site.tags | sort %}
  <div class="tags-cloud">
    {% for tag in tags %}
      <span class="tag-item">
        <a href="#{{ tag[0] | slugize }}" class="tag-link">
          {{ tag[0] }} <span>({{ tag[1] | size }})</span>
        </a>
      </span>
    {% endfor %}
  </div>

  <div class="tags-list">
    {% for tag in tags %}
      <div class="tag-group">
        {% capture tag_name %}{{ tag | first }}{% endcapture %}
        <h2 id="{{ tag_name | slugize }}">{{ tag_name }}</h2>
        <ul class="post-list">
          {% for post in site.tags[tag_name] %}
            <li>
              <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
              <h3>
                <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
