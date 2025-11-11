export type Project = {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  papers: { title: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "High Level Visualization Comprehension",
    description: `High-level Visual comprehension describes the overall knowledge a viewer intuitively gains about the data without explicit cueing or guidance. Our work investigates the high-level patterns people naturally see when encountering a visualization without a guiding task. People's interpretations vary with both the features of the visualization itself and people's backgrounds, specifically their visual literacy, familiarity with graphs and data, and educational and professional backgrounds. Does comprehension reflect the salient statistics and patterns that emerge organically from a particular combination of data and design?`,
    images: [
      { src: "/projects/Poster.png", alt: "Visual Comprehension Project" },
    ],
    papers: [
      {
        title:
          "Quadri and Szafir, Eliciting High-Level Visual Comprehension: A Qualitative Study, IEEE VIS 2022.",
        href: "https://virtual.ieeevis.org/year/2022/poster_v-vis-posters-1034.html",
      },
      {
        title:
          "Quadri et. al, Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension, ACM CHI 2024.",
        href: "https://doi.org/10.1145/3613904.3642813",
      },
      {
        title:
          "Naeinian et. al, Exploring the Hierarchical Nature of Visual Comprehension Through the Lens of Individual Background, IEEE VIS 2024.",
        href: "https://content-staging.ieeevis.org/year/2024/poster_v-vis-posters-1071.html",
      },
    ],
  },
  {
    title: "Quantifying and Modeling Perceptual Variability",
    description: `How do we perceive complex visual information? Is this perception consistent across individuals? What factors shape these differences, and can we quantify them? To address the limitations of human visual perception in data visualization, computational metrics and models offer a path forward. By objectively measuring variability in interpretation (e.g., through cluster separability or other perceptual characteristics), researchers can systematically optimize visualizations for reliability and efficiency.`,
    images: [{ src: "/projects/project_3.png", alt: "Perceptual Variability" }],
    papers: [
      {
        title:
          "Jeon et. al, CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering, IEEE VIS 2024.",
        href: "https://arxiv.org/pdf/2308.00284",
      },
    ],
  },

  {
    title: "Design Optimization & Interactive Data Exploration",
    description: `Our research focuses on optimizing visualization design to enhance user performance on specific analytical tasks, particularly for clustering and pattern identification across various visualization types. We develop frameworks for creating visualizations that are optimized for both tasks and design constraints, moving beyond one-size-fits-all approaches. Our work includes automatic optimization algorithms that determine ideal visualization configurations for identifying patterns in multivariate datasets, spanning from scatterplots to network diagrams, heatmaps, and other complex visual representations. These frameworks help balance competing design goals while providing interactive exploration capabilities that adapt to different analytical needs. By systematically approaching design optimization across the visualization spectrum, we enable more effective data communication and improve user performance in complex analytical scenarios.`,
    images: [{ src: "/projects/cga.png", alt: "Vis Design Optimization" }],
    papers: [
      {
        title:
          "Quadri, Constructing Frameworks for Task-Optimized Visualizations, University of South Florida Dissertation 2021.",
        href: "https://www.proquest.com/docview/2600333411?pq-origsite=gscholar&fromopenview=true&sourcetype=Dissertations%20&%20Theses",
      },
      {
        title:
          "Quadri, Toward Constructing Frameworks for Task- and Design-Optimized Visualizations, IEEE Computer Graphics and Applications (CG&A) 2024.",
        href: "https://ieeexplore.ieee.org/document/10736168",
      },
      {
        title:
          "Quadri et. al, Automatic Scatterplot Design Optimization for Clustering Identification, IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023.",
        href: "https://arxiv.org/pdf/2207.03355",
      },
    ],
  },
  {
    title:
      "Rethinking and Reviewing: A Conceptual Framework for Visualization Effectiveness",
    description: `Most visualization designs and tools are built on decades-old studies and follow-ups but with limited scope. Further, we have progressed the 
    visualization research significantly; however, we still need systematic review work to understand the progress of past studies through a taxonomy and solve the 
    designers' and practitioners' design space problems using a framework. The curated understanding of progress guides us in advancing visualization as a research field. 
    Systematic review provides a window into current knowledge and open research questions. How can we review findings and contextualize the results into taxonomies to understand the research developments and use them as guidance 
    to improve visualization as a technique for data communication applications?`,
    images: [{ src: "/projects/survey.png", alt: "Vis Design Optimization" }],
    papers: [
      {
        title:
          "Ghulam Jilani Quadri and Paul Rosen, 'A Survey of Perception-Based Visualization Studies by Task.' IEEE Transactions on Visualization & Computer Graphics, 2021.",
        href: "https://ieeexplore.ieee.org/document/9492011",
      },
      {
        title:
          "Ghulam Jilani Quadri, and P. Rosen, “You Can’t Publish Replication Studies (and How to Anyways),” In Proceedings of VIS 2019: IEEE Conference on Visualization. Workshop on Vis X Vision, 2019.",
        href: "https://arxiv.org/abs/1908.08893",
      },
    ],
  },
  // {
  //   title: "Exploring Visual Comprehension",
  //   description: `High-level Visual comprehension describes the overall knowledge a viewer intuitively gains about the data without explicit cueing or guidance. Our work investigates the high-level patterns people naturally see when encountering a visualization without a guiding task. People's interpretations vary with both the features of the visualization itself and people's backgrounds, specifically their visual literacy, familiarity with graphs and data, and educational and professional backgrounds. Does comprehension reflect the salient statistics and patterns that emerge organically from a particular combination of data and design?`,
  //   images: [
  //     { src: "/projects/exploring_visual.png", alt: "Vis Design Optimization" },
  //   ],
  //   papers: [
  //     {
  //       title:
  //         "Ghulam Jilani Quadri, Arran Zeyu Wang, Zhehao Wang, Jennifer Adorno, Paul Rosen, and Danielle Albers Szafir 'Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension' (To be appearing) In Proceedings of ACM CHI’ 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
  //       href: "https://arxiv.org/pdf/2402.15605",
  //     },
  //     {
  //       title:
  //         "Ghulam Jilani Quadri and Danielle Albers Szafir, 'Eliciting High-Level Visual Comprehension: A Qualitative Study.' In Posters IEEE VIS, 2022. ",
  //       href: "https://ieeevis.b-cdn.net/vis_2022/posters/v-vis-posters-1034-summary.pdf",
  //     },
  //   ],
  // },
  {
    title: "Constructing a Framework for Task-Optimized Visualization",
    description: `An optimized visualization design renders a graph that would improve data communication and interpretation, leading to better decision-making. However, design guidelines focus on effective visualization design that depends on the visualization types, visual channels used, or specific visual tasks but independently, leading to a significant need to understand the intersection of these factors to create optimized visualizations. A design framework at the intersections of visual encoding and low-level tasks fills the gap between guidelines and application by providing a task-optimized visualization design incorporating optimized design choices supporting better performance at a given task. Our work expands on previous work by developing a framework that investigates the task effectiveness of visualization design as an ensemble of interdependent factors rather than visual elements. How can task-optimize a visualization to incorporate data clarity and allow people to extract salient patterns? How can we utilize these frameworks to provide less ambiguous data presentations, leading to better quality and higher confidence in decision-making? How can we automate visualization design optimization?`,
    images: [
      { src: "/projects/framework.jpeg", alt: "Vis Design Optimization" },
    ],
    papers: [
      {
        title:
          "Ghulam Jilani Quadri, Jeniffer Adorno, Brenton Wiernik, and Paul Rosen, 'Automatic catterplot Design Optimization for Clustering Identification.' IEEE Transactions on Visualization & Computer Graphics, 2023.",
        href: "https://ieeexplore.ieee.org/document/9826389",
      },
      {
        title:
          "Ghulam Jilani Quadri and Paul Rosen, 'Modeling the Influence of Visual Density on Cluster Perception in Scatterplots Using Topology.' IEEE Transactions on Visualization & Computer Graphics, 2021.",
        href: "https://ieeexplore.ieee.org/document/9222295",
      },
    ],
  },
];
