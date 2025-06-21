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

/* ───────── Chart.js ───────── */
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

/* ───────── Logo ───────── */
const LOGO =
  "https://pggweb.ro/wp-content/uploads/2024/09/cropped-cropped-logo-perfect-1.webp";

/* ───────── Helper: ultimele 6 luni ───────── */
const lastMonths = (n = 6) => {
  const arr = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    arr.push(d.toLocaleString("ro-RO", { month: "short" }).replace(".", ""));
  }
  return arr;
};
const labels6 = lastMonths(6);

/* ───────── Charts data ───────── */
const barSocialMedia = {
  labels: ["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube"],
  datasets: [
    {
      label: "Număr conturi administrate",
      data: [25, 15, 5, 8, 3],
      backgroundColor: "#ff4949",
    },
  ],
};

const lineSeoTraffic = {
  labels: labels6,
  datasets: [
    {
      label: "Trafic organic (k vizite)",
      data: [12, 14, 16, 18, 23, 28],
      borderColor: "#ff4949",
      backgroundColor: "#ff494928",
      tension: 0.25,
    },
  ],
};

const lineClients = {
  labels: labels6,
  datasets: [
    {
      label: "Clienți România",
      data: [40, 42, 45, 48, 50, 55],
      borderColor: "#ff4949",
      backgroundColor: "#ff494928",
      tension: 0.25,
    },
    {
      label: "Clienți Internațional",
      data: [15, 17, 18, 19, 22, 25],
      borderColor: "#ff8f8f",
      backgroundColor: "#ff8f8f28",
      tension: 0.25,
    },
  ],
};

const barAdsCampaigns = {
  labels: labels6,
  datasets: [
    {
      label: "Campanii Ads Administrate",
      data: [20, 24, 28, 36, 40, 50],
      backgroundColor: "#ff4949",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: { color: "#e6e6e9", font: { size: 14 } },
    },
  },
  scales: {
    x: { ticks: { color: "#e6e6e9" }, grid: { color: "#555" } },
    y: { ticks: { color: "#e6e6e9" }, grid: { color: "#555" } },
  },
};

/* ───────── Info rotativ ───────── */
const infoData = [
  {
    title: "Testăm, inovăm și adaptăm.",
    subtitle:
      "Gestionăm conturi proprii pentru a experimenta și a învăța continuu, rămânând mereu la curent cu noutățile din marketingul digital.",
  },
  {
    title: "Tehnologiile de azi pentru soluțiile de mâine.",
    subtitle:
      "Implementăm procese automatizate cu make.com și API-uri avansate precum ChatGPT, oferind clienților noștri eficiență și rezultate măsurabile.",
  },
  {
    title: "Rămânem cu un pas înainte.",
    subtitle:
      "Suntem conectați permanent la cele mai recente știri și tehnologii pentru a oferi soluții inovatoare și actualizate.",
  },
];

