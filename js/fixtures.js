var fixtures = {};

// fixtures.GRID1 = {
//   rows3: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 3, h: 1, x: 0, y: 2},
//     {w: 1, h: 1, x: 1, y: 0},
//     {w: 2, h: 1, x: 1, y: 1},
//     {w: 1, h: 1, x: 2, y: 0},
//     {w: 1, h: 0, x: 3, y: 0},
//     {w: 1, h: 1, x: 4, y: 0},
//     {w: 2, h: 1, x: 4, y: 1},
//     {w: 1, h: 1, x: 4, y: 2},
//     {w: 1, h: 1, x: 5, y: 0},
//     {w: 1, h: 1, x: 5, y: 2},
//     {w: 1, h: 2, x: 6, y: 0},
//     {w: 1, h: 1, x: 6, y: 2}
//   ],
//   rows2: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 3, h: 1, x: 1, y: 0},
//     {w: 1, h: 1, x: 1, y: 1},
//     {w: 2, h: 1, x: 2, y: 1},
//     {w: 1, h: 1, x: 4, y: 0},
//     {w: 1, h: 0, x: 5, y: 0},
//     {w: 1, h: 1, x: 6, y: 0},
//     {w: 2, h: 1, x: 6, y: 1},
//     {w: 1, h: 1, x: 7, y: 0},
//     {w: 1, h: 1, x: 8, y: 0},
//     {w: 1, h: 1, x: 8, y: 1},
//     {w: 1, h: 2, x: 9, y: 0},
//     {w: 1, h: 1, x: 10, y: 0}
//   ],
//   rows4: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 3, h: 1, x: 0, y: 2},
//     {w: 1, h: 1, x: 0, y: 3},
//     {w: 2, h: 1, x: 1, y: 0},
//     {w: 1, h: 1, x: 1, y: 1},
//     {w: 1, h: 0, x: 3, y: 0},
//     {w: 1, h: 1, x: 4, y: 0},
//     {w: 2, h: 1, x: 4, y: 1},
//     {w: 1, h: 1, x: 4, y: 2},
//     {w: 1, h: 1, x: 4, y: 3},
//     {w: 1, h: 1, x: 5, y: 0},
//     {w: 1, h: 2, x: 5, y: 2},
//     {w: 1, h: 1, x: 6, y: 0}
//   ]
// };

// fixtures.GRID2 = {
//   rows3: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 1, h: 1, x: 0, y: 2},
//     {w: 1, h: 0, x: 1, y: 0},
//     {w: 2, h: 1, x: 2, y: 0},
//     {w: 2, h: 1, x: 2, y: 1},
//     {w: 1, h: 1, x: 2, y: 2},
//     {w: 1, h: 1, x: 3, y: 2},
//     {w: 3, h: 1, x: 4, y: 0},
//     {w: 1, h: 1, x: 4, y: 1},
//     {w: 1, h: 1, x: 4, y: 2},
//     {w: 2, h: 1, x: 5, y: 1},
//     {w: 2, h: 1, x: 5, y: 2},
//     {w: 1, h: 0, x: 7, y: 0},
//     {w: 1, h: 1, x: 8, y: 0},
//     {w: 1, h: 1, x: 8, y: 1},
//     {w: 1, h: 1, x: 8, y: 2}
//   ],
//   rows2: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 1, h: 1, x: 1, y: 0},
//     {w: 1, h: 0, x: 2, y: 0},
//     {w: 2, h: 1, x: 3, y: 0},
//     {w: 2, h: 1, x: 3, y: 1},
//     {w: 1, h: 1, x: 5, y: 0},
//     {w: 1, h: 1, x: 5, y: 1},
//     {w: 3, h: 1, x: 6, y: 0},
//     {w: 1, h: 1, x: 6, y: 1},
//     {w: 1, h: 1, x: 7, y: 1},
//     {w: 2, h: 1, x: 8, y: 1},
//     {w: 2, h: 1, x: 9, y: 0},
//     {w: 1, h: 0, x: 11, y: 0},
//     {w: 1, h: 1, x: 12, y: 0},
//     {w: 1, h: 1, x: 12, y: 1},
//     {w: 1, h: 1, x: 13, y: 0}
//   ],
//   rows4: [
//     {w: 1, h: 1, x: 0, y: 0},
//     {w: 1, h: 1, x: 0, y: 1},
//     {w: 1, h: 1, x: 0, y: 2},
//     {w: 1, h: 0, x: 1, y: 0},
//     {w: 2, h: 1, x: 2, y: 0},
//     {w: 2, h: 1, x: 2, y: 1},
//     {w: 1, h: 1, x: 2, y: 2},
//     {w: 1, h: 1, x: 2, y: 3},
//     {w: 3, h: 1, x: 3, y: 2},
//     {w: 1, h: 1, x: 3, y: 3},
//     {w: 1, h: 1, x: 4, y: 0},
//     {w: 2, h: 1, x: 4, y: 1},
//     {w: 2, h: 1, x: 4, y: 3},
//     {w: 1, h: 0, x: 6, y: 0},
//     {w: 1, h: 1, x: 7, y: 0},
//     {w: 1, h: 1, x: 7, y: 1},
//     {w: 1, h: 1, x: 7, y: 2}
//   ]
// };


