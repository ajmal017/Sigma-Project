$(document).ready(function() {

    // DataTable
    $('.validators-table, .coins-filter-table').DataTable({
        "searching": false,
        "paging": false,
        "info": false
    });

    // Range Slider
    $(".range-slider").slider({
        range: true,
        min: 0,
        max: 10000,
        step: 1,
        values: [0, 10000],
        animate: 300,
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $(".range-slider").slider("range-inputs", $this.data("index"), $this.val());
    });


    // Custom JS
    $('.coins-filter-info-button__candidated').on('click', function() {

        let candidatedButton = $(this).find('.coins-filter-info-buttons__candidated__status');

        if ($(candidatedButton).hasClass('on')) {
            $(candidatedButton).removeClass('on');
            $(candidatedButton).addClass('off');
            $(candidatedButton).html('Off');
        } else {
            $(candidatedButton).addClass('on');
            $(candidatedButton).removeClass('off');
            $(candidatedButton).html('On');
        }
    });

    function coinsFilterMobile() {
        $('.coins-filter-info-button__filter-by-mobile').on('click', function() {
            let filterByButton = $(this);
            let filterModal = $('.coins-filter-modal-block-mobile');

            if ($(filterByButton).hasClass('active')) {
                $(filterByButton).removeClass('active');
                $(filterModal).removeClass('opened');
            } else {
                $(filterModal).addClass('opened');
                $(filterByButton).addClass('active');
            }
        });

        $('.coins-filter-modal-block__close, .coins-filter-modal-block__apply').on('click', function() {
            let filterByButton = $('.coins-filter-info-button__filter-by-mobile');
            let filterModal = $('.coins-filter-modal-block-mobile');
            if ($(filterModal).hasClass('opened')) {
                $(filterByButton).removeClass('active');
                $(filterModal).removeClass('opened');
            }
        });
    }


    function coinsFilterDesktop() {
        $('.coins-filter-info-button__filter-by-coins').on('click', function() {

            let filterByButton = $(this);
            let filterModal = $('.coins-filter-modal-block-desktop');

            if ($(filterByButton).hasClass('active')) {
                $(filterByButton).removeClass('active');
                $(filterModal).removeClass('opened');
            } else {
                $(filterModal).addClass('opened');
                $(filterByButton).addClass('active');
            }
        });

	    $('.coins-filter-modal-block__close, .coins-filter-modal-block__apply').on('click', function() {
	        let filterByButton = $('.coins-filter-info-button__filter-by-coins'); 
	        let filterModal = $('.coins-filter-modal-block-desktop');
	        if ($(filterModal).hasClass('opened')) {
	            $(filterByButton).removeClass('active');
	            $(filterModal).removeClass('opened');
	        }
	    });
    }


    if (window.matchMedia("screen and (max-width: 1199px)").matches) {
        coinsFilterMobile();
    } else {
        coinsFilterDesktop();
    }


    // Buttons Styling on click
    $('.validators-info-button').on('click', function() {
        $('.validators-info-button').removeClass('active');
        let button = $(this);
        $(button).addClass('active');
    });

	$(".coin-toggle-section").each(function() {
	    $(this).find('.toggle-button').on('click', function() {
	        $(this).parent().find('.toggle-button').removeClass('active');
	        let button = $(this);
	        $(button).addClass('active');	        
	    });
	});

	$(".coin-main-pie-diagram-info-navigation-list").each(function() {
	    $(this).find('li').on('click', function() {
	        $(this).parent().find('li').removeClass('active');
	        let paginationLink = $(this);
	        $(paginationLink).addClass('active');	        
	    });
	});	

});