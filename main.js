const personButton = document.querySelector('#personButton')
const vehicleButton = document.querySelector('#vehicleButton')
const beep = new Audio ('sounds/beep-027.mp3')
const callBtn = document.querySelector('#call-button')

let persons = [
    {
        'name':"Michael Loucks",
        'DOB':new Date('1987-05-02'),
        'address':"123 North lane, Groom, Colorado, 7645",
        'priorContact':'Citation Speeding 45/20',
        "licenseStatus": "Suspended"
    },
    {
        'name':"James Johnson",
        'DOB':new Date('1987-05-02'),
        'address':"123 North lane, Groom, Colorado, 7645",
        'priorContact':'Citation Speeding 45/20'
    }
]

let vehicles = [
    {
        'make': "Chevy",
        'model': "Silverado",
        'color': "Red",
        'regNumber': "PAR-600",
        'insurance' : "valid",
        'regStatus' : "Expired"
    }
]

let calls = [
    {
        'description':"Traffic Stop",
        'priority':"3",
        'location':"12 Hampton Rd"
    },
    {
        'description':"Traffic Accident",
        'priority':"2",
        'location':"14 Ross Rd"
    },
    {
        'description':"Motorist Assist",
        'priority':"3",
        'location':"123 Street"
    },
    {
        'description':"Domestic Dispute",
        'priority':"1",
        'location':"200 South St"
    },
    {
        'description':"Traffic Stop",
        'priority':"3",
        'location':"1 Red Ave, South Lane"
    },
    {
        'description':"Theft",
        'priority':"2",
        'location':"11 James Loop"
    },
    {
        'description':"Traffic Accident",
        'priority':"2",
        'location':"1800 Block South West"
    },
    {
        'description':"Fight In Progress",
        'priority':"1",
        'location':"1111 Gray Street"
    }
]



personButton.addEventListener('click', function (){
    const nameInput = document.querySelector('#person-search').value
    let personName = document.querySelector('#person-name')
    let personAddress= document.querySelector('#person-address')
    let personPrior= document.querySelector('#person-prior')
    let personLicense = document.querySelector('#person-license')

    if (nameInput === persons[0].name){
        personName.innerHTML = persons[0].name
        personAddress.innerHTML = persons[0].address
        personPrior.innerHTML = persons[0].priorContact
        personLicense.innerHTML = persons[0].licenseStatus
        if(persons[0].licenseStatus = "Suspended"){
            beep.play()
            personLicense.style.color = "red"
        }
    }
})

vehicleButton.addEventListener('click', function (){
    const vehicleInput = document.querySelector('#vehicle-search').value
    let vehicleMake = document.querySelector('#vehicle-make')
    let vehicleModel = document.querySelector('#vehicle-model')
    let vehicleColor = document.querySelector('#vehicle-color')
    let vehicleRegStatus = document.querySelector('#vehicle-regStatus')
    let vehicleInsuranceStatus = document.querySelector('#vehicle-insuranceStatus')
    let vehicleRegNumber = document.querySelector('#vehicle-regNum')

    if (vehicleInput === vehicles[0].regNumber){
        vehicleMake.innerHTML = vehicles[0].make
        vehicleModel.innerHTML = vehicles[0].model
        vehicleColor.innerHTML = vehicles[0].color
        vehicleRegStatus.innerHTML = vehicles[0].regStatus
        vehicleInsuranceStatus.innerHTML = vehicles[0].insurance
        if (vehicles[0].insurance === "Expired"){
            beep.play()
            vehicleInsuranceStatus.style.color = "red"
        }
        if (vehicles[0].regStatus === "Expired"){
            beep.play()
            vehicleRegStatus.style.color = "red"
        }
    }else{
        console.log("NOT FOUND")
    }
})
callBtn.addEventListener('click', function(){
    const dallasAPI = "https://www.dallasopendata.com/resource/9fxf-t2tr.json"
    var table = document.getElementById('myTable')

    fetch(dallasAPI)
        .then ((res)=>res.json())
        .then ((data)=>{
            for(i = 0; i <= 25; i++){
                var row = `<tr>
                        <td>${data[i].nature_of_call}</td>
                        <td>${data[i].location}</td>
                        <td>${data[i].priority}</td>
                        <td>${data[i].unit_number}</td>
                  </tr>`
        table.innerHTML += row
            }
        })
            
        
})

//     buildTable(calls)

// function buildTable(data){
//     var table = document.getElementById('myTable')

//     for (var i = 0; i < data.length; i++){
        // var row = `<tr>
        //                 <td>${data[i].description}</td>
        //                 <td>${data[i].location}</td>
        //                 <td>${data[i].priority}</td>
        //           </tr>`
        // table.innerHTML += row


//     }
// }



