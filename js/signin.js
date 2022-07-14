const url = "https://dbjson-webvic.herokuapp.com/users";

const cleanAlert = () => {
    $('#vacio').replaceWith(`<div id="vacio"></div>`);
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

$(window).on("load", () => {
    // axios.delete(`${url}/a4466a1e-8ae8-43de-9c6a-65a334a5ae93`)
    //     .then( response => {
    //         console.log("Wasoki out")

    //     } )
    //     .catch( err => {
    //         console.log(err)
    //     } )
    
    $("#enter").on("click", async() => {
        try{
            const username = $('#login-username').val();
            const password = $('#login-password').val();
            const confpassword = $('#login-password-confirm').val();
            if(username === "" || password === "" || confpassword === ""){
                $('#vacio').append(`
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                    <b> Fill all the cells to continue! </b>
                    </div>
                </div>
                `);
                setTimeout(cleanAlert, 3000);  
            }
            else{
                const id = create_UUID();
                const usuario = {
                    id,
                    username,
                    password
                }
                axios.post(`${url}`, usuario)
                    .then (response => {
                        $('#vacio').append(`
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                            <div>
                            Welcome aboard ${username}! You're now a member!
                            <div> 
                                <b> Click to Log-In: </b>
                                <a href="login.html" class="alert-link fa-solid fa-user-check"></a>
                            </div>
                            </div>
                        </div>
                        `);
                    })
                    .catch(err => {
                        $('#vacio').append(`
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                            <div>
                            <b>Something went wrong... Please Try Again </b>
                            </div>
                        </div>
                        `);

                        setTimeout(cleanAlert, 2000);
                    })
            
            }
            
        } catch(error){
            console.log(error.message);
            if ($('#login-password').val() !== $('#login-password-confirm').val()){
                $('#vacio').append(`
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                    <b> Password doesn't match </b>
                    </div>
                </div>
            `);
                setTimeout(cleanAlert, 3000);
            }
            else{
                $('#vacio').append(`
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                    <b>Something went wrong... Please Try Again </b>
                    </div>
                </div>
                `);

                setTimeout(cleanAlert, 2000);
            }
        }
    });


});