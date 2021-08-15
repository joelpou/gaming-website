var $gameListItems = $('.games-list-md');
var $gameContainers = $('.game-container');
var $gameTitle = $('.game-title');
var $gameTitleEnlarged = $('.game-title-enlarged');
var $gameHeader = $('#games-header');
var $gameMature = $('.mature');

$gameHeader.removeClass('hidden');

$gameListItems.on('click', function() {

  $clicked = $(this);
  $clicked.toggleClass('enlarged');
  $gameHeader.removeClass('hidden');

  if ($clicked.hasClass('enlarged')) {
     $gameTitle.hide();
     $gameTitleEnlarged.removeClass('hidden');
     $gameMature.removeClass('hidden');
     $gameHeader.addClass('hidden');
  	 $gameContainers.not($clicked.parent()).hide();
     $clicked.stop().animate({
      width: 800,
      height: 333
    }, 300);
    var selected = $clicked.attr('id')[4];
    var dload = '#g'+selected+'-download';
    var desc = '#g'+selected+'-description';
    // var share = '#g'+selected+'-share-buttons';
    console.log('download', dload);
    console.log('description', desc);
    // console.log('sharing', share);
    $(dload).removeClass('hidden');
    $(desc).removeClass('hidden');
    // $(share).removeClass('hidden');
  } else {
  	 $('.btn-download').addClass('hidden');
     $('.game-description').addClass('hidden');
     $('.share-buttons').addClass('hidden');
    $clicked.stop().animate({
      width: 275,
      height: 150
    }, 300, function() {
      $gameContainers.show();
      $gameTitle.show();
      $gameTitleEnlarged.addClass('hidden');
      $gameMature.addClass('hidden');
      // $gameDescription.addClass('hidden');
    });
  }
});