/* ───────── Portofoliu (COMPLET) ───────── */
const portfolioData = [
  {
    category: "Site-uri proprii optimizate SEO",
    items: [
      "pggweb.ro",
      "optimizare-site-pro.ro",
      "creare-site-pro.ro",
      "online-development.com",
      "blog.pggweb.ro",
      "shop.pggweb.ro (magazin în lucru)",
      "hoteluri-si-restaurante.ro",
      "ghidul-tech.ro",
    ],
  },
  {
    category:
      "Proiecte complexe cu SEO tehnic, Google Ads și optimizare continuă",
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
      "Aiagroup.es (SEO On-page + Tehnic)",
      "GrainBags (SEO Tehnic + On-page)",
      "Autorekrut.com (SEO Tehnic + On-page)",
      "Blinkersbrew.com (SEO Tehnic + On-page)",
      "Degamark.ro (SEO Tehnic + On-page)",
      "Deppo.ro (SEO Tehnic + On-page)",
      "Dranabucur.ro (SEO Tehnic + On-page)",
      "Efe-univers.com (SEO Tehnic + On-page)",
      "Eian.ro (SEO Tehnic + On-page)",
      "Fiscalmag.com (SEO Tehnic + On-page)",
      "Gateclaim.com (SEO On-page + Tehnic)",
      "Laraelsaad.com (SEO On-page + Tehnic)",
      "Levtech.ro (SEO Tehnic + On-page)",
      "Myomobile.ro (SEO Tehnic + On-page)",
      "Newlifebio.eu (SEO On-page + Tehnic)",
      "Paleti.eu (SEO On-page + Tehnic)",
      "Raftdesign.ro (SEO On-page + Tehnic)",
      "Softpas.com (SEO On-page + Tehnic)",
      "Suntturist.ro (SEO On-page + Tehnic)",
      "Sustainability.today (SEO On-page + Tehnic)",
    ],
  },
  {
    category: "Optimizare SEO + Social Media și conținut",
    items: [
      "focus-studio.ro (redesign, SEO, Social Media)",
      "alesano.ro (SEO, articole, newsletter - subcontractori)",
      "profesori-meditatii.ro (site + SEO + reclame social media)",
      "eucom.ro (social media marketing, SEO punctual)",
      "Contavibe.ro (SEO Tehnic + On-page, Social Media)",
    ],
  },
  {
    category: "Proiecte internaționale",
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
  {
    category: "Social Media (administrare conturi)",
    items: [
      "Avg education (Social Media)",
      "Behost academy (Social Media)",
      "Dr. Laura-Simona Negoiță (Social Media)",
      "Mystea.ro (Social Media)",
      "Pet sitter Prahova (Social Media)",
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

/* ───────── Rezultate (COMPLET) ───────── */
const resultsData = [
  {
    title: "Rezultate Social Media",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-10-27_075909641.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-08-14_172022789.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/Screenshot-2024-10-20-112908.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitledpggweb.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitledpggweb-2.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitledpggweb-1.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-11-at-18.32.02_eeccf82c.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-11-at-18.33.02_68325f47.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-11-at-18.42.41_db77b6a0.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/Top-formate-de-continut1.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/3456354634564445.png",
    ],
  },
  {
    title: "Rezultate SEO",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-10-06_165035434.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-06-07_150459005.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/image_2024-06-07_153702423.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/WhatsApp-Image-2024-07-23-at-22.45.21_d22f2783.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/01/image_2024-02-04_123233063.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/image_2024-01-29_210928985.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/image_2024-01-29_215003547.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/stb-ranking-report-pggweb.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/54654364563456345.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitled435654365465436.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/29bb5299-909c-46da-8815-474943fd1284.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/52caeea2-4536-47c0-a5ee-f854eac72bfa.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/4f847502-afdc-4e48-8df0-2d7a90c6ba85.png",
    ],
  },
  {
    title: "Rezultate Google Ads",
    images: [
      "https://pggweb.ro/wp-content/uploads/2025/01/google-ads-screen-1.5.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/01/image_2024-01-29_215504596.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/1000044355.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/01/1000044354.jpg",
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
    title: "Rezultate automatizare procese interne prin make.com",
    images: [
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitled34563454355.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitled6785675.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitled354635463456356.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Untitled47654746575467547.png",
      "https://pggweb.ro/wp-content/uploads/2025/06/505376773_122185230332291855_7735372248301924693_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/502550921_122185230278291855_3063786388651010768_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/506445232_122185230308291855_2881691436189602280_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/505351257_122185230416291855_6239512969567814083_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/504622816_122185236812291855_717708504973506902_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/06/24353244645643564353546555.png",
    ],
  },
  {
    title: "Exemple Concrete",
    images: [
      "https://pggweb.ro/wp-content/uploads/2024/12/Copie-a-fisierului-spring-sale-detergenti.jpg",
      "https://pggweb.ro/wp-content/uploads/2024/12/curatare_auto.png",
      "https://pggweb.ro/wp-content/uploads/2024/12/Copy-of-Copy-of-White-modern-did-you-know-instagram-post-Your-Story.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/01/personal_branding_delia_14.11.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Mental-Health-Quote-Instagram-Post-Mobile-Video.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/01/newsletter_24.122.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/personal_branding_silviu_24.12.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/4.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/5.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/6.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/7.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/1.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/2.png",
      "https://pggweb.ro/wp-content/uploads/2025/01/Green-Modern-Furniture-Product-Features-Working-Chair-Instagram-Post.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/09.05.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/V4-1080x1080-2.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/variabila_15.04.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/Teal-Modern-Business-Presentation-1280-x-720-px-1080-x-1080-px.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/modificat-16-scaled.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/495445729_2122547908262886_8472657021122735083_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/21.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/9.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/08.04.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/04.04-1.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/04.04.png",
      "https://pggweb.ro/wp-content/uploads/2025/05/492353102_122195626304100392_2147387960046428571_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/1.-Final-CUT-Promo-SEO-PGG.mp4",
      "https://pggweb.ro/wp-content/uploads/2025/05/2.-Final-Promo-After-Feedback.mp4",
      "https://pggweb.ro/wp-content/uploads/2025/05/3.-Postare-Educativa-SEO-.mp4",
    ],
  },
];

/* ───────── Studii de caz (COMPLET) ───────── */
const caseStudies = [
  {
    title: "Studiu de caz 1",
    text: `Cum un singur articol a adus 979 de vizite din Google Discover în doar 3 săptămâni

A fost scris un singur articol, fără să se investească în reclame. În 3 săptămâni a generat 979 de click-uri și 8 740 de impresii din Google Discover, pe un site cu 4 000–5 000 de vizite lunare.

Subiectul: temă sezonieră, cu potențial comercial.
Structură orientată pe Discover:
- titlu scurt și clar
- imagine mare și contrastantă
- FAQ și bullet-uri – ușor de scanat
- CTA discret, optimizat pentru mobil

Indexare rapidă, update vizual la 48 h · CTR: 11,2 %

Rezultate:
- 979 clicuri din Discover
- 96 comenzi generate de articol

Concluzie: conținutul ales strategic și optimizat pentru Search + Discover poate aduce rezultate rapide, fără buget de ads.`,
    images: [
      "https://pggweb.ro/wp-content/uploads/2025/05/495561963_2123929451458065_5959872119079134828_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/496804802_2123929564791387_873905388384621387_n.jpg",
    ],
  },
  {
    title: "Studiu de caz 2",
    text: `Cum am generat 37 de clienți potențiali pentru un cabinet psihologic cu mai puțin de 400 lei

Nișă: servicii psihologice  
Obiectiv: lead-uri calificate pentru programări

Ce am făcut:
- Campanie Leads, strategie „cel mai mare volum”
- Buget zilnic optimizat, fereastră de atribuire 7 zile
- Copy empatic, care inspiră siguranță
- Targetare locală rafinată

Rezultate în 7 zile:
- 37 lead-uri
- Cost/lead: 10,76 lei
- Buget total: 397,96 lei
- Impact: 12 800 persoane · 30 553 afișări
- Venit generat: ≈7 000 lei

Factor-cheie: claritatea mesajului, emoția transmisă și imaginea autentică.`,
    images: [
      "https://pggweb.ro/wp-content/uploads/2025/05/493537607_2111993129318364_653812159933224643_n.jpg",
      "https://pggweb.ro/wp-content/uploads/2025/05/493312780_2111993142651696_4233962956655297252_n.jpg",
    ],
  },
  {
    title: "Studiu de caz 3",
    text: `🚀 AV-PGG – asistentul tău digital TOT-ÎN-UNU!
Deschizi Telegram și, dintr-o singură fereastră de chat, poți:
1️⃣ Programa întâlniri – o frază și apare imediat în Google Calendar, cu link de Meet și invitați.
2️⃣ Verifica agenda – întrebi „ce am pe 25 iunie?” și primești răspuns instant.
3️⃣ Trimite e-mailuri personalizate – dictezi conținutul, el completează și trimite.
4️⃣ Citi inbox-ul – găsește mailurile importante fără să mai cauți tu.
5️⃣ Posta simultan pe Facebook & LinkedIn – un singur mesaj → două rețele live.
6️⃣ Găsi lead-uri – scanează Google Maps & grupuri Facebook și îți livrează potențiali clienți gata filtrați.
7️⃣ Organiza task-uri – creează sau afișează bilete Jira direct din chat.
8️⃣ Distribui articole de blog – preia text + imagine și publică automat.
9️⃣ Ţine jurnalul activităţii – totul se salvează în Google Docs/Sheets.
🔟 Discuţie liberă 24/7 – pune orice întrebare și primești răspuns dintr-o bază imensă de cunoștințe, plus ebook-uri gratuite despre business & antreprenoriat pe care le poți descărca direct din chat.
Totul într-un singur loc, fără tab-uri multiple, fără copy-paste!`,
    images: [
      "https://pggweb.ro/wp-content/uploads/2025/06/24353244645643564353546555.png",
      "https://pggweb.ro/wp-content/uploads/2025/06/506445232_122185230308291855_2881691436189602280_n.jpg",
    ],
  },
];

/* ───────── Cercuri ───────── */
const circles = Array(80)
  .fill(null)
  .map((_, id) => ({
    id,
    top: Math.floor(Math.random() * 96),
    left: Math.floor(Math.random() * 96),
    size: Math.floor(Math.random() * 21) + 10,
    delay: (Math.random() * 2).toFixed(1),
  }));

/* ───────── APP ───────── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [infoIdx, setInfoIdx] = useState(0);
  const [zoom, setZoom] = useState(null);
  const [slideIdx, setSlideIdx] = useState(resultsData.map(() => 0));
  const [caseIdx, setCaseIdx] = useState(0);

  /* loader */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  /* info rotativ */
  useEffect(() => {
    const i = setInterval(
      () => setInfoIdx((p) => (p + 1) % infoData.length),
      8000
    );
    return () => clearInterval(i);
  }, []);

  /* slider helpers */
  const stepSlide = (sec, d) =>
    setSlideIdx((prev) => {
      const arr = [...prev];
      const len = resultsData[sec].images.length;
      arr[sec] = (arr[sec] + d + len) % len;
      return arr;
    });
  const pickSlide = (sec, idx) =>
    setSlideIdx((prev) => {
      const arr = [...prev];
      arr[sec] = idx;
      return arr;
    });

  /* case study nav */
  const stepCase = (d) =>
    setCaseIdx((p) => (p + d + caseStudies.length) % caseStudies.length);

  if (loading)
    return (
      <div className="loading-overlay">
        <div className="spinner" />
        <div className="loading-welcome">Bine ai venit!</div>
      </div>
    );

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* cercuri */}
      {circles.map((c) => (
        <div
          key={c.id}
          className="floating-circle"
          style={{
            top: `${c.top}%`,
            left: `${c.left}%`,
            width: c.size,
            height: c.size,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={LOGO} alt="PGG WEB Logo" />
        </div>
        <div className="brand-text">PGG WEB – Deeds Not Words</div>
      </header>

      {/* INFO BOX */}
      <div className="info-box">
        <div className="info-text">
          <h2>{infoData[infoIdx].title}</h2>
          <p>{infoData[infoIdx].subtitle}</p>
        </div>
      </div>

      {/* CHARTS */}
      <section className="charts-section">
        <ChartCard title="Conturi Social Media Administrate">
          <Bar data={barSocialMedia} options={chartOptions} />
        </ChartCard>
        <ChartCard title="Creștere Trafic SEO">
          <Line data={lineSeoTraffic} options={chartOptions} />
        </ChartCard>
        <ChartCard title="Clienți Local vs. Internațional">
          <Line data={lineClients} options={chartOptions} />
        </ChartCard>
        <ChartCard title="Campanii Ads Administrate">
          <Bar data={barAdsCampaigns} options={chartOptions} />
        </ChartCard>
      </section>

      {/* PORTOFOLIU */}
      <h2 className="section-title">Proiectele noastre</h2>
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
            <img
              src={portfolioImages[idx % portfolioImages.length]}
              alt=""
              onClick={() =>
                setZoom(portfolioImages[idx % portfolioImages.length])
              }
            />
          </div>
        </div>
      ))}

      {/* REZULTATE */}
      <h2 className="section-title">Rezultate</h2>
      <section className="results-section">
        {resultsData.map((sec, s) => (
          <div className="results-block" key={s}>
            <h3>{sec.title}</h3>
            <div className="carousel">
              <button className="nav-btn" onClick={() => stepSlide(s, -1)}>
                ‹
              </button>
              {sec.images[slideIdx[s]].endsWith(".mp4") ? (
                <video
                  className="big-media"
                  src={sec.images[slideIdx[s]]}
                  controls
                />
              ) : (
                <img
                  className="big-media"
                  src={sec.images[slideIdx[s]]}
                  alt=""
                  onClick={() => setZoom(sec.images[slideIdx[s]])}
                />
              )}
              <button className="nav-btn" onClick={() => stepSlide(s, 1)}>
                ›
              </button>
            </div>
            <div className="thumb-row">
              {sec.images.map((m, i) =>
                m.endsWith(".mp4") ? (
                  <video
                    key={i}
                    src={m}
                    muted
                    className={`thumb ${i === slideIdx[s] ? "active" : ""}`}
                    onClick={() => pickSlide(s, i)}
                  />
                ) : (
                  <img
                    key={i}
                    src={m}
                    alt=""
                    className={`thumb ${i === slideIdx[s] ? "active" : ""}`}
                    onClick={() => pickSlide(s, i)}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </section>

      {/* STUDII DE CAZ */}
      <h2 className="section-title">Studii de caz</h2>
      <div className="case-block">
        <div className="case-text">
          <h3>{caseStudies[caseIdx].title}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{caseStudies[caseIdx].text}</p>
        </div>
        <div className="case-images">
          {caseStudies[caseIdx].images.map((img, j) => (
            <img key={j} src={img} alt="" onClick={() => setZoom(img)} />
          ))}
        </div>
        <div className="case-nav">
          <button className="nav-btn" onClick={() => stepCase(-1)}>
            ‹
          </button>
          {caseStudies.map((_, i) => (
            <button
              key={i}
              className={`case-dot ${i === caseIdx ? "active" : ""}`}
              onClick={() => setCaseIdx(i)}
            >
              Studiu {i + 1}
            </button>
          ))}
          <button className="nav-btn" onClick={() => stepCase(1)}>
            ›
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-buttons">
        <a
          className="cta-btn"
          href="https://pggweb.ro/cunoaste-echipa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cunoaște echipa
        </a>
        <a
          className="cta-btn"
          href="https://www.linkedin.com/in/pgg-web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn PGG WEB
        </a>
        <a
          className="cta-btn"
          href="https://www.facebook.com/profile.php?id=61558755677353"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook PGG WEB
        </a>
        <a
          className="cta-btn"
          href="https://optimizare-site-pro.ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Optimizare Site Pro
        </a>
      </div>

      {/* MODAL */}
      {zoom && (
        <div className="modal-backdrop" onClick={() => setZoom(null)}>
          <img src={zoom} className="modal-img" alt="zoom" />
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">© Pleban Gelu Gabriel – PGG WEB S.R.L.</footer>
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

/* helper card */
const ChartCard = ({ title, children }) => (
  <div className="chart-card">
    <h3>{title}</h3>
    <div className="chart-container">{children}</div>
  </div>
);
