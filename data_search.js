$(document).ready(function() {
        var pantone_data = $.merge(data, ABCdata);

        $('#stock_cards .col-4').hide();
        $('#pantone_error').hide();

        $('#pantoneSearch').focusout(function(){

          $('#stock_cards .col-4').show();
          var pantoneSearchText = ($('#pantoneSearch').val());
          var found = false;
          $('#pantoneTitle').empty();
          $('#stock_cards').empty();
          $('#pantone_error').hide();

          $.each(pantone_data, function(i, obj){

            if (pantoneSearchText == obj.name) {

              $('#pantoneTitle').empty();
              $('#stock_cards').empty();
              $('#pantoneTitle').append($('<h1 style="text-align:center; padding:12px; border-radius: 4px; background-color: rgb(' + obj.rgb + ')";>Pantone ' + obj.name + '</h1><br>'));

/////////////////////////////////////////////////////////////////////////////

              if (obj.hasOwnProperty('s1_name')) {

                $('#stock_cards').append($('<div class="col"><div class="card"><div class="card-body"><span id="stock1"><div class="row"><div class="col"><h2>' + obj.s1_name + '</h2></div><div class="col p-1"><div class="cyan_box p-1"></div></div><div class="col p-1"><div class="magenta_box p-1"></div></div><div class="col p-1"><div class="yellow_box p-1"></div></div><div class="col p-1" id="blackContainer"><div class="black_box p-1"></div></div></div>'));

                $('#stock1').append($('<hr><p>Stock Catagory: ' + obj.s1_catagory + '</p>'));

                  if (obj.s1_orange == "Yes") {
                    $('#stock1 #blackContainer').after('<div class="col p-1"><div class="orange_box p-1"></div></div>')
                  }
                  if (obj.s1_green == "Yes") {
                    $('#stock1 #blackContainer').after('<div class="col p-1"><div class="green_box p-1"></div></div>')
                  }
                  if (obj.s1_violet == "Yes") {
                    $('#stock1 #blackContainer').after('<div class="col p-1"><div class="violet_box p-1"></div></div>')
                  }

                $('#stock1').append($('<p>Delta: ' + obj.s1_delta + '</p></div></div>'));
              }

//////////////////////////////////////////////////////////////////////////////////////

              if (obj.hasOwnProperty('s2_name')) {

                $('#stock_cards').append($('<div class="col"><div class="card"><div class="card-body"><span id="stock2"><div class="row"><div class="col"><h2>' + obj.s2_name + '</h2></div><div class="col p-1"><div class="cyan_box p-1"></div></div><div class="col p-1"><div class="magenta_box p-1"></div></div><div class="col p-1"><div class="yellow_box p-1"></div></div><div class="col p-1" id="blackContainer"><div class="black_box p-1"></div></div></div>'));

                $('#stock2').append($('<hr><p>Stock Catagory: ' + obj.s2_catagory + '</p>'));

                  if (obj.s2_orange == "Yes") {
                    $('#stock2 #blackContainer').after('<div class="col p-1"><div class="orange_box p-1"></div></div>')
                    
                  }
                  if (obj.s2_green == "Yes") {
                    $('#stock2 #blackContainer').after('<div class="col p-1"><div class="green_box p-1"></div></div>')
                    
                  }
                  if (obj.s2_violet == "Yes") {
                    $('#stock2 #blackContainer').after('<div class="col p-1"><div class="violet_box p-1"></div></div>')
                    
                  } 

                $('#stock2').append($('<p>Delta: ' + obj.s2_delta + '</p></div></div>'));
              }

//////////////////////////////////////////////////////////////////////////////////////

              if (obj.hasOwnProperty('s3_name')) {

                $('#stock_cards').append($('<div class="col"><div class="card"><div class="card-body"><span id="stock3"><div class="row"><div class="col"><h2>' + obj.s3_name + '</h2></div><div class="col p-1"><div class="cyan_box p-1"></div></div><div class="col p-1"><div class="magenta_box p-1"></div></div><div class="col p-1"><div class="yellow_box p-1"></div></div><div class="col p-1" id="blackContainer"><div class="black_box p-1"></div></div></div>'));

                $('#stock3').append($('<hr><p>Stock Catagory: ' + obj.s3_catagory + '</p>'));

                  if (obj.s3_orange == "Yes") {
                    $('#stock3 #blackContainer').after('<div class="col p-1"><div class="orange_box p-1"></div></div>')
                    
                  }
                  if (obj.s3_green == "Yes") {
                    $('#stock3 #blackContainer').after('<div class="col p-1"><div class="green_box p-1"></div></div>')
                    
                  }
                  if (obj.s3_violet == "Yes") {
                    $('#stock3 #blackContainer').after('<div class="col p-1"><div class="violet_box p-1"></div></div>')
                    
                  } 

                $('#stock3').append($('<p>Delta: ' + obj.s3_delta + '</p></div></div>'));
              }

//////////////////////////////////////////////////////////////////////////////////////
            
              found = true;
              return false;

            } 

          });

          if (!found) {
              $('#stock_cards .col-4').hide();
              $('#pantone_error').show();
              $('#pantoneSearch').val('');
            }

        });

});