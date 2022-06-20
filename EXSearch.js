    window.onload = function () {
        $("#EXHome").removeClass("active in");
        $("#Home").removeClass("active");
        $("#ExportForm").addClass("active in");
        $("#EXForm").addClass("active");

        var radio = $('input[name=SearchSelection]:checked').val();
        if (radio == "CBOSID") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "ExFormCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "ContractCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "LicenseCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', true);
        }


        var rows = document.getElementById("Results").getElementsByTagName("tr").length;
        var col = $("#Results tr td").length;
        if ($("#CBOSID").val() == "" && $("#ExFormCode").val() == "" && $("#ContractCode").val() == "" && $("#LicenseCode").val() == "") {
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
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "ExFormCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "ContractCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', true);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
        } else if (radio == "LicenseCode") {
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
            $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', true);
        }
    });

    $("#CBOSID").focus(function () {
        $("input[name=SearchSelection][value=CBOSID]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
    });

    $("#ExFormCode").focus(function () {
        $("input[name=SearchSelection][value=ExFormCode]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
    });

    $("#ContractCode").focus(function () {
        $("input[name=SearchSelection][value=ContractCode]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', false);
    });

    $("#LicenseCode").focus(function () {
        $("input[name=SearchSelection][value=LicenseCode]").prop('checked', true);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ExFormCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'CBOSID', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'ContractCode', false);
        $('#SearchForm').bootstrapValidator('enableFieldValidators', 'LicenseCode', true);
    });

    $('#SearchForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            CBOSID: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال الرمز الإئتماني'
                    }
                }
            },
            ExFormCode: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال رقم الإستمارة'
                    }
                }
            },
            ContractCode: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال رقم العقد'
                    }
                }
            },
            LicenseCode: {
                validators: {
                    notEmpty: {
                        message: 'الرجاء إدخال رقم الشهادة'
                    }
                }
            }
        }
    });

});
