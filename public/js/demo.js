$(document).ready(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    manageData();

    $('#getData').click(function() {
        manageData();
    });

    function manageData() {
        $.ajax({
            url: '/jquery',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                manageRow(data);
            },
        });
    }


    function manageRow(data) {
        var rows = '';
        $.each(data, function(key, value) {
            rows = rows + '<tr>';
            rows = rows + '<td>' + value.id + '</td>';
            rows = rows + '<td>' + value.first_name + '</td>';
            rows = rows + '<td>' + value.last_name + '</td>';
            rows = rows + '<td>' + value.user_name + '</td>';
            rows = rows + '<td data-id="' + value.id + '">';
            rows = rows + '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Edit</button> ';
            rows = rows + '<button class="btn btn-danger remove-item">Delete</button>';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });

        $("tbody").html(rows);
        // $("tbody").html(rows);
    }


    $("#submit_form").click(function(e) {
        e.preventDefault();

        var firstName = $("#first_name").val();
        var lastName = $("#last_name").val();
        var userName = $("#user_name").val();

        // if (!firstName) {
        //     var errors = '';
        //     $("#erros_first_name").addClass('errors').html('Xin mời nhập Last Name');
        // } else {
        //     $("#erros_first_name").removeClass('errors').html('');
        // }

        // if (!lastName) {
        //     var errors = '';
        //     $("#erros_last_name").addClass('errors').html('Xin mời nhập Last Name');
        // } else {
        //     $("#erros_last_name").removeClass('errors').html('');
        // }


        // if (!userName) {
        //     var errors = '';
        //     $("#erros_user_name").addClass('errors').html('Xin mời nhập Last Name');
        // } else {
        //     $("#erros_user_name").removeClass('errors').html('');
        // }

        // if (!firstName || !lastName || !userName) return false;

        $.ajax({
            url: 'jquery',
            type: 'POST',
            dataType: 'json',
            data: {
                first_name: firstName,
                last_name: lastName,
                user_name: userName,
            },

            success: function(data) {
                console.log(data);
                manageRow(data);
            },
        });
    });

    function createUser(data) {

    }
});