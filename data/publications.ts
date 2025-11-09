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
      src: "/publications/vs.png",
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
    image: { src: "/publications/dmw.png", alt: "Distortion Image" },
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
      src: "/publications/elc.png",
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
    image: { src: "/publications/daa.png", alt: "Distortion Image" },
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
    image: { src: "/publications/ub.png", alt: "Bias Image" },
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
    image: { src: "/publications/sv.png", alt: "Subitizing teaser" },
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
    image: { src: "/publications/as.png", alt: "Annotation survey" },
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
    image: { src: "/publications/siu.png", alt: "Shape It Up" },
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
      src: "/publications/ads.png",
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
      src: "/publications/osod.png",
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
      src: "/publications/dys.png",
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
    year: 2023,
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
  {
    slug: "exploring-annotation",
    year: 2023,
    title:
      "Exploring Annotation Strategies in Professional Visualizations:Insights from Prominent US News Portals",
    authors: [
      { name: "Md Dilshadur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’23: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2023.",
    image: { src: "/publications/ea.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://osf.io/preprints/osf/fd8zj_v1",
      },
    ],

    tags: [],
  },
  {
    slug: "measuring-categorical",
    year: 2023,
    title: "Measuring Categorical Perception in Color-Coded Scatterplots",
    authors: [
      { name: "Chin Tseng" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Zeyu Wang" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of ACM CHI’ 2023: ACM Conference on Human Factors in Computing Systems, 2023.",
    image: { src: "/publications/mc.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://dl.acm.org/doi/abs/10.1145/3544548.3581416",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/pdf/2303.15583",
      },
      {
        label: "Project Page",
        href: "https://paper.categories.chintseng.com",
      },
    ],

    tags: [],
  },
  {
    slug: "automatic-scatterplot",
    year: 2022,
    title:
      "Automatic Scatterplot Design Optimization for Clustering Identification.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jeniffer Adorno" },
      { name: "Brenton Wiernik" },
      { name: "Paul Rosen" },
    ],
    venue: "IEEE Transactions on Visualization & Computer Graphics, 2022.",
    image: { src: "/publications/ac.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9826389",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2207.03355",
      },
      {
        label: "Project Page",
        href: "https://scatter.projects.jadorno.com",
      },
    ],

    tags: [],
  },
  {
    slug: "qualitative-eval",
    year: 2022,
    title:
      "A Qualitative Evaluation and Taxonomy ofStudent Annotations on Bar Charts",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’22: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2022.",
    image: { src: "/publications/qe.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://osf.io/preprints/osf/e5vfy_v1",
      },
    ],

    tags: [],
  },
  {
    slug: "survey-perception",
    year: 2021,
    title: "A Survey of Perception-Based Visualization Studies by Task.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue: "IEEE Transactions on Visualization & Computer Graphics, 2021.",
    image: { src: "/publications/sp.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9492011",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2107.07477",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/VisPerceptionSurvey/index.html",
      },
    ],

    tags: [],
  },
  {
    slug: "constructing-frameworks",
    year: 2021,
    title: "Constructing Frameworks for Task-Optimized Visualizations.",
    authors: [{ name: "Ghulam Jilani Quadri", highlight: true }],
    venue: "Docotoral Dissertation, University of South Florida, 2021.",
    image: { src: "/publications/ca.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9991011",
      },
      {
        label: "Dissertation Copy Access",
        href: "https://digitalcommons.usf.edu/etd/9213/",
      },
    ],
    highlight: "2022 IEEE VGTC Best Dissertation Award 🏆",
    tags: ["Best"],
  },
  {
    slug: "modeling-influence",
    year: 2020,
    title:
      "Modeling the Influence of Visual Density on Cluster Perception in Scatterplots Using Topology.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/mi.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9222295",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/pdf/2007.13872",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/TopoClusterPerceptionDemo/",
      },
    ],

    tags: [],
  },
  {
    slug: "lineSmooth",
    year: 2020,
    title:
      "LineSmooth: An Analytical Framework for Evaluating the Effectiveness of Smoothing Techniques on Line Charts.",
    authors: [
      { name: "Paul Rosen" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue:
      "Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/line.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9222269",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2007.13882",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/LineSmoothDemo/",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=81VDDnue_24",
      },
    ],

    tags: [],
  },
  {
    slug: "you-cant",
    year: 2019,
    title: "You Can’t Publish Replication Studies (and How to Anyways).",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’19: IEEE Conference on Visualization. Workshop on Vis X Vision, 2019.",
    image: { src: "/publications/yc.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/1908.08893",
      },
    ],

    tags: [],
  },
  {
    slug: "variations-observed",
    year: 2019,
    title:
      "A Case-Study on Variations Observed in Accelerometers Across Devices.",
    authors: [
      { name: "Carlos Alvarado" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jennifer Adorno" },
      { name: "Paul Rosen" },
    ],
    venue: "",
    image: { src: "/publications/vo.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/2207.03350",
      },
    ],

    tags: [],
  },
  {
    slug: "modeling-visual",
    year: 2018,
    title: "Modelling Visual Density in Scatterplot Using Megre Trees.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "Poster at Data Science Colloquium, College of Business Analytics and Information Science, University of South Florida 2018.",
    image: { src: "/publications/mv.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://par.nsf.gov/servlets/purl/10250292",
      },
    ],

    tags: [],
  },
  {
    slug: "make-bone",
    year: 2017,
    title:
      "Make Your Bone Great Again: A Study on Osteoporosis Classification.",
    authors: [
      { name: "Rahul Paul" },
      { name: "Saeed Alhamari" },
      { name: "Sulav Malla" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "In arXiv. 2017.",
    image: { src: "/publications/mb.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/1707.05385",
      },
    ],

    tags: [],
  },
  {
    slug: "multi-spectral",
    year: 2017,
    title:
      "Multi-Spectral Satellite Image Analysis for Feature Identification and Change Detection.",
    authors: [
      { name: "Sulav Malla" },
      { name: "Anwesh Tuladhar" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "IEEE Conference on Visual Analytics Science and Technology (VAST), VAST Challenge, 2017.",
    image: { src: "/publications/ms.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/abstract/document/8585482",
      },
      {
        label: "USF News",
        href: "https://www.usf.edu/ai-cybersecurity-computing/index.aspx",
      },
    ],
    highlight:
      "Honorable Mention Award for Good Facilitation of Single Image Analysis",

    tags: [],
  },
  {
    slug: "visual-analytic",
    year: 2017,
    title:
      "Visual Analytic Design for Characterizing Air-Sampling Sensor Performance and Oeration.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Anwesh Tuladhar" },
      { name: "Sulav Malla" },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/va.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/abstract/document/8585678",
      },
    ],

    tags: [],
  },
  {
    slug: "data-aggregation",
    year: 2017,
    title:
      "Data Aggregation and Visualization Technique for Traﬀic Sensor Data.",
    authors: [
      { name: "Anwesh Tuladhar" },
      { name: "Sulav Malla" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/da.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "",
      },
    ],

    tags: [],
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
