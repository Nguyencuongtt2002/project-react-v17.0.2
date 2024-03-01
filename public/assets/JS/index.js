$(document).ready(function () {
    $(".feat-btn").click(function () {
        $(this).toggleClass("active");
        $(".feat-show").toggleClass("show");
        $(".first").toggleClass("rolate");
    });

    $(".serv-btn").click(function () {
        $(this).toggleClass("active");
        $(".serv-show").toggleClass("show1");
        $(".second").toggleClass("rolate");
    });
});

$("#form-validate").validate({
    rules: {
        TenSP: {
            required: !0
        },
        MoTa: {
            minlength: 20,
            required: !0
        },
        GiaBan: {
            required: !0,
            number: !0
        },
        GiaNhap: {
            required: !0,
            number: !0
        },
        SoLuongTon: {
            required: !0,
            number: !0
        }
    },
    errorClass: "help-block error",
    highlight: function (e) {
        $(e).closest(".form-group").addClass("has-error")
    },
    unhighlight: function (e) {
        $(e).closest(".form-group").removeClass("has-error")
    },
});




