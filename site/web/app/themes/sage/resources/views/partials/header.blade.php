<header class="banner">
  <div class="container">
    <a class="brand" id="brand" href="{{ home_url('/') }}">jp tyndall</a>
    <a class="brand about-button" href="/about">about me</a>
    <div class="flavors">
      <a class="sort-button sort-design" href="#">design</a> | <a class="sort-button sort-development" href="#">development</a> | <a class="sort-button sort-nonsense" href="#">nonsense</a>
    </div>
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif
    </nav>
  </div>
</header>
