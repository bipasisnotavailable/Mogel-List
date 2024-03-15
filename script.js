document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const tagFilter = document.getElementById("tag-filter");


    const products = [
        {
            "name": "Sigma Next Gen",
            "price": "Free",
            "tags": ["Free", "Rage"],
            "image": "https://media.discordapp.net/attachments/1204701013898952704/1204790901205893120/icon.png?ex=65d603f6&is=65c38ef6&hm=80272c06b5172500d350a4835448dea469d53f67061a8e076e1cfb48bc4b9c4b&=&format=webp&quality=lossless",
            "link": "https://discord.gg/fuXyJVDC4Q"
        },
        {
            "name": "Tarasande",
            "price": "Free",
            "tags": ["Free", "Ghost", "Rage", "Lunar", "Fabric", "Latest"],
            "image": "https://github.com/Sumandora/tarasande/blob/1.20.4/media/GUI.png?raw=true",
            "link": "https://www.youtube.com/watch?v=j-1JYsbfMqE"
        },
        {
            "name": "LiquidBounce Next Gen",
            "price": "Free",
            "tags": ["Free", "Rage", "Lunar", "Fabric", "Latest"],
            "image": "https://liquidbounce.net/img/screenshots/clickgui-large.png",
            "link": "https://liquidbounce.net/"
        },
        {
            "name": "LiquidBounce Legacy",
            "price": "Free",
            "tags": ["Free", "Rage", "Forge", "1.8.9"],
            "image": "https://liquidbounce.net/img/logos/favicon.png",
            "link": "https://liquidbounce.net/"
        },
        {
            "name": "Rise",
            "price": "$29",
            "tags": ["Rage", "1.8.9"],
            "image": "https://www.9minecraft.net/wp-content/uploads/2022/11/Rise-Client-Screenshots-9.jpg",
            "link": "https://riseclient.com/"
        },
        {
            "name": "Novoline.lol",
            "price": "$19.99",
            "tags": ["Rage", "1.8.9"],
            "image": "https://media.karousell.com/media/photos/products/2022/12/31/novolinelol_client_minecraft_c_1672506329_9b5006b5",
            "link": "https://novoline.lol/"
        },
        {
            "name": "Moon",
            "price": "20€",
            "tags": ["Rage", "1.8.9"],
            "image": "https://avatars.githubusercontent.com/u/74458862?s=280&v=4",
            "link": "https://moonx.gg/"
        },
        {
            "name": "Raven b+",
            "price": "Free",
            "tags": ["Free", "Ghost", "Forge", "1.8.9"],
            "image": "https://avatars.githubusercontent.com/u/88325435?s=280&v=4",
            "link": "https://github.com/Kopamed/Raven-bPLUS"
        },
        {
            "name": "Vape",
            "price": "$34.99",
            "tags": ["Ghost", "Injection", "1.8.9"],
            "image": "https://i.ytimg.com/vi/SDkuPkgqLzg/maxresdefault.jpg",
            "link": "https://www.vape.gg/"
        },
        {
            "name": "FDP-Client",
            "price": "Free",
            "tags": ["Free", "Rage", "Forge", "1.8.9"],
            "image": "https://fdpinfo.github.io/img/blue.png",
            "link": "https://www.youtube.com/watch?v=6m58-NJRR9M"
        },
        {
            "name": "Wurst",
            "price": "Free",
            "tags": ["Free", "Fabric", "Latest"],
            "image": "https://wurst.wiki/_media/logo/wurst_logo_800_dark.png",
            "link": "https://www.wurstclient.net/download/"
        },
        {
            "name": "Breeze",
            "price": "$29.99",
            "tags": ["1.8.9", "Rage", "Ghost", "Forge"],
            "image": "https://i.ytimg.com/vi/Niuo55a1-us/mqdefault.jpg",
            "link": "https://breeze.rip/"
        },
        {
            "name": "Augustus",
            "price": "80€",
            "tags": ["1.8.9", "Rage"],
            "image": "https://spezz.exchange/store/uploads/monthly_2023_09/Augustus_Logo.webp.21990eea9fead38fbc9edfbc54b0a112.webp",
            "link": "https://spezz.exchange/store/store/product/191-augustus-client-lifetime/"
        },
        {
            "name": "Aqua",
            "price": "15€",
            "tags": ["1.8.9", "Rage"],
            "image": "https://minecraft-clients.de/cdn/shop/products/Screenshot_20230124_184643_772fa0dd-2340-495d-b540-83443efa5f84_1024x1024.png?v=1675532235",
            "link": "https://minecraft-clients.de/products/aqua-client-1"
        },
        {
            "name": "Peter",
            "price": "30€",
            "tags": ["1.8.9", "Rage"],
            "image": "https://minecraft-clients.de/cdn/shop/products/Peter2_480x.jpg?v=1644516280",
            "link": "https://minecraft-clients.de/products/prestige-client"
        },
        {
            "name": "Prestige",
            "price": "20€",
            "tags": ["1.8.9", "Rage"],
            "image": "https://minecraft-clients.de/cdn/shop/files/Screenshot2023-11-05202640_720x.png?v=1699212443",
            "link": "https://minecraft-clients.de/products/peter-minecraft-client"
        },
        {
            "name": "Karma",
            "price": "?",
            "tags": ["1.8.9", "Ghost", "Injection"],
            "image": "https://karma.rip/assets/images/UI/karma_2.png",
            "link": "https://karma.rip/"
        },
        {
            "name": "Dream Advanced",
            "price": "?",
            "tags": ["1.8.9", "Ghost", "Injection"],
            "image": "https://dreamclient.xyz/img/preview.b842fb8c.png",
            "link": "https://dreamclient.xyz"
        }
    ];


    products.forEach(product => {
        renderProduct(product);
        populateTagFilter(product.tags);
    });


    function renderProduct(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.style.backgroundImage = `url('${product.image}')`;
        productDiv.setAttribute('onclick', `window.open('${product.link}', '_blank')`);
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Tags: ${product.tags.join(", ")}</p>
        `;
        productList.appendChild(productDiv);
    }

 
    function populateTagFilter(tags) {
        const existingTags = Array.from(tagFilter.options).map(option => option.text);
        
        tags.forEach(tag => {
            if (!existingTags.includes(tag)) {
                const option = document.createElement("option");
                option.text = tag;
                tagFilter.add(option);
            }
        });
    }
    

    tagFilter.addEventListener("change", function() {
        const selectedTag = tagFilter.value;
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const tags = product.querySelector("p:nth-of-type(2)").textContent.split(":")[1].trim().split(", ");
            if (tags.includes(selectedTag) || selectedTag === "Alle") {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
