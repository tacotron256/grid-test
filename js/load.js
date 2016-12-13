// var DemoGrid = {
//   currentSize: 3,
//   buildElements: function($gridContainer, items) {
//     var item, i;
//     for (i = 0; i < items.length; i++) {
//       item = items[i];
//       $item = $(
//         '<li>' +
//             '<div class="panel panel-primary">' +
//               '<div class="panel-heading">Panel Heading</div>'+
//               '<div class="panel-body">Panel Content</div>'+
//             '</div>'+
//         '</li>'
//       );
//       $item.attr({
//         'data-w': item.w,
//         'data-h': item.h,
//         'data-x': item.x,
//         'data-y': item.y
//       });
//       $gridContainer.append($item);
//     }
//   },
//   resize: function(size) {
//     if (size) {
//       this.currentSize = size;
//     }
//     $('#grid').gridList('resize', this.currentSize);
//   },
//   flashItems: function(items) {
//     // Hack to flash changed items visually
//     for (var i = 0; i < items.length; i++) {
//       (function($element) {
//         $element.addClass('changed')
//         setTimeout(function() {
//           $element.removeClass('changed');
//         }, 0);
//       })(items[i].$element);
//     }
//   }
// };

// $(window).resize(function() {
//   $('#grid').gridList('reflow');

//   if (window.innerWidth > 480)
//   {
//       $('#grid').gridList('resize', 3);
//   }
//   else
//   {
//       $('#grid').gridList('resize', 2);
//   }
// });

// $(function() {
//   DemoGrid.buildElements($('#grid'), fixtures.DEMO);

//   $('#grid').gridList({
//     lanes: DemoGrid.currentSize,
//     widthHeightRatio: 1/1,
//     heightToFontSizeRatio: 0.25,
//     onChange: function(changedItems) {
//       DemoGrid.flashItems(changedItems);
//     }
//   });
//   $('#grid li .resize').click(function(e) {
//     e.preventDefault();
//     var itemElement = $(e.currentTarget).closest('li'),
//         itemWidth = $(e.currentTarget).data('w'),
//         itemHeight = $(e.currentTarget).data('h');

//     $('#grid').gridList('resizeItem', itemElement, {
//       w: itemWidth,
//       h: itemHeight
//     });
//   });
//   $('.add-row').click(function(e) {
//     e.preventDefault();
//     DemoGrid.resize(DemoGrid.currentSize + 1);
//   });
//   $('.remove-row').click(function(e) {
//     e.preventDefault();
//     DemoGrid.resize(Math.max(1, DemoGrid.currentSize - 1));
//   });
// });