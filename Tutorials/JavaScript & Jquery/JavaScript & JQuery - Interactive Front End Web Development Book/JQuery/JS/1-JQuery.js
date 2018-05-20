$(function(){
    // SETUP
    var item = '';                                  // Item is an empty string
    var list = $('ul');                             // Cache the unordered list
    var newItemForm = $('#newItemForm');            // Cache form to add new list items
    var newItemButton = $('#newItemButton');        // Cache button to show form

    $('li').hide().each(function(index){            // Hide list items
        $(this).delay(450 * index).fadeIn(1600);    // Then fade them in
    });

    // ITEM COUNTER
    function updateCount(){
        var items = $('li[class!=complete]').length;// Number of items in list
        $('#counter').text(items);                   // Added into counter circle
    }
    updateCount();

    // SETUP FORM FOR NEW ITEMS
    newItemButton.show();                           // Show button
    newItemForm.hide();                             // Hide form
    $('#showForm').on('click', function(){          // When new item clicked
        newItemButton.hide();                       // Hide button
        newItemForm.show();                         // Show form
    });

    // ADDING NEW LIST ITEM
    newItemForm.on('submit', function(e){           // When a new item is submitted
        e.preventDefault();                         // Prevent form from being submitted
        var textInput = $('input:text').val();      // Get value of text input
        list.append('<li>' + textInput + '</li>');  // Add item to end of list
        $('input:text').val('');                    // Empty text input
        updateCount();                              // Update count
    });

    // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    list.on('click', 'li', function(){
        var $this = $(this);                        // Cache the element in a JQuery object
        var complete = $this.hasClass('complete');  // Is item complete

        if (complete === true){                     // Check if item is complete
            $this.animate({                        // If so, animate opacity and padding
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function(){            // Use callback when animation comletes
                $this.remove();                     // Then completely remove item
            });
        } else{                                     // Otherwise indicate it is complete
            item = $this.text();                    // Get text from list item
            $this.remove();                         // Remove list item
            list                                   // Add back to end of list as complete
                .append('<li class="complete">' + item + '</li>')
                .hide().fadeIn(300);                // Hide it so it can be faded in
            updateCount();                          // Upate counter
        }
    });
});
