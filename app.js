
const aboutContainer = document.getElementsByClassName ('aboutContainer');


// About Me Points
//================

// var aboutMePoints = [
//     { text: 'About Me', href: '/about'},
//     { text: 'Qualifications', href: '/quali'},
//     { text: 'CareerExperience', href: '/exp'},
//     { text: 'Certifications', href: '/cert'}, 
// ];

// About Me Points with Descriptions
var aboutMePoints = [
    {
        text: 'About Me',
        id:'abt',
        href: '/about',
        description: [
            'I am a front-end developer graduaged.',
            'from MERN Software Engineering Boot-Camp.'
        ]
    },
    {
        text: 'Qualifications',
        id:'qua',
        href: '/quali',
        description: [
            'Bachelor of Science in Information Systems.',
            'Certified JavaScript Developer.',
            'Advanced knowledge of web development.'
        ]
    },
    {
        text: 'Experience',
        id:'exp',
        href: '/exp',
        description: [
            'Worked at XYZ Corp for 3 years as a Front-End Developer.',
            'Currently working at ABC Inc as a Full-Stack Developer.',
            'Led multiple projects from concept to completion.'
        ]
    },
    {
        text: 'Certifications',
        id:'crt',
        href: '/cert',
        description: [
            'Certified Scrum Master.',
        ]
    }
];

// Iterate over the HTMLCollection
for (let container of aboutContainer) {
    // Iterate over the array of points
    let ul = document.createElement('ul');
    aboutMePoints.forEach((point) => {
        //console.log(point.id)
        idval=point.id;
        let a = document.createElement('a');   
        let li = document.createElement('li');
        //let ul = document.createElement('ul');
        a.setAttribute('href', point.href);
        a.setAttribute('id',idval);
        a.textContent = point.text;
        li.appendChild(a);
        ul.appendChild(li);
        container.appendChild(ul);
    });
}

////////////////////////////////////////////
//This code is used to find the all "a" elements  of the aboutContainer
const alist = document.querySelectorAll('.aboutContainer a');
// Add an event listener to each <a> element
alist.forEach(a => {
    a.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Get the text content of the clicked <a> element
        const clickedText = this.textContent;
        const clickid=this.id+'2';
        // Log the text content to the console
        qualDesc=getDescriptionByText(clickedText);
        // You can also perform any other actions you need with clickedText
        const careerDetails=document.querySelector('.careerDetailsContainer_1_Inside')
        //clear the content of the careerDetailsContainer_1_Inside div
        careerDetails.innerHTML = '';
        //creat a headding (a href) for the careerDetailsContainer_1_Inside
        let divHead=document.createElement('a');
        divHead.setAttribute('href', '#');
        divHead.setAttribute('id',clickid);
        divHead.textContent = clickedText;        
        careerDetails.appendChild(divHead);

        //Create a list element for the capture the descriptions
        let ul = document.createElement('ul');
        let id=1;
        
        qualDesc.forEach(qualification => {
             //create an anchor ref element for eact items in the decsription         
            let a = document.createElement('a');   
            let li = document.createElement('li');
            a.setAttribute('href', '#');
            a.setAttribute('id',id);
            a.textContent = qualification;
            li.appendChild(a);
            ul.appendChild(li);
            //Increment the ID by + 1 for the next element id
            id=id+1; 
        });     
        //add the ul to the careerDetailsContainer_1_Inside dive
        careerDetails.appendChild(ul);  
        
    });
});

//This function accept the value for the text and return the description array
function getDescriptionByText(text) {
    // Find the object with the matching text
    const item = aboutMePoints.find(point => point.text === text);
    // Return the description if found, otherwise return null or an appropriate message
    return item ? item.description : 'Description not found';
}


//////////////////////////////////////
//Create a poup window for 

const about = document.getElementById("abt");
const qua = document.getElementById("qua");
const exp = document.getElementById("exp");
const crt = document.getElementById("crt");

// Add event listener the BSc and call th popup window
about.addEventListener("click", function(event) {
  callPopup(event, about.textContent, about.textContent,
            "I'm a graduate of MERN Software Engineering Boot-Camp of the Per Scholas.");
});
// Add event listener the MSc and call th popup window
exp.addEventListener("click", function(event) {
  callPopup(event, exp.textContent, exp.textContent,
            "I have 4 years of industry experience in front-end and back-end development.");
});

// Add event listener the MSc and call th popup window
qua.addEventListener("click", function(event) {
    callPopup(event, qua.textContent, qua.textContent,
              "B.Sc. in Information Systems and a graduate of the MERN Software Engineering Boot-Camp of the Per Scholas");
  });


// Add event listener the Meta and call th popup window
crt.addEventListener("click", function(event) {
  callPopup(event, crt.textContent, crt.textContent,
            "Certified Scrum Master");
});



// Function to create and display the popup
function callPopup(event, title, heading, description) {

  event.preventDefault(); // Prevent the default link behavior  

  // Define the popup window dimensions
  const popupWidth = 400;
  const popupHeight = 300;

  // Calculate the position to center the popup on the screen
  const screenLeft = window.screenLeft || window.screenX;
  const screenTop = window.screenTop || window.screenY;  
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;

  const left = screenLeft + (screenWidth - popupWidth) / 2;
  const top = screenTop + (screenHeight - popupHeight) / 2;

  // Open the popup window at the calculated position
  const popupWindow = window.open("", "popupWindow", `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

  // Create the content for the popup window using the passed parameters
  const popupContent = `
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { font-size: 24px; }
          p { font-size: 16px; }
        </style>
      </head>
      <body>
        <h1>${heading}</h1>
        <p>${description}</p>
      </body>
    </html>
  `;

  // Write the content to the new window
  popupWindow.document.write(popupContent);
  // Ensure the content is properly loaded
  popupWindow.document.close();
}