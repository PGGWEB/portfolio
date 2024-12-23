import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

/* LOGO colț stânga sus */
const LOGO =
  "https://pggweb.ro/wp-content/uploads/2024/09/cropped-cropped-logo-perfect-1.webp";

/* 1) Bar - Conturi Social Media (max 25) */
const barSocialMedia = {
  labels: ["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube"],
  datasets: [
    {
      label: "Număr conturi administrate",
      data: [25, 15, 5, 8, 3],
      backgroundColor: "#ff5252",
    },
  ],
};

// 2) Line - Creștere Trafic SEO (Iul-Dec)
const lineSeoTraffic = {
  labels: ["Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Trafic organic (mii de vizite)",
      data: [12, 14, 16, 18, 23, 28],
      borderColor: "#ff5252",
      backgroundColor: "#ff525280",
      tension: 0.2,
    },
  ],
};

// 3) Line (2 linii) - Clienți Local vs Internațional
const lineClients = {
  labels: ["Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Clienți România",
      data: [40, 42, 45, 48, 50, 55],
      borderColor: "#ff5252",
      backgroundColor: "#ff525280",
      tension: 0.2,
    },
    {
      label: "Clienți Internațional",
      data: [15, 17, 18, 19, 22, 25],
      borderColor: "#ff9999",
      backgroundColor: "#ff999980",
      tension: 0.2,
    },
  ],
};

// 4) Bar - Campanii Ads Administrate (max 50)
const barAdsCampaigns = {
  labels: ["Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Campanii Ads Administrate",
      data: [20, 24, 28, 36, 40, 50],
      backgroundColor: "#ff5252",
    },
  ],
};

/* Opțiuni comune chart */
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#fff",
        font: { size: 14 },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#fff", font: { size: 13 } },
      grid: { color: "#555" },
    },
    y: {
      ticks: { color: "#fff", font: { size: 13 } },
      grid: { color: "#555" },
    },
  },
};

/* Portofoliu & imagini */
const portfolioData = [
  {
    category: "Site-uri proprii optimizate SEO",
    items: [
      "pggweb.ro",
      "optimizare-site-pro.ro",
      "creare-site-pro.ro",
      "online-development.com",
      "blog.pggweb.ro",
      "shop.pggweb.ro (în lucru, exemplu de magazin online)",
      "hoteluri-si-restaurante.ro (SEO: călătorii/restaurante)",
      "ghidul-tech.ro (SEO: tehnologie/gadgeturi)",
    ],
  },
  {
    category: "Proiecte complexe cu SEO tehnic și optimizare continuă",
    items: [
      "stingatoarebucuresti.ro (creare site, SEO, Google Ads - 3 ani)",
      "verificare-stingatoarebucuresti.ro (creare site, SEO, Google Ads - 3 ani)",
      "casare-stingatoarebucuresti.ro (creare site, SEO, Google Ads - 3 ani)",
    ],
  },
  {
    category: "Optimizare SEO tehnică și campanii punctuale",
    items: [
      "curatampeloc.ro (SEO + 400 cold emails)",
      "wings-education.ro (SEO one-time)",
      "romaniagarden.ro (SEO + cold emails)",
      "welcomehub.ro (optimizare SEO punctual)",
      "legalup.ro (plan strategic SEO - subcontractori)",
      "rotresort.ro (SEO activă - subcontractori)",
      "happybeauty.ro (SEO inițială - subcontractori)",
    ],
  },
  {
    category: "Optimizare SEO + Social Media și conținut",
    items: [
      "focus-studio.ro (redesign, SEO, Social Media)",
      "alesano.ro (SEO, articole, newsletter - subcontractori)",
      "profesori-meditatii.ro (site + SEO + reclame social media)",
      "eucom.ro (social media marketing, SEO punctual)",
    ],
  },
  {
    category: "Proiecte SEO internaționale",
    items: [
      "ecobuildingsdesign.co.uk (redesign + email marketing)",
      "thegadlys.school (creare website + indexare)",
    ],
  },
  {
    category: "Alte proiecte SEO notabile",
    items: [
      "cadesign.ro (SEO complet - subcontractori)",
      "startitude.ro (SEO activ - subcontractori)",
      "marketplace4you.ro (SEO tehnic + monitorizare continuă)",
      "butasideromania.ro (SEO tehnic, GSC - subcontractori)",
      "mediadesignro.ro (SEO tehnic, GSC - subcontractori)",
      "tripdeals.ro (SEO tehnic, GSC)",
      "tripdeals.it (SEO tehnic, GSC)",
    ],
  },
];

const portfolioImages = [
  "https://pggweb.ro/wp-content/uploads/2019/07/img_box_01.png",
  "https://pggweb.ro/wp-content/uploads/2019/07/img_box_02.png",
  "https://pggweb.ro/wp-content/uploads/2019/07/img_box_04.png",
  "https://pggweb.ro/wp-content/uploads/2019/07/img_box_05.png",
  "https://pggweb.ro/wp-content/uploads/2019/07/img_box_07.png",
];

