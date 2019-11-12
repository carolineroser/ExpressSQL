function deleteLead(leadId){
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dateType: 'json',
        date: JSON.stringify({leadId}),
        type: 'POST',
        success: ((res) => {
            //replace following button with unfollow
            console.log("Result: ", res)
            $("#" + leadId).remove();
        }),
        error: ((error) =>{
            console.log("Error: ", error);
        })
    });
}