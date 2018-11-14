
$(document).ready(function() {
  $('#sects').fullpage({
    navigationTooltips: ['home', 'Abstract', 'Description', 'Objectives', 'Literature Review', 'Design Process', 'The Result', 'Future Work', 'Endnotes', 'Bibliography'],
    anchors: ['home0', 'abstract0', 'description0', 'objectives0', 'literature0', 'design0', 'result0', 'future0', 'endnotes0', 'bibliography0']
  });
});

var valegal = d3.select('body')
    .append('div')
    .attr('id', 'legal')
    .style('position', 'fixed')
    .style('bottom', '50px')
    .style('right', '50px')
    .append('button')
    .text('© Visual Analytics Lab')
    .attr('onclick', "location.href='http://www2.ocadu.ca/research/val'");

var lcmpr = d3.select('body')
    .append('div')
    .attr('id', 'cmpr')
    .style('position', 'fixed')
    .style('bottom', '50px')
    .style('left', '50px')
    .append('button')
    .text('Launch Compara')
    .attr('onclick', "location.href='app.html'");
