(function(){

    'use strict';

    const detailsform = document.querySelector('#destination_detail_form');

    detailsform.addEventListener('submit', handelFormSubmit);

    function handelFormSubmit(event){
        event.preventDefault();

        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;

        for(let i=0;i<detailsform.length;i++){
            detailsform.elements[i].value = "";
        }

        const destCard = createDestinationCard(destName,destLocation,destPhoto,destDesc);

        const wishListContainer = document.getElementById('destination_container');

        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML="My Wish List";
        }

        //add the card...!
        document.querySelector('#destination_container').appendChild(destCard);

    }

    function createDestinationCard(name, location, photoURL, desc){
        
        const card=document.createElement("div");
        card.className='card';

        const img = document.createElement("img");
        const constantPhotoURL = "images/signpost.jpg";

        img.setAttribute('alt', name);

        if(photoURL.length === 0){
            img.setAttribute('src', constantPhotoURL);
        }
        else{
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className="card_body";

        const cardTitle = document.createElement('h3');
        cardTitle.innerText=name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement('h4');
        cardSubTitle.innerText=location;
        cardBody.appendChild(cardSubTitle);

        if(description.length !== 0 ){
            const cardText = document.createElement('p');
            cardText.className = "card_text";
            cardText.innerText = desc;
            cardBody.appendChild(cardText);
        }

        const cardDeletion = document.createElement('button');
        cardDeletion.innerText="Remove";

        cardDeletion.addEventListener("click",removeDestination);
        cardBody.appendChild(cardDeletion);

        card.appendChild(cardBody);

        return card;

    }

    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    }

})();

