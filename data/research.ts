import { ResearchProject } from "../components/ResearchCard";

export const projects: ResearchProject[] = [
  {
    id: "1",
    title: "Constructing a Framework for Task-Optimized Visualization",
    summary:
      "An optimized visualization design renders a graph that would improve data communication and interpretation, leading to better decision-making. However, design guidelines focus on effective visualization design that depends on the visualization types, visual channels used, or specific visual tasks but independently, leading to a significant need to understand the intersection of these factors to create optimized visualizations. A design framework at the intersections of visual encoding and low-level tasks fills the gap between guidelines and application by providing a task-optimized visualization design incorporating optimized design choices supporting better performance at a given task. Our work expands on previous work by developing a framework that investigates the task effectiveness of visualization design as an ensemble of interdependent factors rather than visual elements.",
    images: [
      {
        src: "/research/R1_1.png",
        alt: "R1_1.png",
      },
      {
        src: "/research/R1_2.png",
        alt: "R1_2.png",
      },
    ],
    publications: [
      {
        citation:
          'Ghulam Jilani Quadri, Jeniffer Adorno, Brenton Wiernik, and Paul Rosen, "Automatic Scatterplot Design Optimization for Clustering Identification." IEEE Transactions on Visualization & Computer Graphics, 2023.',
        href: "https://ieeexplore.ieee.org/document/9826389",
      },
      {
        citation:
          'Ghulam Jilani Quadri and Paul Rosen, "Modeling the Influence of Visual Density on Cluster Perception in Scatterplots Using Topology." IEEE Transactions on Visualization & Computer Graphics, 2021.',
        href: "https://ieeexplore.ieee.org/document/9222295",
      },
    ],
  },

  {
    id: "2",
    title: "Exploring Visual Comprehension",
    summary:
      "High-level visual comprehension describes the overall knowledge a viewer intuitively gains about the data without explicit cueing or guidance. Our work investigates the high-level patterns people naturally see when encountering a visualization without a guiding task. People's interpretations vary with both the features of the visualization itself and people's backgrounds, specifically their visual literacy, familiarity with graphs and data, and educational and professional backgrounds. This research explores how comprehension reflects salient statistics and patterns that emerge organically from a particular combination of data and design.",
    images: [
      { src: "/research/R2_1.png", alt: "R2_1.png" },
      {
        src: "/research/R2_2.png",
        alt: "R2_2.png",
      },
    ],
    publications: [
      {
        citation:
          'Ghulam Jilani Quadri, Arran Zeyu Wang, Zhehao Wang, Jennifer Adorno, Paul Rosen, and Danielle Albers Szafir "Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension" (To be appearing) In Proceedings of ACM CHI’ 2024: ACM Conference on Human Factors in Computing Systems, 2024.',
        href: "https://arxiv.org/pdf/2402.15605",
      },
      {
        citation:
          'Ghulam Jilani Quadri and Danielle Albers Szafir, "Eliciting High-Level Visual Comprehension: A Qualitative Study." In Posters IEEE VIS, 2022.',
        href: "https://ieeevis.b-cdn.net/vis_2022/posters/v-vis-posters-1034-summary.pdf",
      },
    ],
  },

  {
    id: "3",
    title:
      "Rethinking and Reviewing: A Conceptual Framework for Visualization Effectiveness",
    summary:
      "Most visualization designs and tools are built on decades-old studies and follow-ups but with limited scope. While visualization research has progressed significantly, there remains a lack of systematic review work that unifies these findings into an organized taxonomy. This work aims to contextualize visualization studies into a design-space framework, bridging past discoveries and future opportunities. A systematic review provides a window into the current knowledge landscape, helping identify gaps and open questions. This curated understanding advances visualization research by guiding designers and practitioners toward evidence-based visual design decisions.",
    images: [
      {
        src: "/research/R3_1.png",
        alt: "R3_1.png",
      },
      {
        src: "/research/R3_2.png",
        alt: "R3_1.png",
      },
    ],
    publications: [
      {
        citation:
          'Ghulam Jilani Quadri and Paul Rosen, "A Survey of Perception-Based Visualization Studies by Task." IEEE Transactions on Visualization & Computer Graphics, 2021.',
        href: "https://ieeexplore.ieee.org/document/9492011",
      },
      {
        citation:
          "Ghulam Jilani Quadri, and P. Rosen, “You Can’t Publish Replication Studies (and How to Anyways),” In Proceedings of VIS 2019: IEEE Conference on Visualization. Workshop on Vis X Vision, 2019.",
        href: "https://arxiv.org/abs/1908.08893",
      },
    ],
  },

  {
    id: "4",
    title:
      "The Visual Analytics Science and Technology (VAST) Challenge – IEEE VIS 2017",
    summary:
      "Reproducibility has been increasingly emphasized by scientific communities to validate experimental conclusions, yet replication studies often struggle for publication due to limited novelty. This position paper discusses strategies to integrate replication studies into novel research contributions, ensuring continued progress in visualization science. We define three methods — re-evaluation, expansion, and specialization — for embedding replication work within new contributions. By doing so, researchers can validate earlier findings while still achieving publication value. This framework encourages transparent, iterative growth of the visualization field through reproducible design and evaluation practices.",
    images: [
      {
        src: "/research/R4_1.png",
        alt: "R4_1.png",
      },
      {
        src: "/research/R4_2.png",
        alt: "R4_2.png",
      },
    ],
    publications: [
      {
        citation:
          "S. Malla, A. Tuladhar, Ghulam Jilani Quadri, and P. Rosen, “Multi-Spectral Satellite Image Analysis for Feature Identification and Change Detection VAST Challenge 2017: Honorable Mention for Good Facilitation of Single Image Analysis,” Proceedings of the IEEE Conference on VAST, October 2017.",
        href: "https://ieeexplore.ieee.org/abstract/document/8585482",
      },
    ],
  },
];
