---
layout: default
title: Events
permalink: /events/
---

<div class="container" style="padding-top: 40px; padding-bottom: 60px;">

  <!-- Page Header -->
  <div class="row">
    <div class="col-md-12">
      <h2 style="border-bottom: 2px solid #3498db; padding-bottom: 10px;">
        Events
      </h2>
      <p class="text-muted">
        Workshops, talks, hackathons, and seminars organised by AmygdalaAI-India Lab.
      </p>
    </div>
  </div>

  <!-- Filter Tabs -->
  <div class="row" style="margin-top: 20px; margin-bottom: 30px;">
    <div class="col-md-12">
      <ul class="nav nav-pills" id="eventFilter">
        <li class="active">
          <a href="#" data-filter="all">All Events</a>
        </li>
        <li>
          <a href="#" data-filter="upcoming">Upcoming</a>
        </li>
        <li>
          <a href="#" data-filter="past">Past</a>
        </li>
      </ul>
    </div>
  </div>

  <!-- ============================================================
       EVENTS GRID — add your events below by copying a card block
       ============================================================ -->
  <div class="row" id="events-container">

    <!-- ── EVENT CARD 1 ── -->
    <div class="col-md-4 col-sm-6 event-item" data-date="2025-09-20"
         style="margin-bottom: 30px;">
      <div class="panel panel-default" style="border-radius:6px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.10); height:100%;">

        <!-- Poster -->
        <div style="overflow:hidden; border-radius:6px 6px 0 0;">
          <img src="{{ site.baseurl }}/images/events/nlp-workshop.jpg"
               alt="Workshop on NLP and LLMs"
               style="width:100%; height:200px; object-fit:cover;">
        </div>

        <div class="panel-body" style="padding:16px;">

          <!-- Status badge (filled by JS) + Type badge -->
          <span class="label label-primary">Workshop</span>
          <span class="event-status-badge" style="margin-left:4px;"></span>

          <h4 style="margin-top:10px; margin-bottom:6px;">
            Workshop on NLP &amp; LLMs
          </h4>

          <p style="color:#777; font-size:13px; margin-bottom:8px;">
            📅 20 September 2025 &nbsp;|&nbsp; 📍 IIT Rourkela + Zoom
          </p>

          <p style="font-size:14px;">
            An intensive one-day workshop exploring large language models
            and their real-world applications in Indian language processing.
          </p>
        </div>

        <div class="panel-footer" style="background:#fff;
             border-top:1px solid #eee; padding:10px 16px;
             border-radius:0 0 6px 6px;">
          <a href="{{ site.baseurl }}/events/nlp-workshop-sep2025/"
             class="btn btn-sm btn-default">View Details</a>
          <a href="https://forms.gle/yourformlink"
             class="btn btn-sm btn-success" target="_blank"
             style="float:right;">Register</a>
        </div>

      </div>
    </div>
    <!-- ── END EVENT CARD 1 ── -->


    <!-- ── EVENT CARD 2 ── -->
    <div class="col-md-4 col-sm-6 event-item" data-date="2025-10-15"
         style="margin-bottom: 30px;">
      <div class="panel panel-default" style="border-radius:6px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.10); height:100%;">

        <div style="overflow:hidden; border-radius:6px 6px 0 0;">
          <img src="{{ site.baseurl }}/images/events/cv-talk.jpg"
               alt="Talk on Computer Vision in Healthcare"
               style="width:100%; height:200px; object-fit:cover;">
        </div>

        <div class="panel-body" style="padding:16px;">
          <span class="label label-info">Talk</span>
          <span class="event-status-badge" style="margin-left:4px;"></span>

          <h4 style="margin-top:10px; margin-bottom:6px;">
            Talk: Computer Vision in Healthcare
          </h4>

          <p style="color:#777; font-size:13px; margin-bottom:8px;">
            📅 15 October 2025 &nbsp;|&nbsp; 📍 Online (Zoom)
          </p>

          <p style="font-size:14px;">
            An expert talk on applying computer vision techniques
            to medical imaging and healthcare diagnostics.
          </p>
        </div>

        <div class="panel-footer" style="background:#fff;
             border-top:1px solid #eee; padding:10px 16px;
             border-radius:0 0 6px 6px;">
          <a href="{{ site.baseurl }}/events/cv-talk-oct2025/"
             class="btn btn-sm btn-default">View Details</a>
          <a href="https://youtube.com/watch?v=example"
             class="btn btn-sm btn-danger" target="_blank"
             style="float:right;">▶ Recording</a>
        </div>

      </div>
    </div>
    <!-- ── END EVENT CARD 2 ── -->


    <!-- ── EVENT CARD 3 — copy this block to add more events ── -->
    <div class="col-md-4 col-sm-6 event-item" data-date="2026-01-10"
         style="margin-bottom: 30px;">
      <div class="panel panel-default" style="border-radius:6px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.10); height:100%;">

        <div style="overflow:hidden; border-radius:6px 6px 0 0;">
          <img src="{{ site.baseurl }}/images/events/hackathon-2026.jpg"
               alt="AI Hackathon 2026"
               style="width:100%; height:200px; object-fit:cover;">
        </div>

        <div class="panel-body" style="padding:16px;">
          <span class="label label-warning">Hackathon</span>
          <span class="event-status-badge" style="margin-left:4px;"></span>

          <h4 style="margin-top:10px; margin-bottom:6px;">
            AI for Social Good Hackathon 2026
          </h4>

          <p style="color:#777; font-size:13px; margin-bottom:8px;">
            📅 10 January 2026 &nbsp;|&nbsp; 📍 Bhubaneswar + Online
          </p>

          <p style="font-size:14px;">
            A 48-hour hackathon challenging teams to build AI solutions
            for real-world social problems across healthcare, agriculture,
            and education.
          </p>
        </div>

        <div class="panel-footer" style="background:#fff;
             border-top:1px solid #eee; padding:10px 16px;
             border-radius:0 0 6px 6px;">
          <a href="{{ site.baseurl }}/events/hackathon-2026/"
             class="btn btn-sm btn-default">View Details</a>
          <a href="https://forms.gle/hackathonlink"
             class="btn btn-sm btn-success" target="_blank"
             style="float:right;">Register</a>
        </div>

      </div>
    </div>
    <!-- ── END EVENT CARD 3 ── -->


    <!-- No events message (shown by JS when filter finds nothing) -->
    <div class="col-md-12" id="no-events-msg"
         style="display:none; text-align:center; padding:40px 0; color:#999;">
      <p style="font-size:16px;">No events found in this category.</p>
    </div>

  </div>
  <!-- end #events-container -->

