// const Replicate = () => {
    // var shirts = [ 
    //     {
    //         url_f: "../images/denis.png" ,
    //         url_b: "../images/denis 2.png" ,
    //         id: "Denis",
    //         price: "40$",
    //         class:"card-img-top bg-black fotos"
    //     },
    //     {
    //         url_f: "../images/lebron.png",
    //         url_b: "../images/lebron 3.png" ,
    //         id: "Lebron",
    //         price: "50 $",
    //         class: "card-img-top"
    //     },
    //     {
    //         url_f: "../images/michael.png" ,
    //         url_b: "../images/michael 2.png",
    //         id: "Michael",
    //         price: "80 $",
    //         class: "card-img-top bg-black"
    //     },
    //     {
    //         url_f: "../images/natural tee.png" ,
    //         url_b:"../images/natural tee back.png",
    //         id: "Mamba-front",
    //         price: "70 $",
    //         class: "card-img-top"
    //     }
    // ]
    

//     shirts.forEach((element) => {
//         $("#main-wra").append(`
//         <div class="col center pieza">
//             <div class="card" style="width: 25rem; height: 726px;">
//                 <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
//                     <div class="carousel-inner">
//                         <div class="carousel-item " data-bs-interval="4000">
//                         <img src= "${element.url_f}" class="${element.class}" alt="camiseta"></img>
//                         </div>
//                         <div class="carousel-item" data-bs-interval="2000">
//                         <img src= "${element.url_b}" class="${element.class}" alt="camiseta"></img>
//                         </div>
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">${element.id}</h5>
//                     <p class="card-text">${element.price}</p>
//                     <div class="row">
//                         <div class="col-4 center">
//                             <button type="button" class="fa-solid fa-circle-plus btn btn-primary plus${i}""></button>
//                         </div>
//                         <div class="col-4 center">
//                             <input type="number" class="display-num text-center" name="number" value="0" max="20">
//                         </div>
//                         <div class="col-4 center"> 
//                             <button type="button" class="fa-solid fa-circle-minus btn btn-primary rest${i} ""></button>
//                         </div>
//                         <div class="col mt-4 text-center addChart">
//                             <button type="button" class="btn btn-secondary boton">Add Chart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`);
//     });;

// }

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const url = "https://dbjson-webvic.herokuapp.com/hoodies";
const urlc = "https://dbjson-webvic.herokuapp.com/compras";

const compras = [];

$(window).on("load", async() => {

    try{
        const { data } = await axios.get(`${url}`);
        console.log(data);
        var cantidad = 0;

        $("#main-wra").append(`
        <div class="col center pieza">
            <div class="card" style="width: 25rem; height: 726px;">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="4000">
                        <img src= "${data[0].url_f}" class="${data[0].class}" alt="camiseta"></img>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src= "${data[0].url_b}" class="${data[0].class}" alt="camiseta"></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${data[0].id}</h5>
                    <p class="card-text">${data[0].price}</p>
                    <div class="row">
                        <div class="col-4 center">
                            <button id="sum0" type="button" class="fa-solid fa-circle-plus btn btn-primary plus"></button>
                        </div>
                        <div class="col-4 center">
                            <input id="display0" type="text" class="display-num text-center" name="number" value="${cantidad}" max="20">
                        </div>
                        <div class="col-4 center"> 
                            <button id="minus0" type="button" class="fa-solid fa-circle-minus btn btn-primary rest"></button>
                        </div>
                        <div class="col mt-4 text-center addChart">
                            <button id="buy0" type="button" class="btn btn-secondary boton">Add Chart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
        

        
        $('#sum0').on("click", async() => {
            try{
                cantidad += 1;
                if (cantidad > 20) cantidad = 20;
                $('#display0').replaceWith(`<input id="display0" type="text" class="display-num text-center" name="number" value="${cantidad}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        
        $('#minus0').on("click", async() => {
            try{
                cantidad-= 1;
                if (cantidad < 0) cantidad = 0;
                $('#display0').replaceWith(`<input id="display0" type="text" class="display-num text-center" name="number" value="${cantidad}" max="20">`);
            }catch(error){
                console.log(error);
            }
        })
        
        $('#buy0').on("click", async() => {
            try{
               var precio = 40;
               var product = {
                    id: "HoddieGoat",
                    cantidad: cantidad,
                    precio: precio,
                    total: cantidad*precio
               }
               compras.push(product);
            }catch(error){
                console.log(error);
            }
        })

         $('#confirm').on("click", async() => {
            try{
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
            }catch(error){
                console.log(error);
            }
         })
    
        
    } catch(error){
        console.log(error);
    }
});
