$(document).ready(function() {
  $(".feature-1").hover(function(){
    $(".feature-preview .feature-1").addClass("show fade-in");
    $(".feature-preview .feature-1").removeClass("hidden");
  },

    function(){
      $(".feature-preview .feature-1").removeClass("show");
      $(".feature-preview .feature-1").addClass("hidden");
    }
  );

  $(".feature-2").hover(function(){
    $(".feature-preview .feature-2").addClass("show fade-in");
    $(".feature-preview .feature-2").removeClass("hidden");
  },

    function(){
      $(".feature-preview .feature-2").removeClass("show");
      $(".feature-preview .feature-2").addClass("hidden");
    }
  );

  $(".feature-3").hover(function(){
    $(".feature-preview .feature-3").addClass("show fade-in");
    $(".feature-preview .feature-3").removeClass("hidden");
  },

    function(){
      $(".feature-preview .feature-3").removeClass("show");
      $(".feature-preview .feature-3").addClass("hidden");
    }
  );
});



