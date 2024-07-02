/* Añandiendo los cursos a la section course-section*/
const courseElement = document.querySelector("#course-section");

const course = [
    {
        img: "./images/figma.png",
        title: "Learn Figma",
        paragraph: "By Christopher Morgan",
        imgClock: "./images/clock.png",
        hour: "6h 30min",
        imgFlame: "./images/flame.png",
        phareFlame: "4.9",
        alt:"figma-logo",
        boton: "View Course"
    },
    {
        img: "./images/analog-photography.png",
        title: "Analog photography",
        paragraph: "By Gordon Norman",
        imgClock: "./images/clock.png",
        hour: "3h 15min",
        imgFlame: "./images/flame.png",
        phareFlame: "4.7",
        alt:"analog-logo",
        boton: "View Course"
    },
    {
        img: "./images/instagram.png",
        title: "Master Instagram",
        paragraph: "By Sophine Gill",
        imgClock: "./images/clock.png",
        hour: "7h 40min",
        imgFlame: "./images/flame.png",
        phareFlame: "4.6",
        alt:"instagram-logo",
        boton: "View Course"
    },
    {
        img: "./images/pencil.png",
        title: "Basics of drawing",
        paragraph: "By Jean Tate",
        imgClock: "./images/clock.png",
        hour: "11h 30min",
        imgFlame: "./images/flame.png",
        phareFlame: "4.8",
        alt:"pencil-logo",
        boton: "View Course"
    },
    {
        img: "./images/ps.png",
        title: "Photoshop - Essence",
        paragraph: "By David Green",
        imgClock: "./images/clock.png",
        hour: "5h 35min",
        imgFlame: "./images/flame.png",
        phareFlame: "4.7",
        alt:"ps-logo",
        boton: "View Course"
    }
];

const displayCourse = (course) => {
    course.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("learn")
        div.innerHTML = `
        <img src="${course.img}" alt="${course.alt}" loading="lazy" class="course-img">
        <div class="subtitle">
            <h3 class="title">${course.title}</h3>
            <p class="paragraph">${course.paragraph}</p>
        </div>
        <p class="time"><span class="time-clock"><img src="${course.imgClock}" alt="clock" loading="lazy"></span> ${course.hour}</p>
        <p class="flame"><span class="flame-icon"><img src="${course.imgFlame}" alt="flame" loading="lazy"></span>${course.phareFlame}</p>
        <button class="boton">${course.boton}</button>
        `;
        courseElement.appendChild(div)
    });
}

displayCourse(course);

// Agregando animacion a la campana de notificaciones

const badge = document.querySelector('.notification-bell .badge');
let count = 0;

// Función para actualizar el contador y el contenido de .badge
const actualizarContador = () => {
  count++;
  badge.textContent = count.toString();
}

// Añadir evento 'mouseover' a .notification-bell
document.querySelector('.notification-bell').addEventListener('mouseover', () => {
  actualizarContador();
});




/* Creacion de mi grafico usando la libreria chart.js */

let grafico = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(grafico,{
type :"line",
data:{
    labels: ["mon","tue","wed","thu","fri","sat","sun"],
    datasets:[
        { 
        label: "statistics",    
        backgroundColor:"rgb(0,0,0)",
        data:[0,1.5,2.5,1,4,3,2],
        tension: 0.5,
        borderColor: 'rgb(0,0,0)'
    }
]
},
options: {
    scales:{
        y: {
            max: 5
        }
    }
}
}
)