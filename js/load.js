var DemoGrid = {
  currentSize: 3,
  buildElements: function ($gridContainer,  type) {
    var items;

    if (type === 'list')
    {
      items = fixtures.listDEMO;
    }
    else
    {
      items = fixtures.tileDEMO;
    }


    var gridType = type;
    var item, i;
    for (i = 0; i < items.length; i++) {
      item = items[i];

    if (type === 'list')
    {
      $item = $(fixtures.listTemplate);
    }
    else
    {
      $item = $(fixtures.tileTemplate);
    }

      $item.attr({
        'data-w': item.w,
        'data-h': item.h,
        'data-x': item.x,
        'data-y': item.y
      });
      $gridContainer.append($item);
    }
  },
  resize: function (size) {
    if (size) {
      this.currentSize = size;
    }
    $('#grid').gridList('resize', this.currentSize);
  },
  flashItems: function (items) {
    // Hack to flash changed items visually
    for (var i = 0; i < items.length; i++) {
      (function ($element) {
        $element.addClass('changed')
        setTimeout(function () {
          $element.removeClass('changed');
        }, 0);
      })(items[i].$element);
    }
  }
};

$(window).resize(function () {
  if (DemoGrid.gridType === 'list')
  {
  resizeList();  
  }
  else
  {
    resizeTile();
  }
});

$(function () {
  DemoGrid.buildElements($('#grid'), 'tile');

  $('#grid').gridList({
    lanes: DemoGrid.currentSize,
    widthHeightRatio: 1 / 1,
    onChange: function (changedItems) {
      DemoGrid.flashItems(changedItems);
    }
  });
    $('#grid').gridList('reflow');
      if (DemoGrid.gridType === 'list')
        {
        resizeList();  
        }
        else
        {
          resizeTile();
        }
});

  function resizeTile() {
      $('#grid').gridList('reflow');

  if (window.innerWidth > 510) {
    if (window.innerWidth > 762) {
      if (window.innerWidth > 992) {
        if (window.innerWidth > 1400) {
          $('#grid').gridList('resize', 5);
        }
        else {
          $('#grid').gridList('resize', 4);
        }
      }
      else {
        $('#grid').gridList('resize', 3);
      }
    }
    else {
      $('#grid').gridList('resize', 2);
    }
  }
  else {
    $('#grid').gridList('resize', 1);
  }
}

  function resizeList() {
      $('#grid').gridList('reflow');

  if (window.innerWidth > 510) {
    if (window.innerWidth > 762) {
      if (window.innerWidth > 992) {
        if (window.innerWidth > 1400) {
          $('#grid').gridList('resize', 3);
        }
        else {
          $('#grid').gridList('resize', 3);
        }
      }
      else {
        //re-draw grid in list format
        $('#grid').gridList('resize', 3);
      }
    }
    else {
      //re-draw grid in tile format
      $('#grid').gridList('resize', 3);
    }
  }
  else {
    //re-draw grid in tile format
    $('#grid').gridList('resize', 3);
  }
}