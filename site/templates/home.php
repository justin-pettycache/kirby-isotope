<?php snippet('header') ?>

  <main class="main" role="main">

    <div class="text">
      <h1><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>
    </div>

    <hr>

    <? if($page->hasVisibleChildren()): ?>
      <? foreach($page->children()->visible() as $p): ?>
        <? snippet($p->intendedTemplate(), array('page' => $p)) ?>
      <? endforeach ?>
    <? endif ?>

  </main>

<?php snippet('footer') ?>