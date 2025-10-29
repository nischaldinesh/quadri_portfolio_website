import type { Publication } from "@/components/PublicationCard";

export const publications: Publication[] = [
  {
    id: "1",
    year: 2024,
    citation:
      'Chin Tseng, Arran Zeyu Wang, Ghulam Jilani Quadri, and Danielle Albers Szafir, "Shape It Up: An Empirically Grounded Approach for Designing Shape Palettes." Proceedings of IEEE VIS 2024. To appear in IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024.',
    image: {
      src: "/research/R1_1.png",
      alt: "Shape palette visualization framework",
    },
    links: {
      pdf: "/pdfs/shape-it-up-2024.pdf",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "2",
    year: 2024,
    citation:
      'Dilshad ur Rahman, Ghulam Jilani Quadri, Bhavana Doppalapudi, Danielle Albers Szafir, and Paul Rosen, "A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space" Proceedings of IEEE VIS 2024. To appear in IEEE Transaction on Visualization and Computer Graphics, 2024',
    image: { src: "/publications/P2.png", alt: "P2.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/10670067",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "3",
    year: 2024,
    citation:
      "Feng Lin, Arran Zeyu Wang, Dilshad ur Rahman, and Danielle Albers Szafir, Ghulam Jilani Quadri, 'Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types' Proceedings of BELIV Workshop at IEEE VIS 2024.",
    image: { src: "/publications/P3.png", alt: "P3.png" },
    links: {
      pdf: "https://arxiv.org/pdf/2408.16080",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "4",
    year: 2024,
    citation:
      "Keke Wu, Ghulam Jilani Quadri, Arran Zeyu Wang, David Kwame Osei-Tutu, Emma Peterson, Varsha Koushik, and Danielle Albers Szafir, 'Our Stories, Our Data: Co-designing Visualizations with People with Intellectual and Developmental Disabilities' To be appearing in the Proceedings of ACM SIGACCESS Conference on Computers and Accessibility, 2024",
    image: { src: "/publications/P4.png", alt: "P4.png" },
    links: {
      pdf: "https://dl.acm.org/doi/abs/10.1145/3663548.3675615",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "5",
    year: 2024,
    citation:
      "Dilshad ur Rahman, Ghulam Jilani Quadri, Danielle Albers Szafir, and Paul Rosen, 'Exploring Annotation Taxonomy in Grouped Bar Charts: A Qualitative Classroom Study' Information Visualization, 2024",
    image: { src: "/publications/P5.png", alt: "P5.png" },
    links: {
      pdf: "https://journals.sagepub.com/doi/abs/10.1177/14738716241270247",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "6",
    year: 2024,
    citation:
      "Ghulam Jilani Quadri, 'Towards Constructing Frameworks for Task- and Design-Optimized Visualizations' IEEE Computer Graphics and Applications (CG&A), 2024",
    image: { src: "/publications/P6.png", alt: "P6.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/10736168",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "7",
    year: 2024,
    citation:
      "Ghulam Jilani Quadri, Arran Zeyu Wang, Zhehao Wang, Jennifer Adorno, Paul Rosen, and Danielle Albers Szafir 'Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension' In Proceedings of ACM CHI’ 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
    image: { src: "/publications/P7.png", alt: "P7.png" },
    links: {
      pdf: "https://dl.acm.org/doi/10.1145/3613904.3642813",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "8",
    year: 2024,
    citation:
      "Ghulam Jilani Quadri, Arran Zeyu Wang, Zhehao Wang, Jennifer Adorno, Paul Rosen, and Danielle Albers Szafir 'Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension' In Proceedings of ACM CHI’ 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
    image: { src: "/publications/P8.png", alt: "P8.png" },
    links: {
      pdf: "https://dl.acm.org/doi/10.1145/3613904.3642813",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "9",
    year: 2024,
    citation:
      "Chin Tseng, Arran Zeyu Wang, Ghulam Jilani Quadri, and Danielle Albers Szafir, 'Revisiting Categorical Color Perception in Scatterplots: Sequential, Diverging, and Categorical Palettes.' In Proceedings of EuroVis 2024. Odense, Denmark",
    image: { src: "/publications/P9.png", alt: "P9.png" },
    links: {
      pdf: "https://arxiv.org/pdf/2404.03787",
      demo: null,
      talk: null,
      code: null,
    },
    mentions: ["Best Short Paper Award (Top 1% submissions) 🏆"],
    abstract:
      "Existing guidelines for categorical color selection are heuristic, often grounded in intuition rather than empirical studies of readers’ abilities. While design conventions recommend palettes maximize hue differences, more recent exploratory findings indicate other factors, such as lightness, may play a role in effective categorical palette design. We conducted a crowdsourced experiment on mean value judgments in multi-class scatterplots using five color palette families—single-hue sequential, multihue sequential, perceptually-uniform multi-hue sequential, diverging, and multi-hue categorical—that differ in how they manipulate hue and lightness. Participants estimated relative mean positions in scatterplots containing 2 to 10 categories using 20 colormaps. Our results confirm heuristic guidance that hue-based categorical palettes are most effective. However, they also provide additional evidence that scalable categorical encoding relies on more than hue variance.",
    tags: ["Paper Award"],
  },
  {
    id: "10",
    year: 2023,
    citation:
      "Hyeon Jeon*, Ghulam Jilani Quadri*, Hyunwook Lee, Paul Rosen, Danielle Albers Szafir and Jinwook Seo, 'CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering.' IEEE Transactions on Visualization & Computer Graphics, (Proc. VIS 2023).",
    image: { src: "/publications/P10.png", alt: "P10.png" },
    links: {
      pdf: "https://arxiv.org/pdf/2308.00284",
      demo: null,
      talk: null,
      code: null,
    },
    mentions: ["Best Paper Honorable Mention Award (Top 5% submissions) 🏆"],
    abstract:
      "Visual clustering is a common perceptual task in scatterplots that supports diverse analytics tasks (e.g., cluster identification). However, even with the same scatterplot, the ways of perceiving clusters (i.e., conducting visual clustering) can differ due to the differences among individuals and ambiguous cluster boundaries. Although such perceptual variability casts doubt on the reliability of data analysis based on visual clustering, we lack a systematic way to efficiently assess this variability. In this research, we study perceptual variability in conducting visual clustering, which we call Cluster Ambiguity. To this end, we introduce CLAMS, a data-driven visual quality measure for automatically predicting cluster ambiguity in monochrome scatterplots. We first conduct a qualitative study to identify key factors that affect the visual separation of clusters (e.g., proximity or size difference between clusters). Based on study findings, we deploy a regression module that estimates the human-judged separability of two clusters. Then, CLAMS predicts cluster ambiguity by analyzing the aggregated results of all pairwise separability between clusters that are generated by the module. CLAMS outperforms widely-used clustering techniques in predicting ground truth cluster ambiguity. Meanwhile, CLAMS exhibits performance on par with human annotators. We conclude our work by presenting two applications for optimizing and benchmarking data mining techniques using CLAMS",
    tags: ["Paper Award"],
  },
  {
    id: "11",
    year: 2023,
    citation:
      "Dilshad ur Rahman, Ghulam Jilani Quadri, and Paul Rosen, 'Exploring Annotation Strategies in Professional Visualizations:Insights from Prominent US News Portals.' In Proceedings of VIS’23: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2023.",
    image: { src: "/publications/P11.png", alt: "P11.png" },
    links: {
      pdf: "https://osf.io/preprints/osf/fd8zj_v1",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "12",
    year: 2023,
    citation:
      "Chin Tseng, Ghulam Jilani Quadri, Zeyu Wang and Danielle Albers Szafir, 'Measuring categorical perception in color-coded scatterplots.' In Proceedings of ACM CHI’ 2023: ACM Conference on Human Factors in Computing Systems, 2023.",
    image: { src: "/publications/P12.png", alt: "P12.png" },
    links: {
      pdf: "https://dl.acm.org/doi/abs/10.1145/3544548.3581416",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "13",
    year: 2022,
    citation:
      "Ghulam Jilani Quadri, Jeniffer Adorno, Brenton Wiernik, and Paul Rosen, 'Automatic Scatterplot Design Optimization for Clustering Identification.' IEEE Transactions on Visualization & Computer Graphics, 2022.",
    image: { src: "/publications/P13.png", alt: "P13.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/9826389",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "14",
    year: 2022,
    citation:
      "Ghulam Jilani Quadri, and Danielle Albers Szafir, 'Eliciting High-Level Visual Comprehension: A Qualitative Study.' In Poster at IEEE Conference on Visualization, 2022.",
    image: { src: "/publications/P14.png", alt: "P14.png" },
    links: {
      pdf: null,
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "15",
    year: 2022,
    citation:
      "Dilshad ur Rahman, Ghulam Jilani Quadri, and Paul Rosen, 'A Qualitative Evaluation and Taxonomy of Bar Chart Annotations.' In Proceedings of VIS’22: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2022.",
    image: { src: "/publications/P15.png", alt: "P15.png" },
    links: {
      pdf: "https://osf.io/preprints/osf/e5vfy_v1",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "16",
    year: 2021,
    citation:
      "Ghulam Jilani Quadri and Paul Rosen, 'A Survey of Perception-Based Visualization Studies by Task.' IEEE Transactions on Visualization & Computer Graphics, 2021.",
    image: { src: "/publications/P16.png", alt: "P16.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/9492011",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "17",
    year: 2021,
    citation:
      "Ghulam Jilani Quadri, 'Constructing Frameworks for Task-Optimized Visualizations.' Docotoral Dissertation, University of South Florida, 2021.",
    image: { src: "/publications/P17.png", alt: "P17.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/9991011",
      demo: null,
      talk: null,
      code: null,
    },
    mentions: ["2022 IEEE VGTC Best Dissertation Award 🏆"],
    tags: ["Paper Award"],
  },
  {
    id: "18",
    year: 2020,
    citation:
      "Ghulam Jilani Quadri and Paul Rosen, 'Modeling the Influence of Visual Density on Cluster Perception in Scatterplots Using Topology.' Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/P18.png", alt: "P18.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/9222295",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "19",
    year: 2020,
    citation:
      "Paul Rosen and Ghulam Jilani Quadri, 'LineSmooth: An Analytical Framework for Evaluating the Effectiveness of Smoothing Techniques on Line Charts.' Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/P19.png", alt: "P19.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/document/9222269",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "20",
    year: 2019,
    citation:
      "Ghulam Jilani Quadri and Paul Rosen, 'You Can’t Publish Replication Studies (and How to Anyways).' In Proceedings of VIS’19: IEEE Conference on Visualization. Workshop on Vis X Vision, 2019.",
    image: { src: "/publications/P20.png", alt: "P20.png" },
    links: {
      pdf: "https://arxiv.org/abs/1908.08893",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "21",
    year: 2019,
    citation:
      "Carlos Alvarado, Ghulam Jilani Quadri, Jennifer Adorno, Paul Rosen, and Miguel Labrador 'Analysis of Accelerometer Data for Cross-Device Algorithm Support.' NSF-REU Undergraduate Poster Colloquium, 2019.",
    image: { src: "/publications/P21.png", alt: "P21.png" },
    links: { pdf: null, demo: null, talk: null, code: null },
  },
  {
    id: "22",
    year: 2019,
    citation:
      "Carlos Alvarado, Ghulam Jilani Quadri, Jennifer Adorno, and Paul Rosen 'A Case-Study on Variations Observed in Accelerometers Across Devices.' 2019.",
    image: { src: "/publications/P22.png", alt: "P22.png" },
    links: {
      pdf: "https://arxiv.org/abs/2207.03350",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "23",
    year: 2018,
    citation:
      "Ghulam Jilani Quadri and Paul Rosen, 'Modelling Visual Density in Scatterplot Using Megre Trees.' Poster at Data Science Colloquium, College of Business Analytics and Information Science, University of South Florida 2018.",
    image: { src: "/publications/P23.png", alt: "P23.png" },
    links: { pdf: null, demo: null, talk: null, code: null },
  },
  {
    id: "24",
    year: 2017,
    citation:
      "Rahul Paul, Saeed Alhamari, Sulav Malla and Ghulam Jilani Quadri, 'Make Your Bone Great Again: A Study on Osteoporosis Classification.' In arXiv. 2017.",
    image: { src: "/publications/P24.png", alt: "P24.png" },
    links: {
      pdf: "https://arxiv.org/abs/1707.05385",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "25",
    year: 2017,
    citation:
      "Sulav Malla, Anwesh Tuladhar, Ghulam Jilani Quadri and Paul Rosen 'Multi-Spectral Satellite Image Analysis for Feature Identification and Change Detection.' IEEE Conference on Visual Analytics Science and Technology (VAST), VAST Challenge, 2017.",
    image: { src: "/publications/P25.png", alt: "P25.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/8585482",
      demo: null,
      talk: null,
      code: null,
    },
    mentions: [
      "Honorable Mention Award for Good Facilitation of Single Image Analysis 🏆",
    ],
    abstract:
      "Satellite images are helpful in remote sensing of land features. However, such multi-spectral images cannot be displayed using readily available imaging tools. We developed a tool in Processing that is able to read in multi-spectral images and display each band as a grayscale image. This tool also allows for mapping of any of the bands to red, green or blue channel of the displayed image. In this paper, we describe how such tool can be used in identifying land features as well as assist in finding changes over time. We used our tool to successfully solve the VAST challenge 2017 mini-challenge 3.",
    venue: "IEEE VIS ",
    tags: ["Paper Award"],
  },
  {
    id: "26",
    year: 2017,
    citation:
      "Ghulam Jilani Quadri, Anwesh Tuladhar, Sulav Malla, and Paul Rosen 'Visual Analytic Design for Characterizing Air-Sampling Sensor Performance and Oeration.' In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/P26.png", alt: "P26.png" },
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/8585678",
      demo: null,
      talk: null,
      code: null,
    },
  },
  {
    id: "27",
    year: 2017,
    citation:
      "Anwesh Tuladhar, Sulav Malla, Ghulam Jilani Quadri, and Paul Rosen 'Data Aggregation and Visualization Technique for Traﬀic Sensor Data.' In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/P.png", alt: "P.png" },
    venue: "IEEE ",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/8585568",
      demo: null,
      talk: null,
      code: null,
    },
  },
];

// --- Selected subset for "Selected Publications" sections ---
// Helper to pick specific items by id from the master list
const selectByIds = (ids: string[]) =>
  ids
    .map((id) => publications.find((p) => p.id === id))
    .filter((p): p is Publication => Boolean(p));

export const selectedPulications: Publication[] = selectByIds([
  "9", // EuroVis 2024 — Best Short Paper
  "10", // CLAMS (TVCG 2023) — Best Paper Honorable Mention
  "25",
]);
