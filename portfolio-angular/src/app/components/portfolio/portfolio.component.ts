import { Component } from '@angular/core';

type CourseIcon =
  | 'code'
  | 'coffee'
  | 'function'
  | 'set'
  | 'atom'
  | 'chart'
  | 'database'
  | 'cpu'
  | 'flow'
  | 'circuit'
  | 'currency';

interface Course {
  icon: CourseIcon;
  name: string;
  review: string;
}

interface EducationItem {
  id: number;
  qualification: string;
  institution: string;
  duration: string;
  courses?: Course[];
}

const UCT_COURSES: Course[] = [
  {
    icon: 'code',
    name: 'COMPUTER SCIENCE 1015 / PYTHON',
    review:
      'This course is an introduction to problem solving, algorithm development and programming in the Python language. It includes fundamental programming constructs and abstractions, sorting and searching techniques, and machine representations of data. The practical component covers input/output, conditionals, loops, strings, functions, arrays, lists, dictionaries, recursion, text files and exceptions in Python. Students are taught testing and debugging, as well as sorting and searching algorithms, algorithm complexity and equivalence classes. Number systems, binary arithmetic, Boolean algebra and logic gates are also introduced.'
  },
  {
    icon: 'coffee',
    name: 'COMPUTER SCIENCE 1016 / JAVA',
    review:
      'This course builds on the foundation of CSC1015F, with a focus on object-oriented design and programming in Java, as well as introducing important considerations relating to ethical and professional issues. The Java component of the course covers object-oriented design techniques and UML class diagrams, as well as elementary data structures such as lists, stacks and queues. The practical component includes use of inheritance, polymorphism, interfaces, generics and GUI programming in Java'
  },
  {
    icon: 'function',
    name: 'MATHEMATICS 1004 / CALCULUS I',
    review:
      'The aim of this course is to provide mathematics for applications, particularly in the Life and Earth sciences. The syllabus covers the following topics: Functions and graphs. Straight lines, power functions, polynomials, exponential and logarithmic functions, trigonometric functions (radians). Discrete-time dynamical systems. Stability and equilibria. Rates of change. Limits, derivatives. Maxima and minima. Concavity. Asymptotes and curve sketching. Antiderivatives and integrals. Mathematical modelling. Separable and linear differential equations'
  },
  {
    icon: 'set',
    name: 'INTRODUCTION TO DISCRETE MATHEMATICS',
    review:
      'This course provides a foundation for Computer Science and Applied Statistics. Many areas of Computer Science and Applied Statistics require the ability to work with concepts from discrete structures, which include topics such as set theory, logic, graph theory, and probability theory. '
  },
  {
    icon: 'atom',
    name: 'GENERAL PHYSICS A',
    review:
      'The course includes the following topics: Mechanics: vectors, kinematics, forces, dynamics, momentum, impulse, work, energy, power, collisions, rotation, rotational dynamics, torque, angular momentum, static equilibrium, gravitation. Properties of matter: elasticity, hydrostatics, hydrodynamics. Vibrations and waves: simple harmonic motion, damped oscillations, forced oscillations, resonance, travelling waves, superposition, standing waves, sound waves, sound intensity and Doppler Effect. '
  },
  {
    icon: 'atom',
    name: 'GENERAL PHYSICS B',
    review:
      "The course includes the following topics: Electricity and magnetism: electric charge, electric field, Gauss' law, electric potential, capacitance, current, current density, emf, resistance, resistivity, networks, magnetic field, Biot Savart law, Ampere's law, electromagnetic induction, inductance, alternating currents. Thermal physics: temperature, heat, kinetic theory of gases, first and second laws of thermodynamics. Optics: Geometrical optics, polarization, electromagnetic waves, interference, diffraction. Modern physics: atomic structure, quantum physical phenomena, wave-particle duality, X-rays, elementary nuclear physics, radioactivity. "
  },
  {
    icon: 'chart',
    name: ' INTRODUCTORY STATISTICS',
    review:
      'Topics covered include: exploratory data analysis and summary statistics; probability theory; random variables; probability mass and density functions; Binomial, Poisson, Exponential, Normal and Uniform distributions; sampling distributions; confidence intervals; introduction to hypothesis testing (including tests on means; tabular data and bivariate data); determining sample sizes; simple linear regression and measures of correlation. Students are assessed on their knowledge of the topics covered and their ability to perform simple and appropriate statistical analyses using spreadsheet functions. '
  },
  {
    icon: 'database',
    name: 'COMPUTER SCIENCE 2001 / DATA STRUCTURES AND DATABASES',
    review:
      'This course builds on the first year Computer Science foundation with an emphasis on data storage and manipulation. The course covers abstract data types and assertions, recursive algorithms, tree structures such as AVL and B-trees, graph traversals, minimum spanning trees, sets, hashing and priority queues. An introduction to conceptual modelling, database design and relational database manipulation is included. Practical programming in Java in a Unix environment is an important part of the course'
  },
  {
    icon: 'cpu',
    name: 'COMPUTER SCIENCE 2002 / PARRALEL PROGRAMMNG AND CONCURRECY',
    review:
      'The goal of this course is to complete the basic education of a Computer Scientist. Topics include: mobile application development and interface design, an introduction to computer architecture and concurrent programming. Practical work in Java and in assembler programming are included.'
  },
  {
    icon: 'flow',
    name: 'SYSTEMS ANALYSIS',
    review:
      'This course explores the role of the Systems Analyst in business, different approaches used in the development of information systems, and the various tools and techniques used in the specification of system requirements. It is intended to provide students with an in-depth knowledge of the systems development process, with a particular emphasis on the analysis stage of the life cycle. There is a strong practical component to the course, where students will be taught to understand and use the common tools of object-oriented systems analysis, with a particular focus on UML models. '
  },
  {
    icon: 'circuit',
    name: 'INTRODUCTION TO ELECTRICAL AND ELECTRONIC ENGINEERING',
    review:
      '(a) Introduction to Semiconductor Physics and Diode basics. (b) Diode circuit model, applications and LEDs (c) Introduction to BJTs and basic models (d) BJT amplifier circuit (only focus on common-emitter) (e) Introduction to Op Amps, op-amp ideal and practical models (f) Opamp inverting and non-inverting applications (g) Introduction to FETs, FET analogue applications and a lot more'
  },
  {
    icon: 'currency',
    name: 'FINANCIAL ACCOUNTING',
    review:
      'Financial Accounting is predominantly an applied discipline that is based on broad conceptual principles. The course develops an understanding of the business cycle and decisions; recording financial transactions; reporting financial transactions according to the definitions and recognition criteria as per the conceptual framework; preparation and presentation of basic financial statements; inventory; value-added taxation; reconciliations. '
  }
];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  educationData: EducationItem[] = [
    {
      id: 1,
      qualification: 'BSc Computer Science & Computer Engineering',
      institution: 'University of Cape Town',
      duration: '2019 - 2022',
      courses: UCT_COURSES
    },
    {
      id: 2,
      qualification: 'High School',
      institution: 'Centre of Science and Technology',
      duration: '2014 - 2018'
    }
  ];
}
