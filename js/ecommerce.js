function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const url = "https://dbjson-webvic.herokuapp.com/camisetas";
const urlc = "https://dbjson-webvic.herokuapp.com/compras";

const compras = [];

$(window).on("load", async() => {

    try{
        const { data } = await axios.get(`${url}`);
        console.log(data);
        var cantidad = [0,0,0,0];
        for (var i = 0; i < 4; i++){
            $("#main-wra").append(`
            <div class="col center pieza">
                <div class="card" style="width: 25rem; height: 726px;">
                    <div id="card${i}" id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="4000">
                            <img src= "${data[i].url_f}" class="${data[i].class}" alt="camiseta"></img>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img src= "${data[i].url_b}" class="${data[i].class}" alt="camiseta"></img>
                            </div>
                        </div>
                        <button id="botp${i}" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button id="botn${i}" class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].id}</h5>
                        <p class="card-text">${data[i].price}</p>
                        <div class="row">
                            <div class="col-4 center">
                                <button id="sum${i}" type="button" class="fa-solid fa-circle-plus btn btn-primary plus"></button>
                            </div>
                            <div class="col-4 center">
                                <input id="display${i}" type="text" class="display-num text-center" name="number" value="${cantidad[i]}" max="20">
                            </div>
                            <div class="col-4 center"> 
                                <button id="minus${i}" type="button" class="fa-solid fa-circle-minus btn btn-primary rest"></button>
                            </div>
                            <div class="col mt-4 text-center addChart">
                                <button id="buy${i}" type="button" class="btn btn-secondary boton">Add Chart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        }

        //activacion independiente de los botones next i prev de cada card

        $('#botp0').click(function(){
            $('#card0').carousel("prev");
        });

        $('#botn0').click(function(){
            $('#card0').carousel("next");
        });

        $('#botp1').click(function(){
            $('#card1').carousel("prev");
        });

        $('#botn1').click(function(){
            $('#card1').carousel("next");
        });

        $('#botp2').click(function(){
            $('#card2').carousel("prev");
        });

        $('#botn2').click(function(){
            $('#card2').carousel("next");
        });

        $('#botp3').click(function(){
            $('#card3').carousel("prev");
        });

        $('#botn3').click(function(){
            $('#card3').carousel("next");
        });
        

        //botones de suma de los diferentes carouseles 
        
        $('#sum0').on("click", async() => {
            try{
                cantidad[0] += 1;
                if (cantidad[0] > 20) cantidad[0] = 20;
                $('#display0').replaceWith(`<input id="display0" type="text" class="display-num text-center" name="number" value="${cantidad[0]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        $('#sum1').on("click", async() => {
            try{
                cantidad[1] += 1;
                if (cantidad[1] > 20) cantidad[1] = 20;
                $('#display1').replaceWith(`<input id="display1" type="text" class="display-num text-center" name="number" value="${cantidad[1]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })

        $('#sum2').on("click", async() => {
            try{
                cantidad[2] += 1;
                if (cantidad[2] > 20) cantidad[2] = 20;
                $('#display2').replaceWith(`<input id="display2" type="text" class="display-num text-center" name="number" value="${cantidad[2]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        $('#sum3').on("click", async() => {
            try{
                cantidad[3] += 1;
                if (cantidad[3] >= 20) cantidad[3] = 20;
                $('#display3').replaceWith(`<input id="display3" type="text" class="display-num text-center" name="number" value="${cantidad[3]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })

        //botones de resta de los diferentes carouseles 

        $('#minus0').on("click", async() => {
            try{
                cantidad[0] -= 1;
                if (cantidad[0] < 0) cantidad[0] = 0;
                $('#display0').replaceWith(`<input id="display0" type="text" class="display-num text-center" name="number" value="${cantidad[0]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })

        $('#minus1').on("click", async() => {
            try{
                cantidad[1] -= 1;
                if (cantidad[1] < 0) cantidad[1] = 0;
                $('#display1').replaceWith(`<input id="display1" type="text" class="display-num text-center" name="number" value="${cantidad[1]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        $('#minus2').on("click", async() => {
            try{
                cantidad[2] -= 1;
                if (cantidad[2] < 0) cantidad[2] = 0;
                $('#display2').replaceWith(`<input id="display2" type="text" class="display-num text-center" name="number" value="${cantidad[2]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        $('#minus3').on("click", async() => {
            try{
                cantidad[3] -= 1;
                if (cantidad[3] < 0) cantidad[3] = 0;
                $('#display3').replaceWith(`<input id="display3" type="text" class="display-num text-center" name="number" value="${cantidad[3]}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })

        //botones de compra de los diferentes carouseles 

        $('#buy0').on("click", async() => {
            try{
               var precio = 40;
               var product = {
                    id: "Denis",
                    cantidad: cantidad[0],
                    precio: precio,
                    total: cantidad[0]*precio
               }
               compras.push(product);
            }catch(error){
                console.log(error);
            }
        })

        $('#buy1').on("click", async() => {
            try{
                var precio = 50;
                var product = {
                        id: "Lebron",
                        cantidad: cantidad[1],
                        precio: precio,
                        total: cantidad[1]*precio
                }
                compras.push(product);
            }catch(error){
                console.log(error);
            }
         })

         $('#buy2').on("click", async() => {
            try{
                var precio = 80;
                var product = {
                     id: "Michael",
                     cantidad: cantidad[2],
                     precio: precio,
                     total: cantidad[2]*precio
                }
                compras.push(product);
            }catch(error){
                console.log(error);
            }
         })

         $('#buy3').on("click", async() => {
            try{
                var precio = 70;
                var product = {
                     id: "Mamba",
                     cantidad: cantidad[3],
                     precio: precio,
                     total: cantidad[3]*precio
                }
                compras.push(product);
            }catch(error){
                console.log(error);
            }
         })

        //boton de confirmacion compra

         $('#confirm').on("click", async() => {
            try{
                if (compras.length !== 0){
                    var id = create_UUID();
                    var compra = {
                        id: id,
                        list: compras
                    }
                    axios.post(`${urlc}`, compra)
                    .then(response => {
                        $("#confirm").replaceWith(`<button id="confirm" type="button" class="fa-solid fa-check-to-slot fa-2xl btn btn-success icono-derecha pt-2" data-bs-toggle="tooltip" data-bs-placement="bottom ps-5" title="Confirm purchase"></button>`);
                    })
                    .catch(err => {
                        $("#confirm").replaceWith(`<button id="confirm" type="button" class="fa-solid fa-check-to-slot fa-2xl btn btn-danger icono-derecha pt-2" data-bs-toggle="tooltip" data-bs-placement="bottom ps-5" title="Confirm purchase"></button>`);
                    })
                }else{
                     $("#confirm").replaceWith(`<button id="confirm" type="button" class="fa-solid fa-check-to-slot fa-2xl btn btn-danger icono-derecha pt-2" data-bs-toggle="tooltip" data-bs-placement="bottom ps-5" title="Confirm purchase"></button>`);
                }

            }catch(error){
                console.log(error);
            }
        })
        
    } catch(error){
    }
});
