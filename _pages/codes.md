---
layout: page
title: "Codes & Datasets"
permalink: /codes/
---

<h2>Codes & Datasets</h2>

<ul>
  {% for entry in site.data.codes %}
    <li>
      <h3>{{ entry.title }}</h3>
      <p>{{ entry.description }}</p>
      <p><strong>Code:</strong> <a href="{{ entry.github }}" target="_blank">{{ entry.github }}</a></p>
      <p><strong>Dataset:</strong> <a href="{{ entry.dataset.link }}" target="_blank">{{ entry.dataset.name }}</a></p>
    </li>
  {% endfor %}
</ul>
