const handleCategory = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const btnContainer = document.getElementById('btn-container');
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick = "handleLoadVid('${category.category_id}')" class="btn btn-neutral bg-slate-600">${category.category}</button>
        `;
        btnContainer.appendChild(div);
       
    })
  
    
   
};
const handleLoadVid = async(categoryId) => {
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML="";
    data.data?.forEach((videos) => {
        const postingDate = videos.others.posted_date;
        const finalDate = parseInt(postingDate);
        const noData = '';
       
        const div = document.createElement('div');
        div.innerHTML = `
        <figure><img class = '' src="${videos?.thumbnail}" alt="Shoes" /></figure>
         <p class = ' text-white bg-black '>${videos.others.posted_date?((videos.others.posted_date/3600).toFixed(0))  : '0' } hrs ${videos.others.posted_date?(((videos.others.posted_date%3600)/60).toFixed(0)):'0' } min ago</p>
          <div class="card-body flex ">
           <div class = "flex gap-3">
           <img class ='h-10 w-10 rounded-lg' src = ${videos?.authors[0]?.profile_picture}alt = 'pic'/>
           <h2 class="card-title">${videos.title}</h2>
           </div>
           <h1>${videos?.authors[0]?.profile_name}</h1>
           <p>${videos.others.views} Views</p>
          </div>
        `;
        cardContainer.appendChild(div)
    })

    if(data.data.length ===0){
        noVid.classList.remove('hidden')
      }
      else{
          noVid.classList.add('hidden')
      }
   
    
}

document.getElementById('btn-blg').addEventListener('click', function(){
    window.location.href = 'ans.html';
})

handleCategory();
handleLoadVid("1000");