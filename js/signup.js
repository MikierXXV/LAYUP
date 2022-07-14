const url = "https://dbjson-webvic.herokuapp.com/users";

const cleanAlert = () => {
    $('#vacio').replaceWith(`<div id="vacio"></div>`);
}

$(window).on("load", () => {
    
    $("#enter").on("click", async() => {
        try{
            const user = $('#login-username').val();
            const password = $('#login-password').val();
            if(user === "" || password === ""){
                $('#vacio').append(`
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                    <b>Username</b> or <b>Password</b> wrong!<b>   Try Again </b>
                    </div>
                </div>
                `);
                setTimeout(cleanAlert, 2000);  
            }
            else{
                const { data } = await axios.get(`${url}?username=${user}&password=${password}`);
                console.log(data);
                console.log(data[0].password);

                if (data[0].username === user && data[0].password ===  password) {
                    $('#vacio').append(`
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div>
                        Welcome aboard ${user} !
                        <div> 
                            <b> Click to Return Home: </b>
                            <a href="../index.html" class="alert-link fa-solid fa-house"></a>
                        </div>
                        </div>
                    </div>
                    `);
                }
                console.log("hola")
            }
            
            //setTimeout(cleanAlert, 10000);
            
        } catch(error){
            console.log(error.message);

            $('#vacio').append(`
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                <b>Username</b> or <b>Password</b> wrong!<b>   Try Again </b>
                </div>
            </div>
            `);

            setTimeout(cleanAlert, 2000);
        }
    });


});