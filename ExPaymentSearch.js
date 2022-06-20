window.onload = function () {
    $("#EXHome").removeClass("active in");
    $("#Home").removeClass("active");
    $("#Payment").addClass("active in");
    $("#PYMT").addClass("active");

    var radio = $('input[name=SearchSelection]:checked').val();
    if (radio == "CBOSID") {
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
    } else if (radio == "PaymentCode") {
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
    } else if (radio == "SearchDate") {
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', true);
    }


    var rows = document.getElementById("Results").getElementsByTagName("tr").length;
    var col = $("#Results tr td").length;
    if ($("#FromDate").val() == "" && $("#ToDate").val() == "" && $("#CBOSID").val() == "" && $("#PaymentCode").val() == "") {
        $('#HrefSearchArea').click();
    }

    else if (col >= 1) {
        $('#HrefResultsArea').click();
    }

    return false;
}

function rowStyle(row, index) {
    var classes = 'info';

    if (index % 2 === 0) {
        return {
            classes: classes
        };
    }
    return {};
}

$(document).ready(function () {
    var $table = $('#Results');
    $table.bootstrapTable();

    $(".date-picker-FromDate").datepicker({
    }).on('change', function () {
        $('#SearchForm').bootstrapValidator('revalidateField', 'FromDate');
    });

    $(".date-picker-ToDate").datepicker({
    }).on('change', function () {
        $('#SearchForm').bootstrapValidator('revalidateField', 'ToDate');
    });

    $(function () {
        $(".title").tooltip({
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function (position, feedback) {
                    $(this).css(position);
                    $("<div>")
                        .addClass("arrow")
                        .addClass(feedback.vertical)
                        .addClass(feedback.horizontal)
                        .appendTo(this);
                }
            }
        });
    });
});

$(document).ready(function () {

    $('input[name=SearchSelection]').click(function () {
        var radio = $('input[name=SearchSelection]:checked').val();
        if (radio == "CBOSID") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
        } else if (radio == "PaymentCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
        } else if (radio == "SearchDate") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', true);
        }
    });

    $("#CBOSID").focus(function () {
        $("input[name=SearchSelection][value=CBOSID]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
    });

    $("#PaymentCode").focus(function () {
        $("input[name=SearchSelection][value=TransferCode]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', false);
    });

    $("#FromDate").focus(function () {
        $("input[name=SearchSelection][value=SearchDate]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', true);
    });

    $("#ToDate").focus(function () {
        $("input[name=SearchSelection][value=SearchDate]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'PaymentCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'FromDate', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ToDate', true);
    });

    $('#SearchForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            FromDate: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال التاريخ'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'الرجاء مراجعة التاريخ المدخل'
                    }
                }
            },
            ToDate: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال التاريخ'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'الرجاء مراجعة التاريخ المدخل'
                    },
                    callback: {
                        message: 'الرجاء إدخال تاريخ أكبر',
                        callback: function (value, validator) {
                            var m = new moment(value, 'MM/DD/YYYY', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            // Check if the date in our range
                            return m.isAfter($('#FromDate').val());
                        }
                    }
                }
            },
            CBOSID: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال الرمز الإئتماني'
                    },
                    stringLength: {
                        min: 12,
                        max: 12,
                        message: 'الرجاء إدخال رمز إئتماني صحيح'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'الرمز الإئتماني يتكون من ارقام فقط'
                    }
                }
            },
            PaymentCode: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال رقم الحصيلة'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'رقم الحصيلة يتكون من ارقام فقط'
                    }
                }
            }
        }
    });

});
