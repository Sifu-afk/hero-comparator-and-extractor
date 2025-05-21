const search = document.getElementById('input')
const submit = document.getElementById('submit')

const name = document.getElementById('name')
const photo = document.getElementById('photo')
const stats = document.getElementById('stats')


submit.addEventListener('click', async() => {
    console.log('buttoon works')
    console.log(search.value)

    try{

        const res = await fetch(`https://superheroapi.com/api.php/18f875092e4ed2763919c4e1e71c3514/search/${search.value}`)
        const data = await res.json()
        console.log(data)


        name.innerHTML = `${data.results[0].name}`
        
        const img = data.results[0].image.url
        photo.setAttribute('src', img)

        stats.innerHTML = `combat: ${data.results[0].powerstats.combat} <br/>
        durability: ${data.results[0].powerstats.durability}<br/>
        intelligence: ${data.results[0].powerstats.intelligence}<br/>
        power: ${data.results[0].powerstats.power}<br/>
        speed: ${data.results[0].powerstats.speed}<br/>
        strength: ${data.results[0].powerstats.strength}`
        

        



    }catch(err){
        console.log(err)
        name.innerHTML = 'No shit found ling a ling nigga'

    }

    

})