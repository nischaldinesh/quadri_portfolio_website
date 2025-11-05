export type PublicationLink = {
  label: string;
  href: string;
};

export type PublicationDetail = {
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  hero?: { src: string; alt: string };
};

export type Author = {
  name: string;
  highlight?: boolean;
};

export type Publication = {
  slug: string;
  year: number;
  title: string;
  authors: Author[];
  venue: string;
  image: { src: string; alt: string };
  links: PublicationLink[];
  highlight?: string;
  detail?: PublicationDetail;
  tags?: string[];
};

export const publications: Publication[] = [
  {
    slug: "visual-stenography",
    year: 2025,
    title:
      "Visual Stenography: Feature Recreation and Preservation in Sketches of Noisy Line Charts",
    authors: [
      { name: "Rifat Ara Proma" },
      { name: "Michael Correll" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2510.11927" }],
    image: {
      src: "/publications/visual_stenography.png",
      alt: "Visual Stenography Image",
    },
  },
  {
    slug: "discrepancies-in-mental-workload",
    year: 2025,
    title:
      "Discrepancies in Mental Workload Estimation: Self-Reported versus EEG-Based Measures in Data Visualization Evaluation",
    authors: [
      { name: "Soobin Yim" },
      { name: "Sangbong Yoo" },
      { name: "Chanyoung Yoon" },
      { name: "Chanyoung Jung" },
      { name: "Chansoo Kim" },
      { name: "Yun Jang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "Preprint, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.09262" }],
    image: { src: "/publications/discrepancies.png", alt: "Distortion Image" },
  },
  {
    slug: "evaluating-line-chart",
    year: 2025,
    title:
      "Evaluating Line Chart Strategies for Mitigating Density of Temporal Data: The Impact on Trend, Prediction, and Decision-Making",
    authors: [
      { name: "Rifat Ara Proma" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of the 20th International Symposium on Visual Computing, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2510.11912" }],
    image: {
      src: "/publications/evaluating_line.png",
      alt: "Evaluating line strategies",
    },
  },
  {
    slug: "distortion-aware",
    year: 2025,
    title:
      "Distortion-aware Brushing for Reliable Cluster Analysis in Multidimensional Projections",
    authors: [
      { name: "Hyeon Jeon" },
      { name: "Michaël Aupetit" },
      { name: "Soohyun Lee" },
      { name: "Kwon Ko" },
      { name: "Youngtaek Kim" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jinwook Seo" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/distortion.png", alt: "Distortion Image" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11184260",
      },
    ],
  },
  {
    slug: "understanding-bias",
    year: 2025,
    title:
      "Understanding Bias in Perceiving Dimensionality Reduction Projections",
    authors: [
      { name: "Seoyoung Doh" },
      { name: "Hyeon Jeon" },
      { name: "Sungbok Shin" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Nam Wook Kim" },
      { name: "Jinwook Seo" },
    ],
    venue:
      "In Proceedings of the Workshop on Visualization for Communication (VisComm) at IEEE VIS, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.20805" }],
    image: { src: "/publications/bias.png", alt: "Bias Image" },
  },
  {
    slug: "subitizing-visualization",
    year: 2025,
    title:
      "Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization",
    authors: [
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Mengyuan Zhu" },
      { name: "Chin Tseng" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2025; to appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/char.png", alt: "Subitizing teaser" },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2508.17460" },
      { label: "PDF", href: "https://arxiv.org/abs/2508.17460" },
    ],
    highlight: "Best Paper Honorable Mention (IEEE VIS 2025) 🏆",
    tags: ["Best"],
  },
  {
    slug: "annotation-survey-2025",
    year: 2025,
    title:
      "A Survey on Annotations in Information Visualization: Empirical Insights, Applications, and Challenges",
    authors: [
      { name: "Md Dilshadur Rahman" },
      { name: "Bhavana Doppalapudi" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/annotations.png", alt: "Annotation survey" },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2410.05579" },
      { label: "PDF", href: "https://arxiv.org/pdf/2410.05579" },
    ],
  },
  // 2024
  {
    slug: "shape-it-up",
    year: 2024,
    title:
      "Shape It Up: An Empirically Grounded Approach for Designing Shape Palettes",
    authors: [
      { name: "Chin Tseng" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/shape.png", alt: "Shape It Up" },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10681156",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2408.16079" },
      { label: "Shape Tool", href: "https://shape-it-up-eec5e.web.app/" },
    ],
    tags: ["Recent", "Encoding", "Design Optimization"],
  },
  {
    slug: "annotation-design-space",
    year: 2024,
    title:
      "A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Bhavana Doppalapudi" },
      { name: "Danielle Albers Szafir" },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: {
      src: "/publications/publication_2.png",
      alt: "Annotation design space",
    },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10670067",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2306.06043" },
      {
        label: "Data",
        href: "https://osf.io/e5zq9/?view_only=173a644eb5d3448c832408baf3b050b0",
      },
    ],
    tags: ["Recent", "Design Optimization"],
  },
  {
    slug: "evaluation-method-balance",
    year: 2024,
    title:
      "Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types",
    authors: [
      { name: "Feng Lin" },
      { name: "Arran Zeyu Wang" },
      { name: "Dilshad ur Rahman" },
      { name: "Danielle Albers Szafir" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "In Proceedings of BELIV Workshop at IEEE VIS 2024.",
    image: {
      src: "/publications/publication_3.png",
      alt: "Evaluation method balance",
    },
    links: [
      {
        label: "DOI",
        href: "https://www.computer.org/csdl/proceedings-article/beliv/2024/284600a129/22a0EOOwpQA",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16080" },
    ],
  },
  {
    slug: "our-stories-our-data",
    year: 2024,
    title:
      "Our Stories, Our Data: Co-designing Visualizations with People with Intellectual and Developmental Disabilities",
    authors: [
      { name: "Keke Wu" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Arran Zeyu Wang" },
      { name: "David Kwame Osei-Tutu" },
      { name: "Emma Peterson" },
      { name: "Varsha Koushik" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In the Proceedings of ACM SIGACCESS Conference on Computers and Accessibility, 2024.",
    image: {
      src: "/publications/publication_4.png",
      alt: "Our Stories Our Data",
    },
    links: [
      {
        label: "DOI",
        href: "https://dl.acm.org/doi/abs/10.1145/3663548.3675615",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16072" },
    ],
  },
  {
    slug: "annotation-barchart",
    year: 2024,
    title:
      "Exploring Annotation Taxonomy in Grouped Bar Charts: A Qualitative Classroom Study",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
      { name: "Paul Rosen" },
    ],
    venue: "Information Visualization, 2024.",
    image: {
      src: "/publications/publication_5.png",
      alt: "Grouped bar chart annotations",
    },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
    ],
    detail: {
      pdf: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
    },
  },
  {
    slug: "task-design-optimized",
    year: 2024,
    title:
      "Toward Constructing Frameworks for Task- and Design-Optimized Visualizations",
    authors: [{ name: "Ghulam Jilani Quadri", highlight: true }],
    venue: "IEEE Computer Graphics and Applications (CG&A), 2024.",
    image: {
      src: "/publications/publication_6.png",
      alt: "Task & design optimized",
    },
    links: [
      { label: "DOI", href: "https://ieeexplore.ieee.org/document/10736168" },
    ],
    tags: ["Design Optimization"],
  },
  {
    slug: "do-you-see-what-i-see",
    year: 2024,
    title:
      "Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Arran Zeyu Wang" },
      { name: "Zhehao Wang" },
      { name: "Jennifer Adorno" },
      { name: "Paul Rosen" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of ACM CHI 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
    image: {
      src: "/publications/publication_7.png",
      alt: "High-level comprehension",
    },
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3613904.3642813" },
      { label: "PDF", href: "https://arxiv.org/pdf/2402.15605" },
      { label: "Data", href: "https://osf.io/869ev/" },
    ],
    tags: ["Recent", "Perception"],
  },
  {
    slug: "categorical-color-perception",
    year: 2024,
    title:
      "Revisiting Categorical Color Perception in Scatterplots: Sequential, Diverging, and Categorical Palettes",
    authors: [
      { name: "Chin Tseng" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of EG/VGTC European Conference on Visualization (EuroVis) 2024, Odense, Denmark.",
    image: {
      src: "/publications/publication_8.png",
      alt: "Categorical color perception",
    },
    highlight: "Best Short Paper Award (Top 1% submissions) 🏆",
    links: [
      {
        label: "DOI",
        href: "https://diglib.eg.org/items/1f3ab945-36dc-4e43-ac70-5d152cef3dc0",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2404.03787" },
      { label: "EuroVis News", href: "https://event.sdu.dk/eurovis/awards" },
    ],
    tags: ["Best", "Encoding"],
  },
  {
    slug: "clams",
    year: 2024,
    title:
      "CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering",
    authors: [
      { name: "Hyeon Jeon*" },
      { name: "Ghulam Jilani Quadri*", highlight: true },
      { name: "Hyunwook Lee" },
      { name: "Paul Rosen" },
      { name: "Danielle Albers Szafir" },
      { name: "Jinwook Seo" },
    ],
    venue:
      "IEEE Transactions on Visualization & Computer Graphics (Proc. IEEE VIS 2023), 2024.",
    image: { src: "/projects/project_3.png", alt: "CLAMS" },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2308.00284" },
      {
        label: "UNC-News",
        href: "https://cs.unc.edu/news-article/visualab-earns-2-best-paper-honorable-mention-awards-at-ieee-vis/",
      },
      {
        label: "Demo",
        href: "http://clusterambiguity.dev.s3-website.ap-northeast-2.amazonaws.com/",
      },
    ],
    highlight: "Best Paper Honorable Mention (IEEE VIS 2023) 🏆",
    tags: ["Recent", "Best", "Perception", "Variability"],
  },
];

// Selected subset for home page
const selectBySlugs = (slugs: string[]) =>
  slugs
    .map((slug) => publications.find((p) => p.slug === slug))
    .filter((p): p is Publication => Boolean(p));

export const selectedPulications: Publication[] = selectBySlugs([
  "categorical-color-perception",
  "annotation-design-space",
  "clams",
  "task-design-optimized",
  "do-you-see-what-i-see",
  "subitizing-visualization",
  "annotation-survey-2025",
]);
