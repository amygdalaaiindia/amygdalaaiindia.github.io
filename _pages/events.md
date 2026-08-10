---
layout: default
title: Events
permalink: /events/
---

<div class="container" style="padding-top:40px; padding-bottom:60px;">

  <div class="row">
    <div class="col-md-12">
      <h2 style="border-bottom:2px solid #3498db; padding-bottom:10px;">
        Events
      </h2>
      <p class="text-muted">
        Workshops, talks, contests, and seminars organised by AmygdalaAI-India Lab.
      </p>
    </div>
  </div>

  <!-- Filter Pills -->
  <div class="row" style="margin-top:16px; margin-bottom:28px;">
    <div class="col-md-12">
      <ul class="nav nav-pills" id="eventFilter">
        <li class="active"><a href="#" data-filter="all">All Events</a></li>
        <li><a href="#" data-filter="upcoming">Upcoming</a></li>
        <li><a href="#" data-filter="past">Past</a></li>
      </ul>
    </div>
  </div>

  <!-- Events Grid — data-driven from the _events collection.
       To add a new event: drop a new file in _events/ (copy an
       existing one as a template) — no changes needed here. -->
  <div class="row" id="events-container">

    {% assign sorted_events = site.events | sort: 'date' | reverse %}
    {% for event in sorted_events %}
    <div class="col-md-4 col-sm-6 event-item"
         data-date="{{ event.date | date: '%Y-%m-%d' }}" style="margin-bottom:30px;">
      <div class="panel panel-default"
           style="border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,0.10);
                  height:100%;">
        {% if event.poster %}
        <div style="overflow:hidden; border-radius:6px 6px 0 0;">
          <img src="{{ site.baseurl }}{{ event.poster }}"
               alt="{{ event.title }}"
               style="width:100%; height:200px; object-fit:cover;">
        </div>
        {% endif %}
        <div class="panel-body" style="padding:16px;">
          {% if event.type %}
            <span class="label label-primary">{{ event.type }}</span>
          {% endif %}
          <span class="event-status-badge" style="margin-left:4px;"></span>
          <h4 style="margin-top:10px; margin-bottom:6px;">
            {{ event.title }}
          </h4>
          <p style="color:#777; font-size:13px; margin-bottom:8px;">
            {% if event.display_date %}📅 {{ event.display_date }}{% endif %}
            {% if event.venue %} &nbsp;|&nbsp; 📍 {{ event.venue }}{% endif %}
          </p>
          {% if event.short_description %}
          <p style="font-size:14px;">
            {{ event.short_description }}
          </p>
          {% endif %}
        </div>
        <div class="panel-footer"
             style="background:#fff; border-top:1px solid #eee;
                    padding:10px 16px; border-radius:0 0 6px 6px;">
          <a href="{{ site.baseurl }}{{ event.url }}"
             class="btn btn-sm btn-default">View Details</a>
          {% if event.links.register and event.links.register != "" %}
          <a href="{{ event.links.register }}"
             class="btn btn-sm btn-success" target="_blank"
             style="float:right;">Register</a>
          {% elsif event.links.recording and event.links.recording != "" %}
          <a href="{{ event.links.recording }}"
             class="btn btn-sm btn-danger" target="_blank"
             style="float:right;">▶ Recording</a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}

    <!-- No-results message -->
    <div class="col-md-12" id="no-events-msg"
         style="display:none; text-align:center; padding:40px 0; color:#aaa;">
      <p style="font-size:16px;">No events found in this category.</p>
    </div>

  </div><!-- end #events-container -->

</div><!-- end .container -->


<script>
(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  /* 1. Badge + status each card */
  var cards = document.querySelectorAll('.event-item');
  cards.forEach(function (card) {
    var parts     = card.getAttribute('data-date').split('-');
    var eventDate = new Date(parts[0], parts[1] - 1, parts[2]);
    var badge     = card.querySelector('.event-status-badge');
    var footer    = card.querySelector('.panel-footer');

    if (eventDate >= today) {
      badge.innerHTML = '<span class="label label-success">Upcoming</span>';
      card.setAttribute('data-status', 'upcoming');
    } else {
      badge.innerHTML = '<span class="label label-default">Past</span>';
      card.setAttribute('data-status', 'past');
      /* Grey out register button on past events */
      var regBtn = footer ? footer.querySelector('.btn-success') : null;
      if (regBtn) {
        regBtn.className   = 'btn btn-sm btn-default disabled';
        regBtn.textContent = 'Closed';
        regBtn.removeAttribute('href');
      }
    }
  });

  /* 2. Filter pill clicks */
  document.querySelectorAll('#eventFilter a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      /* Active pill highlight */
      document.querySelectorAll('#eventFilter li')
        .forEach(function (li) { li.classList.remove('active'); });
      this.parentElement.classList.add('active');

      var filter  = this.getAttribute('data-filter');
      var visible = 0;

      cards.forEach(function (card) {
        var status = card.getAttribute('data-status');
        var show   = filter === 'all'
                  || (filter === 'upcoming' && status === 'upcoming')
                  || (filter === 'past'     && status === 'past');
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      document.getElementById('no-events-msg').style.display =
        visible === 0 ? 'block' : 'none';
    });
  });

})();
</script>
