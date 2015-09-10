import $ from 'jquery';

$('body')
.css({
  margin: '30px',
})
.append(
  $('<button id="greeting">')
  .css('margin-bottom', '10px')
  .text('Greeting')
  .click(function() {
    $(this).after(
      $('<div>')
      .addClass('greeting')
      .text('Hello World')
    );
  })
);