/* Info box (sus) - 3 carduri */
const infoData = [
  {
    title: "Testăm, inovăm și adaptăm.",
    subtitle:
      "Gestionăm conturi proprii pentru a experimenta și învăța continuu, rămânând mereu la curent cu update-urile platformelor sociale și tendințele din marketing digital.",
    image:
      "https://blog.pggweb.ro/wp-content/uploads/2024/06/im-image-section-62-v2.png",
  },
  {
    title: "Tehnologiile de azi pentru soluțiile de mâine.",
    subtitle:
      "Implementăm procese automatizate cu make.com și API-uri avansate precum ChatGPT, oferind clienților noștri eficiență și rezultate măsurabile.",
    image:
      "https://blog.pggweb.ro/wp-content/uploads/2024/06/im-image-section-63-v2.png",
  },
  {
    title: "Rămânem cu un pas înainte.",
    subtitle:
      "Suntem mereu conectați la cele mai recente știri și tehnologii, învățând continuu pentru a-ți oferi soluții inovatoare și actualizate.",
    image:
      "https://blog.pggweb.ro/wp-content/uploads/2024/06/im-image-section-61-v2.png",
  },
];

/* Poziții cercuri roșii */
const circlePositions = Array(80)
  .fill(null)
  .map(() => {
    const top = Math.floor(Math.random() * 96);
    const left = Math.floor(Math.random() * 96);
    const size = Math.floor(Math.random() * 21) + 10; // 10..30 px
    const delay = (Math.random() * 2).toFixed(1); // 0..2 sec
    return { top, left, size, delay };
  });

/* Rezultate: 4 carduri + imagini
   Înlocuim la "Rezultate SEO" prima imagine cu "image_2024-10-06_165035434.png"
   + adăugăm noul card "Exemple Concrete" */
const resultsData = [
  {
    title: "Rezultate Social Media",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-10-27_075909641.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-08-14_172022789.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/Screenshot-2024-10-20-112908.png",
    ],
  },
  {
    title: "Rezultate SEO",
    images: [
      /* imaginea nouă în loc de image_2024-09-29_165625277.png: */
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-10-06_165035434.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-06-07_150459005.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-06-07_153702423.png",
    ],
  },
  {
    title: "Rezultate Newsletter",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-08-21_033457431.png",
    ],
  },
  {
    title: "Rezultate SEO, Google Ads, Social Media, Newsletter",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-06-03_113642921.png",
    ],
  },
  {
    /* Noul card "Exemple Concrete" */
    title: "Exemple Concrete",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/Copie-a-fisierului-spring-sale-detergenti.jpg",
      "https://pggweb.ro/wp-content/uploads/2024/12/curatare_auto.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/Copy-of-Copy-of-White-modern-did-you-know-instagram-post-Your-Story.jpg",
    ],
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [infoIndex, setInfoIndex] = useState(0);

  // ecran de încărcare 2s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // schimbăm cardul info la fiecare 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setInfoIndex((prev) => (prev + 1) % infoData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <div className="loading-welcome">Bine ai venit!</div>
      </div>
    );
  }

  // Generăm cercurile roșii (80)
  const circles = circlePositions.map((pos, i) => (
    <div
      key={i}
      className="floating-circle"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        width: `${pos.size}px`,
        height: `${pos.size}px`,
        animationDelay: `${pos.delay}s`,
      }}
    />
  ));

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {circles}

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={LOGO} alt="PGG WEB Logo" />
        </div>
        <div className="header-center">
          <h1>PGG WEB S.R.L.</h1>
        </div>
        <div className="header-right">Deeds Not Words</div>
      </header>

      {/* BOX SUS (info) */}
      <div className="info-box with-image">
        <div className="info-text">
          <h2>{infoData[infoIndex].title}</h2>
          <p>{infoData[infoIndex].subtitle}</p>
        </div>
        <div className="info-image">
          <img src={infoData[infoIndex].image} alt="ilustratie info" />
        </div>
      </div>

      {/* CHARTS SECTION */}
      <section className="charts-section">
        <div className="chart-card">
          <h3>Conturi Social Media Administrate</h3>
          <div className="chart-container">
            <Bar data={barSocialMedia} options={chartOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>Creștere Trafic SEO</h3>
          <div className="chart-container">
            <Line data={lineSeoTraffic} options={chartOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>Clienți Local vs. Internațional</h3>
          <div className="chart-container">
            <Line data={lineClients} options={chartOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>Campanii Ads Administrate</h3>
          <div className="chart-container">
            <Bar data={barAdsCampaigns} options={chartOptions} />
          </div>
        </div>
      </section>

      {/* PORTOFOLIU */}
      <h2 className="portfolio-title">Proiectele noastre</h2>
      {portfolioData.map((cat, idx) => (
        <div className="portfolio-block" key={idx}>
          <div className="portfolio-text">
            <h2>{cat.category}</h2>
            <ul>
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="portfolio-image">
            <img src={portfolioImages[idx % 5]} alt={`Ilustratie cat ${idx}`} />
          </div>
        </div>
      ))}

      {/* Rezultate - 5 carduri cu imagini (inclusiv cardul nou “Exemple Concrete”) */}
      <h2 className="results-section-title">Rezultate</h2>
      <section className="results-section">
        {resultsData.map((res, i) => (
          <div className="results-block" key={i}>
            <h3>{res.title}</h3>
            <div className="results-images">
              {res.images.map((imgUrl, j) => (
                <img src={imgUrl} alt={`Rezultat ${i}-${j}`} key={j} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        &copy; Pleban Gelu Gabriel - PGG WEB S.R.L.
      </footer>

      {/* Buton Email */}
      <a
        href="mailto:office@pggweb.ro"
        className="email-button"
        title="Trimite-ne un email"
      >
        ✉
      </a>
    </div>
  );
}
