const work1 = document.querySelector("#myWork1");
work1.addEventListener("click", event => {
  const auth =  confirm("Are you sure you want to go to timer? ")
      if(!auth){
        event.preventDefault()
  }
})
const work2 = document.querySelector("#myWork2");
work2.addEventListener("click", event => {
  const auths =  confirm("Are you sure you want to go to Anime-fandom? ")
      if(!auths){
        event.preventDefault()
  }
})

const date = new Date()
const date1 = date.getDay()
const date2 = date.getMonth()
const date3 = date.getFullYear()
const dates = document.querySelector("#myDates")
dates.textContent = `${date1}/${date2}/${date3}`

console.log(window.innerWidth)