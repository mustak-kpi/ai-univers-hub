const updatelode = async () => {
  const url = `  https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  updateData(data.data.tools);
}



const updateData = titles => {
  // console.log(titles)
  const maiinecontainer = document.getElementById('maine-container');
  maiinecontainer.innerHTML = '';
  if (titles.length > 8) {
    titles = titles.slice(0, 6);

  } else {
    console.log('no more data');
  }
  titles.forEach(phone => {
    const newDivTitles = document.createElement('div');
    newDivTitles.classList.add = 'col';
    newDivTitles.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top  p-4" alt="...">
    <div class="card-body">
    <h5 class="card-title">features</h5>
    <ul class=" features-titles">
      <li> ${phone.features[0]}</li>
      <li> ${phone.features[1]}</li>
      <li> ${phone.features[2]}</li>
      </ul>
      <hr>
      <h5>${phone.name}<h5>
      </div>    
      <div class=" titles p-4">
      <div>
      <i class="fa-solid fa-calendar-days"></i>
  <span>11/12/2022</span>
  </div>
  <button class="right-link-button">
  <i class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#lodeDataModal"></i>     
  </button>    
</div>
  </div>
  
  `;

    maiinecontainer.appendChild(newDivTitles);
  });
}


document.getElementById('see-more-btn').addEventListener('click', function () {
  const updatelode2 = async () => {
    const url = `  https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    updateData2(data.data.tools)
  }
  const updateData2 = allDAta => {
    // console.log(titles)
    const maiinecontainer = document.getElementById('maine-container');
    maiinecontainer.innerHTML = '';
    const showMoreButton = document.getElementById('see-more-btn');
    if (allDAta.length > 10) {
      showMoreButton.classList.add('d-none')
    } else {
      console.log('invlide');
    }
    allDAta.forEach(phone => {
      const newDivTitles = document.createElement('div');
      newDivTitles.classList.add = 'col';
      newDivTitles.innerHTML = `
      <div class="card">
      <img src="${phone.image}" class="card-img-top  p-4" alt="...">
      <div class="card-body">
      <h5 class="card-title">features</h5>
      <ul class=" features-titles">
        <li> ${phone.features[0]}</li>
        <li> ${phone.features[1]}</li>
        <li> ${phone.features[2]}</li>
        </ul>
        <hr>
        <h5>${phone.name}<h5>
        </div>    
        <div class=" titles p-4">
        <div>
        <i class="fa-solid fa-calendar-days"></i>
    <span>11/12/2022</span>
    </div>
    <button class="right-link-button">
    <i onclick ="lodeDataModal() " class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#lodeDataModal"></i>     
    </button>    
  </div>
    </div>
    
    `;

      maiinecontainer.appendChild(newDivTitles);
    });
  }

  updatelode2()
})

const lodeDataModal = async () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tool/01`
  const res = await fetch(url)
  const data = await res.json()
  lodeDataModalAll(data.data)
}

const lodeDataModalAll = dataAll => {
  console.log(dataAll)




  const datalistAll = document.getElementById('inpute-phones-name');
  datalistAll.innerHTML = `
  <div class="model-titles">
  <div>
  <h5 >${dataAll.description}</h5>
  <div class="price-titles">
  <p>${dataAll.pricing[0].price}</p>
  <p>${dataAll.pricing[1].price}</p>
  <p>${dataAll.pricing[2].price}</p>
  </div>
  <div class="model-tools">
  <div>
  <h5 class="card-title">features</h5>
  <ul class=" ">
  <li> ${dataAll.features[1].feature_name}</li>
  <li> ${dataAll.features[2].feature_name}</li>
  <li> ${dataAll.features[3].feature_name}</li>
  </ul>
  </div>
  <div>
  <h5 class="card-title">Integrations</h5>
  <ul class=" ">
  <li> ${dataAll.integrations[0]}</li>
  <li> ${dataAll.integrations[1]}</li>
  <li> ${dataAll.integrations[2]}</li>
  </ul>
  </div>
  
  </div>
  </div>
  
  <div>
  <img src="${dataAll.image_link[0]}" class="card-img-top" alt="...">
  <h1>${dataAll.input_output_examples[0].input}</h1>
  <P>${dataAll.input_output_examples[1].output}</P>
  </div>
  </div>
  `;
}

lodeDataModal()



updatelode()