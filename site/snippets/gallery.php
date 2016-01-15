<div class="gallery-filters">
  <button class="button active" data-filter="*">show all</button>
  <button class="button" data-filter=".bouquets">bouquets</button>
  <button class="button" data-filter=".homes">homes</button>
  <button class="button" data-filter=".events">events</button>
  <button class="button" data-filter=".weddings">weddings</button>
</div>

<div class="gallery">
  <? foreach($page->images() as $image): ?>
    <div class="gallery-item <? echo str_replace(',', ' ', $image->tags()) ?>">
      <img src="<? echo $image->url() ?>" alt="<? echo $image->alt() ?>">
    </div>
  <? endforeach ?>
</div>