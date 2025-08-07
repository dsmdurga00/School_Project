const schools = [
    
    { 
        name: "Hilton Matriculation Higher Secondary School", 
        type: "StateBoard", 
        rating: 4.5, 
        location: "11, 4th Cross Rd, East, Chromepet, Chennai, Tamil Nadu 600044 ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps/dir//7,+Works+Road,+New+Colony,+Shankar+Nagar,+Chromepet,+Chennai,+Tamil+Nadu+600044/@12.955355,80.0541866,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525fb10da84611:0xb770b4d760a9583b!2m2!1d80.1365837!2d12.9553502?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
      },
      { 
        name: "The Lords’ International School	", 
        type: "ICSE", 
        rating: 3.9, 
        location: "#8, Vadivel Street, West Tambaram,Chennai – 600 045",
        activity: "Sports, Cultural",
        link: "http://www.lordsinternationalschool.com/",
        link1: "https://www.google.co.in/maps/dir//428%2F1,+Munu+Adhi+Road,+Samathuva,+Kishkintha+Main+Rd,+Periyar+Nagar+West,+Chennai,+Tamil+Nadu+600063/@12.943807,80.0119893,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52f57ea3fc9d01:0xea2141824178c3ec!2m2!1d80.0943912!2d12.9438199?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
      },
    { 
      name: "A. K. T. Memorial Vidya Saaket School", 
      type: "CBSE", 
      rating: 4.2, 
      location: " Neelamangalam village kallakurichi - post, villupuram Distt., Tamilnadu,- 606202",
      activity: "Sports, Cultural",
      link: "https://www.aktcbse.com",
      link1: "https://www.google.co.in/maps/dir//Kallakurichi-Virugavoor+Rd,+Neelamangalam,+Tamil+Nadu+606213/@11.7403633,78.9008799,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bab6719b20d6ecf:0x45bfe1da8bc3285c!2m2!1d78.9832313!2d11.7403853?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "The Blue Mountains School", 
        type: "ICSE", 
        rating: 3.9, 
        location: "Dilkhush Mahal,Ootacamund 643 001,The Nilgiris, Tamil Nadu	",
        activity: "Sports, Cultural",
        link: "http://www.bluemountainsschool.com/",
        link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zq3ij7-UtFPX-ySbu5f_7_SFeuLxA:1746822042904&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiGVRoZSBCbHVlIE1vdW50YWlucyBTY2hvb2wyCxAuGIAEGMcBGK8BMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIrgRQAFgAcAB4AJABAJgBjQGgAY0BqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAKYAZgDALoGBggBEAEYFJIHAzAuMaAH9QqyBwMwLjG4B5gB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVO9w6sglqg7MeVgPgNzrk1S&daddr=Dilkhush+Mahal,+Davisdale,+Ooty,+Tamil+Nadu+643001" 
      },
    { 
      name: "Abs Vidhya Mandhir", 
      type: "CBSE", 
      rating: 4.8, 
      location: "Thalakancherry road, iveli agaram, thiruvallur,",
      activity: "Sports, Cultural",
      link: "https://www.absvidhyamandhir.org",
      link1: "https://www.google.co.in/maps/dir//Thalakanchery+Road,+Iveli+Agaram,+Veera+Raghva+Nagar,+Ikkadu,+Tamil+Nadu+602021/@13.1513289,79.8225882,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52900efe3369ed:0x7f39c105d850e41a!2m2!1d79.9050288!2d13.1513439?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    
    { 
        name: "Annai Violet Matriculation & Higher Secondary School", 
        type: "StateBoard", 
        rating: 4.5, 
        location: "1, 5th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040  ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zqYShldEuXl-o-lFtEmWNk-So4bAQ:1746822128582&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiNEFubmFpIFZpb2xldCBNYXRyaWN1bGF0aW9uICYgSGlnaGVyIFNlY29uZGFyeSBTY2hvb2wyCBAAGIAEGMkDMgsQABiABBiSAxiKBTILEC4YgAQYxwEYrwEyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgIQJjICECYyCBAAGIAEGKIESIYDUABYAHAAeACQAQCYAYkBoAGJAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACkQGYAwCSBwMwLjGgB_wRsgcDMC4xuAeRAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcGqD7UCX1I6MVeVDGtR9Zlx&daddr=7,+Violet+Matriculation+School+Anna+Nagar,+Vaidhyalingam+Salai,+Sudha+Avenue,+Chitlapakkam,+Chennai,+Tamil+Nadu+600064"
      },
      { 
        name: "Excel Central School	", 
        type: "ICSE", 
        rating: 3.0, 
        location: "17-190A, Awai Farm Lane,Thiruvattar – 629177,Tamil Nadu.	",
        activity: "Sports, Cultural",
        link: "http://excelschools.edu.in/excelcentral/index.html",
        link1: "https://www.google.co.in/maps/dir/13.0688722,80.2209766/Excel+Central+School,+17%2F190A,+Awai+Farm+Lane,+Thiruvattaru,+Tamil+Nadu+629177/@10.6559646,76.0996575,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3b04551498bed9db:0x86a21fc389c8c6f!2m2!1d77.263509!2d8.3344954?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
      },
    
      { 
        name: " Sri Sankara Matriculation School", 
        type: "StateBoard", 
        rating: 4.0, 
        location: "40, Vivekananda St, Thoraipakkam, Chennai, Tamil Nadu 600041  ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps/dir/13.0688722,80.2209766/Sri+Sankara+Matric+Higher+Secondary+School,+B1,+51st+Cross+St,+Thiruvalluvar+Nagar,+Thiruvanmiyur,+Chennai,+Tamil+Nadu+600041/@13.0230018,80.1906454,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525d4483846aef:0x4620c75fd6b40bab!2m2!1d80.2595128!2d12.9768432?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
      },
        { 
      name: "Acharya Mahashraman Terapanth Jain Public School", 
      type: "CBSE", 
      rating: 3.9, 
      location: "57 & 58/1, THATTANKULAM ROAD, MADHAVARAM, CHENNAI, TAMILNADU,",
      activity: "Sports, Cultural",
      link: "https://www.amtjainpublicschool.com",
      link1: "https://www.google.co.in/maps/dir/13.0643872,80.221121/ACHARYA+MAHASHRAMAN+TERAPANTH+JAIN+PUBLIC+SCHOOL,+Jain+Terapanth+School+Industry,+21,+Thattankulam+Rd,+Lotus+Colony,+J+Garden,+Madhavaram+Milk+Colony,+Chennai,+Tamil+Nadu+600060/@13.1046867,80.1702096,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5265f32881f99b:0xf0087580a9d1b9b8!2m2!1d80.2286515!2d13.1421696?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
    },
    { 
        name: " Sishya school	", 
        type: "ICSE", 
        rating: 4.9, 
        location: "15, Padmanabha Nagar,Adyar, Chennai-600020		",
        activity: "Sports, Cultural",
        link: "http://www.sishya.com/",
        link1: "https://www.google.co.in/maps/dir/13.0643872,80.221121/Sishya+School,+New+2,+2nd+St,+Padmanabha+Nagar,+Chennai,+Tamil+Nadu+600020/@13.0366294,80.2009364,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5267ec2cf3775d:0xc4fe9934a6718f74!2m2!1d80.2589773!2d13.0052046?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
      },
      { 
        name: "  Sri Mylai Karpagavalli Matriculation Higher Secondary School", 
        type: "StateBoard", 
        rating: 4.0, 
        location: "45, 1st Cross St, Adyar, Chennai, Tamil Nadu 600020   ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zq_ojoh8UDRSp-5EvOX_tYkOnqHvg:1746822344055&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiPSBTcmkgTXlsYWkgS2FycGFnYXZhbGxpIE1hdHJpY3VsYXRpb24gSGlnaGVyIFNlY29uZGFyeSBTY2hvb2wyBhAAGBYYHjICECZI7wlQoAZYoAZwAXgAkAEAmAFtoAFtqgEDMC4xuAEDyAEA-AEB-AECmAICoAJ5qAISwgIHECMYJxjqAsICHBAuGIAEGEMYtAIYxwEYyAMYigUY6gIYrwHYAQHCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBmAMJ8QVw68LsNEqSyroGBggBEAEYCJIHAzEuMaAHqQKyBwMwLjG4B3A&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWvmJrTzZ1I6MSXUI0Xd76Eh&daddr=90a,+1st+Cross+St,+Shastri+Nagar,+Adyar,+Chennai,+Tamil+Nadu+600020" 
      },
    { 
      name: "Agarwal Vidyalaya And Junior College", 
      type: "CBSE", 
      rating: 4.5, 
      location: "NO.54, EVK SAMPATH ROAD, VEPERY, CHENNAI,",
      activity: "Sports, Cultural",
      link: "http://www.agarwalvidyalaya.com/",
      link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zqgXHKgFX6CxeZ2pmOm3MRwyz7MSg:1746822390052&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJEFnYXJ3YWwgVmlkeWFsYXlhIEFuZCBKdW5pb3IgQ29sbGVnZTIOEC4YgAQYxwEYjgUYrwEyBRAAGIAEMgsQABiABBiGAxiKBTIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIdEC4YgAQYxwEYjgUYrwEYlwUY3AQY3gQY4ATYAQFIrgpQhQZYhQZwAXgAkAEAmAGGAaAB4AGqAQMxLjG4AQPIAQD4AQL4AQGYAgKgApoBwgIHEAAYsAMYHsICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogTCAgsQABiwAxiiBBiJBcICCBAAGLADGO8FmAMAiAYBkAYIugYGCAEQARgUkgcDMS4xoAejDrIHAzAuMbgHlQE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KX09aGfiZVI6MaSdltDtGQ0V&daddr=54,+E+VK+Sampath+Rd,+Periamet,+Vepery,+Chennai,+Tamil+Nadu+600007" 
    },
    
    { 
        name: "  Maharishi Vidya Mandir Senior Secondary School", 
        type: "StateBoard", 
        rating: 4.0, 
        location: "19, 5th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040   ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps/dir/13.0688722,80.2209766/MAHARISHI+VIDYA+MANDIR+SENIOR+SECONDARY+SCHOOL,+Old+No.+4,+New+No.+13,+R,+T.+Mudali+St,+Baker+Street,+Choolai,+Chennai,+Tamil+Nadu+600112/@13.0767223,80.2031995,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5265fc14107185:0x40f3189c473ba65f!2m2!1d80.2694572!2d13.0870442?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
      },
      { 
        name: " Abacus Montessori School", 
        type: "ICSE", 
        rating: 4.1, 
        location: "3 Thirumalai Nagar Annexe III Main Road,Perungudi, Chennai 600 096",
        activity: "Sports, Cultural",
        link: "http://www.abacusnow.com/",
        link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zqRJQvWGsVpwyDXdXVAQwIQQiDVVQ:1746822439774&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiGSBBYmFjdXMgTW9udGVzc29yaSBTY2hvb2wyDhAuGIAEGMcBGMkDGK8BMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIdEC4YgAQYxwEYyQMYrwEYlwUY3AQY3gQY4ATYAQFIpQhQAFgAcAB4AJABAJgBggGgAYIBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAKYAZgDALoGBggBEAEYFJIHAzAuMaAHpg2yBwMwLjG4B5gB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZ_sAssPXVI6MVLzGsRYSSkK&daddr=3,+Thirumalai+Nagar+Annexe+III+Main+Road,+Phase-2,+Thirumalai+Nagar+Annexe,+Perungudi,+Chennai,+Tamil+Nadu+600096" 
      },
      { 
        name: "  Vana Vani Matriculation Higher Secondary School", 
        type: "StateBoard", 
        rating: 3.5, 
        location: "4, 10th Street, Kodambakkam, Chennai, Tamil Nadu 600031  ",
        activity: "Sports, Cultural",
        link: "https://www.statecommonboard.org/",
        link1: "https://www.google.co.in/maps?sca_esv=31cd4d2547bda482&sxsrf=AHTn8zreEgmu3ibzwXAlblbBI9LOTIfiXA:1746822495451&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiMCBWYW5hIFZhbmkgTWF0cmljdWxhdGlvbiBIaWdoZXIgU2Vjb25kYXJ5IFNjaG9vbDIOEC4YgAQYxwEYjgUYrwEyBRAAGIAEMgYQABgWGB4yAhAmMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIFEAAY7wUyCBAAGIAEGKIEMh0QLhiABBjHARiOBRivARiXBRjcBBjeBBjgBNgBAUinBFAAWABwAHgAkAEAmAGZAaABmQGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAq0BmAMAugYGCAEQARgUkgcDMC4xoAe4DLIHAzAuMbgHrQE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcuY2pHsZ1I6MVk1zvM5FXS1&daddr=D7,+Banyan+Ave,+Indian+Institute+Of+Technology,+Chennai,+Tamil+Nadu+600036" 
      },
  ];
  
  function searchSchools() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filterType = document.getElementById("typeFilter").value;
    const locationInput = document.getElementById("locationInput").value.toLowerCase();
    
  
  
    const results = schools.filter(school => {
      const matchName = school.name.toLowerCase().includes(searchInput);
      const matchType = filterType === "all" || school.type === filterType;
      const matchLocation = school.location.toLowerCase().includes(locationInput);
      
      return matchName && matchType && matchLocation;
    });
  
    displaySchools(results);
  }
  
  function displaySchools(schoolArray) {
    const listContainer = document.getElementById("schoolList");
    listContainer.innerHTML = "";
  
    if (schoolArray.length === 0) {
      listContainer.innerHTML = "<p>No schools found.</p>";
      return;
    }
  
    schoolArray.forEach(school => {
      const card = document.createElement("div");
      card.className = "school-card";
      card.innerHTML = `
        <h3>${school.name}</h3>
        <p><strong>Type:</strong> ${school.type}</p>
        <p><strong>Rating:</strong> ⭐ ${school.rating}</p>
        <p><strong>Location:</strong> 📍 ${school.location}</p>
        <p><strong>Activity:</strong> 💪 ${school.activity}</p>
        <a href="${school.link}" target="_blank" class="visit-button">Visit Website</a>
        <a href="${school.link1}" target="_blank" class="visit-button">Location</a>
		
      `;
      listContainer.appendChild(card);
    });
  }
  
  displaySchools(schools);

  document.getElementById("resetBtn").addEventListener("click", () => {
    // Clear all input fields
    document.getElementById("searchInput").value = "";
    document.getElementById("typeFilter").value = "all";
    
    const locationInput = document.getElementById("locationInput");
    if (locationInput) locationInput.value = "";
  
    // Re-display all schools
    displaySchools(schools);
  });
  
    
  