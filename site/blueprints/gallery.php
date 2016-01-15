<?php if(!defined('KIRBY')) exit ?>

title: Gallery
pages: false
files: 
  type: 
    - image
  sortable: true
  fields:
    alt:
      label: Alt Text
      type:  text
    tags:
      label: Tags
      type:  tags
fields:
  title:
    label: Title
    type:  text