</div><!-- end .container -->


<!-- ============================================================
     JAVASCRIPT — auto-badges + filter tabs
     No external libraries needed; works with Bootstrap 3 already
     on the site.
     ============================================================ -->
<script>
(function () {

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  /* ── 1. Stamp each card with Upcoming / Past badge ── */
  var cards = document.querySelectorAll('.event-item');
  cards.forEach(function (card) {
    var dateStr  = card.getAttribute('data-date');   // e.g. "2025-09-20"
    var parts    = dateStr.split('-');
    var eventDate = new Date(parts[0], parts[1] - 1, parts[2]);
    var badge    = card.querySelector('.event-status-badge');
    var footer   = card.querySelector('.panel-footer');

    if (eventDate >= today) {
      badge.innerHTML =
        '<span class="label label-success">Upcoming</span>';
      card.setAttribute('data-status', 'upcoming');
    } else {
      badge.innerHTML =
        '<span class="label label-default">Past</span>';
      card.setAttribute('data-status', 'past');

      /* Dim register buttons on past events */
      var regBtn = footer.querySelector('.btn-success');
      if (regBtn) {
        regBtn.className = 'btn btn-sm btn-default disabled';
        regBtn.textContent = 'Closed';
        regBtn.removeAttribute('href');
      }
    }
  });

  /* ── 2. Filter pill clicks ── */
  var filterLinks = document.querySelectorAll('#eventFilter a');
  filterLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      /* Active pill */
      document.querySelectorAll('#eventFilter li')
        .forEach(function (li) { li.classList.remove('active'); });
      this.parentElement.classList.add('active');

      var filter = this.getAttribute('data-filter');
      var visible = 0;

      cards.forEach(function (card) {
        var status = card.getAttribute('data-status');
        var show   = (filter === 'all') ||
                     (filter === 'upcoming' && status === 'upcoming') ||
                     (filter === 'past'     && status === 'past');
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      document.getElementById('no-events-msg').style.display =
        visible === 0 ? 'block' : 'none';
    });
  });

})();
</script>
