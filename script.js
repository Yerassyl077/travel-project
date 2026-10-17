// Переносим базу данных прямо в код, чтобы работало локально
const travelData = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney",
            "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500",
            "description": "Sydney is known for its Sydney Opera House and beautiful beaches."
          },
          {
            "name": "Melbourne",
            "imageUrl": "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=500",
            "description": "Melbourne is famous for its cultural vibe and street art."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Taj Mahal",
        "imageUrl": "https://images.unsplash.com/photo-1564507592208-027040bd8319?w=500",
        "description": "An immense mausoleum of white marble, built in Agra by Mughal emperor Shah Jahan."
      },
      {
        "id": 2,
        "name": "Angkor Wat",
        "imageUrl": "https://images.unsplash.com/photo-1600806935759-4674eb995f5d?w=500",
        "description": "A stunning temple complex in Cambodia, the largest religious monument in the world."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora",
        "imageUrl": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=500",
        "description": "Known for its turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Maldives",
        "imageUrl": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500",
        "description": "A tropical paradise featuring stunning white-sand beaches and coral reefs."
      }
    ]
  };
  
  document.getElementById('btnSearch').addEventListener('click', searchDestination);
  document.getElementById('btnClear').addEventListener('click', clearResults);
  
  function searchDestination() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const resultsContainer = document.getElementById('searchResults');
      resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты
  
      let results = [];
  
      // Проверяем, что ввел пользователь
      if (input.includes('beach')) {
          results = travelData.beaches;
      } else if (input.includes('temple')) {
          results = travelData.temples;
      } else if (input.includes('country') || input.includes('countries')) {
          if (travelData.countries.length > 0) {
              results = travelData.countries[0].cities;
          }
      } else {
          resultsContainer.innerHTML = '<p>No recommendations found. Try searching for "beach", "temple", or "country".</p>';
          return;
      }
  
      // Выводим результаты
      results.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
              <img src="${item.imageUrl}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
          `;
          resultsContainer.appendChild(card);
      });
  }
  
  function clearResults() {
      document.getElementById('searchInput').value = '';
      document.getElementById('searchResults').innerHTML = '';
  }