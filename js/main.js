$(function() {
    var $setupPopup = $('#setupPopup').modal({ show: false }),
        $setupNavItem = $('.my-menu li:has(a.setup)');

    $setupPopup
        .on('show.bs.modal', function() {
            $('.my-menu li.active').removeClass('active');

            $setupNavItem.addClass('active');
        })
        .on('hide.bs.modal', function() {
            $('.my-menu li:first-child').addClass('active');

            $setupNavItem.removeClass('active');
        });

    $('.setup').on('click', function() {
        $setupPopup.modal('show');
    });
});
