@extends('layouts.app')

@section('content')
  {{-- @include('partials.page-header') --}}

  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

  @php $i = 0; @endphp
  @php $count_posts = wp_count_posts(); $published_posts = $count_posts->publish; echo '<p class="post-count">', $published_posts, '</p>'; @endphp

  @while (have_posts()) @php the_post() @endphp
    @php $category = get_the_category(); $firstCategory = $category[0]->cat_name; echo '<p class="cat cat-', $i, '">', $firstCategory, '</p>'; @endphp
    @php $postID = get_the_ID(); echo '<p class="post-id post-id-', $i, '">', $postID, '</p>'; $i++; @endphp
    @include('partials.content-'.get_post_type())
  @endwhile

  <p class="empty-posts">You've hidden everything! You fool!</p>

  {!! get_the_posts_navigation() !!}
@endsection
