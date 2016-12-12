var DemoGrid = {
  currentSize: 3,
  buildElements: function($gridContainer, items) {
    var item, i;
    for (i = 0; i < items.length; i++) {
      item = items[i];
      $item = $(
        '<li>' +
          '<div class="inner">' +
              '<div class="panel">'+
                '<div class="heading">'+
                    '<span class="title">Chart Title ' + i + '</span>'+
                      '<input type="checkbox" class="place-right panel-checkbox" checked>'+
                '</div>'+
                '<div class="content panel-content">'+
                  '<img src="img/Pie-chart-icon.png" class="panel-image" />'+
                  '<div class="panel-details">'+
                    '<p class="padding10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>'+
                    '<button class="button place-right panel-search-button"><span class="mif-search"></span></button>'+
                  '</div>'+
                '</div>'+
              '</div>'+
          '</div>' +
        '</li>'
      );
      $item.attr({
        'data-w': item.w,
        'data-h': item.h,
        'data-x': item.x,
        'data-y': item.y
      });
      $gridContainer.append($item);
    }
  },
  resize: function(size) {
    if (size) {
      this.currentSize = size;
    }
    $('#grid').gridList('resize', this.currentSize);
  },
  flashItems: function(items) {
    // Hack to flash changed items visually
    for (var i = 0; i < items.length; i++) {
      (function($element) {
        $element.addClass('changed')
        setTimeout(function() {
          $element.removeClass('changed');
        }, 0);
      })(items[i].$element);
    }
  }
};

$(window).resize(function() {
  $('#grid').gridList('reflow');

  if (window.innerWidth > 480)
  {
      $('#grid').gridList('resize', 3);
  }
  else
  {
      $('#grid').gridList('resize', 2);
  }
});

$(function() {
  DemoGrid.buildElements($('#grid'), fixtures.DEMO);

  $('#grid').gridList({
    lanes: DemoGrid.currentSize,
    widthHeightRatio: 1/1,
    heightToFontSizeRatio: 0.25,
    onChange: function(changedItems) {
      DemoGrid.flashItems(changedItems);
    }
  });
  $('#grid li .resize').click(function(e) {
    e.preventDefault();
    var itemElement = $(e.currentTarget).closest('li'),
        itemWidth = $(e.currentTarget).data('w'),
        itemHeight = $(e.currentTarget).data('h');

    $('#grid').gridList('resizeItem', itemElement, {
      w: itemWidth,
      h: itemHeight
    });
  });
  $('.add-row').click(function(e) {
    e.preventDefault();
    DemoGrid.resize(DemoGrid.currentSize + 1);
  });
  $('.remove-row').click(function(e) {
    e.preventDefault();
    DemoGrid.resize(Math.max(1, DemoGrid.currentSize - 1));
  });
});