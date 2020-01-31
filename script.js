(function() {
  var RECEIVER1, RECEIVER2, setMonetization;

  // https://css-tricks.com/
  RECEIVER1 = '$pay.stronghold.co/1a1b91b23306ab547228c43af27ac0f2411';
  // https://www.brucelawson.co.uk/
  RECEIVER2 = '$pay.stronghold.co/1a1b5721fa97cee4827844da5d4d04bfc68';

  $(function() {
    setMonetization(RECEIVER1);
    $('.start').click(function() {
      return setMonetization(RECEIVER1);
    });
    return $('.stop').click(function() {
      return setMonetization(RECEIVER2);
    });
  });

  setMonetization = function(receiverID) {
    return $('meta[name="monetization"]').attr({
      content: receiverID
    });
    console.log("monetization is now " + receiverID);
  };

}).call(this);