fixtures.tileDEMO = [
{w: 1, h: 1, x: 0, y: 0},
 {w: 1, h: 1, x: 1, y: 0},
 {w: 1, h: 1, x: 2, y: 0},
 {w: 1, h: 1, x: 0, y: 1},
 {w: 1, h: 1, x: 1, y: 1},
 {w: 1, h: 1, x: 2, y: 1}
];

fixtures.listDEMO = [
 {w: 3, h: 1, x: 0, y: 0},
 {w: 3, h: 1, x: 1, y: 0},
 {w: 3, h: 1, x: 2, y: 0},
 {w: 3, h: 1, x: 0, y: 1},
 {w: 3, h: 1, x: 1, y: 1},
 {w: 3, h: 1, x: 2, y: 1}
];

fixtures.tileTemplate = (
        '<li>' +
        '<div class="panel panel-primary grid-panel-tile">' +
        '<div class="panel-heading grid-panel-heading-tile">' +
        'Chart Title' +
        '<div class="pull-right">' +
        '<input type="checkbox"></input>' +
        '</div>' +
        '</div>' +
        '<div class="panel-body grid-panel-body-tile">' +
        '<div class="row grid-panel-body-content-tile">' +
        '<div class="grid-chart-image-container-tile col-xs-4 col-sm-5 col-lg-6">' +
        '<img class="grid-chart-image-tile img-responsive" src="img/Pie-chart-icon.png" />' +
        '</div>' +
        '<div class="col-xs-8 col-sm-7 col-lg-6 grid-desc-container-tile">' +
        '<p class="panel-short-desc-tile">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' +
        'Cum sociis natoque penatibus et ma</p>' +
        '</div>' +
        '</div>' +
        '<div class="row grid-footer-tile">' +
        '<div class="col-xs-6 panel-most-container-tile">' +
        '<div>M O S T 11/7</div>' +
        '</div>' +
        '<div class="col-xs-6">' +
        '<button class="btn btn-primary pull-right panel-search-button-tile"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>'
      );


      fixtures.listTemplate = (
        '<li>' +
        '<div class="panel panel-primary grid-panel-tile">' +
        '<div class="panel-heading grid-panel-heading-tile">' +
        'Chart Title' +
        '<div class="pull-right">' +
        '<input type="checkbox"></input>' +
        '</div>' +
        '</div>' +
        '<div class="panel-body grid-panel-body-list">' +
        '<div class="row grid-panel-body-content-tile">' +
        '<div class="grid-chart-image-container-list hidden-xs col-sm-4">' +
        '<img class="grid-chart-image-list img-responsive" src="img/Pie-chart-icon.png" />' +
        '</div>' +
        '<div class="col-xs-12 col-sm-8 grid-desc-container-list">' +
        '<div class="panel-long-desc-list">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu</div>' +
        '<div class="panel-report-date">Report Published: 2016-11-07</div>' +
        '<div class="panel-report-date">Report Last Ran: 2016-12-07 20:17</div>' +
        '<div class="panel-report-type">Report Type: Maintenance, Operations, Safety, Training</div>' +
        '<hr>'+
        '<div class="panel-tags-list hidden-sm">Tags: grid, master, lamp, monitor, switch, wall, keyboard, mouse, shoes, cat, floor, ceiling, box</div>' +
        '<button class="btn btn-primary pull-right panel-search-button-list"><span class="glyphicon glyphicon-open" aria-hidden="true"></span></button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>'
      );

// fixtures.verticalGridDemo = [
//   {w: 1, h: 1, x: 0, y: 0},
//   {w: 1, h: 1, x: 1, y: 0},
//   {w: 1, h: 1, x: 2, y: 0},
//   {w: 2, h: 1, x: 0, y: 1},
//   {w: 1, h: 1, x: 2, y: 1},
//   {w: 3, h: 1, x: 0, y: 2},
//   {w: 1, h: 2, x: 0, y: 3},
//   {w: 1, h: 1, x: 1, y: 3},
//   {w: 1, h: 1, x: 2, y: 3},
//   {w: 1, h: 1, x: 1, y: 4},
//   {w: 1, h: 1, x: 2, y: 4},
//   {w: 2, h: 1, x: 0, y: 5},
//   {w: 1, h: 2, x: 2, y: 5},
//   {w: 1, h: 1, x: 0, y: 6},
//   {w: 1, h: 1, x: 1, y: 6},
//   {w: 2, h: 2, x: 0, y: 7},
//   {w: 1, h: 2, x: 2, y: 7}
// ];

// Enable Node module
if (typeof(require) == 'function') {
  for (var k in fixtures) {
    exports[k] = fixtures[k];
  }
}