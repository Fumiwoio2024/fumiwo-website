import React from 'react'
import Divider from '../global/Divider'
import { H3, H4, P } from '../global/Typography'
import Image from 'next/image'
import heroImage from '@images/hero-laptop.png'
import { PrimaryButton } from '../global/Buttons'

type TAdvantageFeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const fraudAdvantageFeatureItems: TAdvantageFeatureItem[] = [
  {
    title: "Real-Time Detection",
    description:
      "Identify and stop fraudulent activities as they happen with our real-time monitoring system.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M38 54.125C30.14 54.125 23.75 47.735 23.75 39.875C23.75 32.015 30.14 25.625 38 25.625C45.86 25.625 52.25 32.015 52.25 39.875C52.25 40.49 51.74 41 51.125 41C50.51 41 50 40.49 50 39.875C50 33.26 44.615 27.875 38 27.875C31.385 27.875 26 33.26 26 39.875C26 46.49 31.385 51.875 38 51.875C38.615 51.875 39.125 52.385 39.125 53C39.125 53.615 38.615 54.125 38 54.125Z"
          fill="#011D7B"
        />
        <path
          d="M38 40.625C37.385 40.625 36.875 40.115 36.875 39.5V32C36.875 31.385 37.385 30.875 38 30.875C38.615 30.875 39.125 31.385 39.125 32V39.5C39.125 40.115 38.615 40.625 38 40.625Z"
          fill="#011D7B"
        />
        <path
          d="M42.5 24.125H33.5C32.885 24.125 32.375 23.615 32.375 23C32.375 22.385 32.885 21.875 33.5 21.875H42.5C43.115 21.875 43.625 22.385 43.625 23C43.625 23.615 43.115 24.125 42.5 24.125Z"
          fill="#011D7B"
        />
        <path
          d="M48.5 52.625C47.885 52.625 47.375 52.115 47.375 51.5V45.5C47.375 44.885 47.885 44.375 48.5 44.375C49.115 44.375 49.625 44.885 49.625 45.5V51.5C49.625 52.115 49.115 52.625 48.5 52.625Z"
          fill="#011D7B"
        />
        <path
          d="M44 52.625C43.385 52.625 42.875 52.115 42.875 51.5V45.5C42.875 44.885 43.385 44.375 44 44.375C44.615 44.375 45.125 44.885 45.125 45.5V51.5C45.125 52.115 44.615 52.625 44 52.625Z"
          fill="#011D7B"
        />
      </svg>
    ),
  },
  {
    title: "Behavioral Analysis",
    description:
      "Utilize sophisticated behavioral analytics to detect unusual patterns and anomalies that could indicate fraud.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M37.1916 41.7191C34.2516 41.7191 31.8516 39.3191 31.8516 36.3791C31.8516 33.4391 34.2516 31.0391 37.1916 31.0391C40.1316 31.0391 42.5316 33.4391 42.5316 36.3791C42.5316 39.3191 40.1316 41.7191 37.1916 41.7191ZM37.1916 33.3041C35.4966 33.3041 34.1016 34.6841 34.1016 36.3941C34.1016 38.1041 35.4816 39.4841 37.1916 39.4841C38.9016 39.4841 40.2816 38.1041 40.2816 36.3941C40.2816 34.6841 38.9016 33.3041 37.1916 33.3041Z"
          fill="#011D7B"
        />
        <path
          d="M44.9763 51.4232C44.3613 51.4232 43.8513 50.9132 43.8513 50.2982C43.8513 47.4182 40.8662 45.0781 37.1912 45.0781C33.5162 45.0781 30.5312 47.4182 30.5312 50.2982C30.5312 50.9132 30.0213 51.4232 29.4062 51.4232C28.7912 51.4232 28.2812 50.9132 28.2812 50.2982C28.2812 46.1882 32.2712 42.8281 37.1912 42.8281C42.1112 42.8281 46.1013 46.1732 46.1013 50.2982C46.1013 50.9132 45.5913 51.4232 44.9763 51.4232Z"
          fill="#011D7B"
        />
        <path
          d="M37.25 54.125C28.775 54.125 21.875 47.225 21.875 38.75C21.875 30.275 28.775 23.375 37.25 23.375C39.335 23.375 41.345 23.78 43.235 24.575C43.775 24.8 44.045 25.4 43.865 25.955C43.7 26.45 43.625 26.975 43.625 27.5C43.625 28.385 43.865 29.255 44.33 30.005C44.57 30.425 44.885 30.8 45.245 31.115C46.55 32.3 48.485 32.675 50 32.135C50.555 31.925 51.185 32.21 51.41 32.765C52.22 34.67 52.625 36.695 52.625 38.765C52.625 47.225 45.725 54.125 37.25 54.125ZM37.25 25.625C30.02 25.625 24.125 31.505 24.125 38.75C24.125 45.995 30.02 51.875 37.25 51.875C44.48 51.875 50.375 45.995 50.375 38.75C50.375 37.31 50.135 35.885 49.685 34.52C47.615 34.88 45.35 34.235 43.76 32.78C43.235 32.33 42.77 31.775 42.41 31.16C41.75 30.08 41.39 28.805 41.39 27.5C41.39 27.095 41.42 26.705 41.495 26.315C40.13 25.85 38.705 25.625 37.25 25.625Z"
          fill="#011D7B"
        />
        <path
          d="M49.4911 35C47.3817 35 45.3796 34.2127 43.8244 32.799C43.1987 32.2621 42.6446 31.6 42.2156 30.8663C41.429 29.5779 41 28.0568 41 26.5C41 25.5874 41.143 24.6926 41.429 23.8337C41.8223 22.6169 42.5016 21.4895 43.4132 20.5768C45.0221 18.9305 47.1851 18 49.5089 18C51.9401 18 54.2461 19.0379 55.8191 20.8274C57.2135 22.3842 58 24.3884 58 26.5C58 27.18 57.9106 27.86 57.7319 28.5042C57.5531 29.3095 57.2135 30.1505 56.7487 30.8842C55.7119 32.6379 54.0673 33.9442 52.1367 34.5526C51.3323 34.8568 50.4385 35 49.4911 35ZM49.4911 20.6842C47.9001 20.6842 46.4164 21.3105 45.326 22.4379C44.7003 23.0821 44.2534 23.8157 43.9853 24.6568C43.7886 25.2473 43.6993 25.8737 43.6993 26.5C43.6993 27.5558 43.9853 28.5937 44.5394 29.4884C44.8254 29.9894 45.2008 30.4368 45.6299 30.8126C47.1851 32.2263 49.4911 32.6737 51.2965 32.0295C52.6551 31.6 53.7634 30.7052 54.4784 29.5063C54.8002 28.9874 55.0147 28.4327 55.1399 27.8779C55.265 27.4127 55.3186 26.9653 55.3186 26.5C55.3186 25.0684 54.7823 23.6906 53.817 22.6169C52.7266 21.3821 51.1535 20.6842 49.4911 20.6842Z"
          fill="#011D7B"
        />
        <path d="M46 30.209V28.9961" stroke="#011D7B" stroke-linecap="round" />
        <path d="M49 30.2109V27.7852" stroke="#011D7B" stroke-linecap="round" />
        <path
          d="M51.9961 30.207V26.5625"
          stroke="#011D7B"
          stroke-linecap="round"
        />
        <path
          d="M52 23L51.7305 23.3164C50.2363 25.0625 48.2324 26.2988 46 26.8555"
          stroke="#011D7B"
          stroke-linecap="round"
        />
        <path
          d="M50.2812 23H51.998V24.7109"
          stroke="#011D7B"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Machine Learning Algorithms",
    description:
      "Leverage the power of machine learning to continuously improve fraud detection accuracy and adapt to new fraud tactics.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M37.9992 40.6086C36.8292 40.6086 35.7192 40.1587 34.8642 39.3187C33.7692 38.2237 33.3342 36.6487 33.6942 35.1037C34.0692 33.5287 35.3292 32.2686 36.9042 31.8936C38.4342 31.5186 40.0092 31.9537 41.1192 33.0637C42.2292 34.1737 42.6492 35.7337 42.2892 37.2787C41.9142 38.8537 40.6542 40.1136 39.0792 40.4886C38.7192 40.5636 38.3592 40.6086 37.9992 40.6086ZM37.9992 34.0087C37.8192 34.0087 37.6242 34.0387 37.4442 34.0837C36.6942 34.2637 36.0792 34.8786 35.8992 35.6286C35.7042 36.4086 35.9142 37.1737 36.4692 37.7137C37.0242 38.2687 37.7742 38.4637 38.5692 38.2837C39.3192 38.1037 39.9342 37.4886 40.1142 36.7386C40.3092 35.9586 40.0992 35.1937 39.5442 34.6537C39.1242 34.2337 38.5842 34.0087 37.9992 34.0087Z"
          fill="#011D7B"
        />
        <path
          d="M29.0314 46.955C28.7614 46.955 28.4764 46.85 28.2664 46.655C25.3564 43.955 23.6914 40.145 23.6914 36.185C23.6914 28.295 30.1114 21.875 38.0014 21.875C45.8914 21.875 52.3114 28.295 52.3114 36.185C52.3114 40.175 50.7064 43.865 47.7964 46.61C47.3464 47.03 46.6264 47.015 46.2064 46.565C45.7864 46.115 45.8014 45.395 46.2514 44.975C48.7114 42.665 50.0614 39.56 50.0614 36.2C50.0614 29.555 44.6464 24.14 38.0014 24.14C31.3564 24.14 25.9414 29.555 25.9414 36.2C25.9414 39.59 27.3064 42.71 29.7964 45.02C30.2464 45.44 30.2764 46.16 29.8564 46.61C29.6314 46.835 29.3314 46.955 29.0314 46.955Z"
          fill="#011D7B"
        />
        <path
          d="M44.0012 42.9498C43.7312 42.9498 43.4463 42.8448 43.2363 42.6498C42.7863 42.2298 42.7563 41.5098 43.1913 41.0598C44.4363 39.7398 45.1262 37.9998 45.1262 36.1998C45.1262 32.2698 41.9312 29.0898 38.0162 29.0898C34.1012 29.0898 30.9062 32.2848 30.9062 36.1998C30.9062 38.0148 31.5962 39.7398 32.8412 41.0598C33.2612 41.5098 33.2462 42.2298 32.7962 42.6498C32.3462 43.0698 31.6262 43.0549 31.2062 42.6049C29.5712 40.8649 28.6562 38.5848 28.6562 36.1998C28.6562 31.0398 32.8562 26.8398 38.0162 26.8398C43.1762 26.8398 47.3762 31.0398 47.3762 36.1998C47.3762 38.5848 46.4762 40.8649 44.8262 42.6049C44.6012 42.8299 44.3012 42.9498 44.0012 42.9498Z"
          fill="#011D7B"
        />
        <path
          d="M40.1615 54.1235H35.8565C34.1465 54.1235 32.6315 53.1635 31.8965 51.6335C31.1615 50.1035 31.3565 48.3185 32.4215 46.9835L34.5815 44.2985C35.4215 43.2485 36.6665 42.6484 38.0165 42.6484C39.3665 42.6484 40.6115 43.2485 41.4515 44.2985L43.6115 46.9835C44.6765 48.3185 44.8865 50.1035 44.1365 51.6335C43.3715 53.1635 41.8565 54.1235 40.1615 54.1235ZM36.3215 45.6935L34.1615 48.3784C33.6365 49.0384 33.5315 49.8935 33.9065 50.6435C34.2665 51.4085 35.0015 51.8585 35.8415 51.8585H40.1465C40.9865 51.8585 41.7215 51.4085 42.0815 50.6435C42.4415 49.8785 42.3515 49.0384 41.8265 48.3784L39.6665 45.6935C38.8565 44.6735 37.1465 44.6735 36.3215 45.6935Z"
          fill="#011D7B"
        />
      </svg>
    ),
  },
  {
    title: "Customizable Rules",
    description:
      "Tailor the fraud detection rules to fit your business needs and risk appetite, ensuring maximum protection without disrupting legitimate transactions.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M50.015 48.89C49.73 48.89 49.445 48.785 49.22 48.56L41.795 41.135C41.36 40.7 41.36 39.98 41.795 39.545C42.23 39.11 42.95 39.11 43.385 39.545L50.81 46.97C51.245 47.405 51.245 48.125 50.81 48.56C50.585 48.785 50.3 48.89 50.015 48.89Z"
          fill="#011D7B"
        />
        <path
          d="M35.1652 47.6445C34.0702 47.6445 33.0202 47.2095 32.2552 46.4295L25.8952 40.0695C24.2902 38.4645 24.2902 35.8395 25.8952 34.2345L36.5002 23.6295C38.1052 22.0245 40.7302 22.0245 42.3352 23.6295L48.6952 29.9895C49.4752 30.7695 49.9102 31.8045 49.9102 32.8995C49.9102 33.9945 49.4752 35.0445 48.6952 35.8095L38.0902 46.4145C37.3102 47.2245 36.2752 47.6445 35.1652 47.6445ZM39.4102 24.6795C38.9302 24.6795 38.4502 24.8595 38.0902 25.2345L27.4852 35.8395C26.7502 36.5745 26.7502 37.7595 27.4852 38.4945L33.8452 44.8545C34.5502 45.5595 35.7802 45.5595 36.5002 44.8545L47.1052 34.2495C47.4652 33.8895 47.6602 33.4245 47.6602 32.9295C47.6602 32.4345 47.4652 31.9545 47.1052 31.6095L40.7452 25.2495C40.3702 24.8595 39.8902 24.6795 39.4102 24.6795Z"
          fill="#011D7B"
        />
        <path
          d="M32 52.625H23C22.385 52.625 21.875 52.115 21.875 51.5C21.875 50.885 22.385 50.375 23 50.375H32C32.615 50.375 33.125 50.885 33.125 51.5C33.125 52.115 32.615 52.625 32 52.625Z"
          fill="#011D7B"
        />
        <path
          d="M40.445 43.609C40.16 43.609 39.875 43.504 39.65 43.279L29.045 32.6741C28.61 32.2391 28.61 31.5191 29.045 31.0841C29.48 30.6491 30.2 30.6491 30.635 31.0841L41.24 41.689C41.675 42.124 41.675 42.844 41.24 43.279C41.03 43.504 40.73 43.609 40.445 43.609Z"
          fill="#011D7B"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Receive detailed reports on fraudulent activities, helping you understand and mitigate risks effectively.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M32 38.3008H42.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 44.3008H38.57"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 29H41C44 29 44 27.5 44 26C44 23 42.5 23 41 23H35C33.5 23 32 23 32 26C32 29 33.5 29 35 29Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44 26.0312C48.995 26.3013 51.5 28.1462 51.5 35.0013V44.0012C51.5 50.0012 50 53.0012 42.5 53.0012H33.5C26 53.0012 24.5 50.0012 24.5 44.0012V35.0013C24.5 28.1613 27.005 26.3013 32 26.0312"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const creditScoreAdvantageFeatureItems: TAdvantageFeatureItem[] = [
  {
    title: "Behavioral Scoring Models",
    description:
      "Harness the power of machine learning to analyze patterns in communication, app usage, and location data. Our behavioral scoring models create a detailed profile that accurately reflects the borrower's creditworthiness.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M38 38C42.1421 38 45.5 34.6421 45.5 30.5C45.5 26.3579 42.1421 23 38 23C33.8579 23 30.5 26.3579 30.5 30.5C30.5 34.6421 33.8579 38 38 38Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.1133 53C25.1133 47.195 30.8883 42.5 37.9983 42.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M47.3 52.1C49.951 52.1 52.1 49.951 52.1 47.3C52.1 44.6491 49.951 42.5 47.3 42.5C44.6491 42.5 42.5 44.6491 42.5 47.3C42.5 49.951 44.6491 52.1 47.3 52.1Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53 53L51.5 51.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Risk Analysis",
    description:
      "Spot potential red flags with in-depth risk analysis. Our solution identifies irregular activities and high-risk behaviors, helping lenders mitigate risks effectively.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M40.1455 42.5002H26.6005C23.8705 42.5002 22.1305 39.5752 23.4505 37.1752L26.9455 30.8152L30.2155 24.8602C31.5805 22.3852 35.1505 22.3852 36.5155 24.8602L39.8005 30.8152L41.3755 33.6802L43.2955 37.1752C44.6155 39.5752 42.8755 42.5002 40.1455 42.5002Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53 43.25C53 48.635 48.635 53 43.25 53C37.865 53 33.5 48.635 33.5 43.25C33.5 42.995 33.515 42.755 33.53 42.5H40.145C42.875 42.5 44.615 39.575 43.295 37.175L41.375 33.68C41.975 33.56 42.605 33.5 43.25 33.5C48.635 33.5 53 37.865 53 43.25Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.9339 36L30.3499 34.94H30.1859V36H29.5019V33.192H30.6499C30.8712 33.192 31.0592 33.2307 31.2139 33.308C31.3712 33.3853 31.4886 33.492 31.5659 33.628C31.6432 33.7613 31.6819 33.9107 31.6819 34.076C31.6819 34.2627 31.6286 34.4293 31.5219 34.576C31.4179 34.7227 31.2632 34.8267 31.0579 34.888L31.7059 36H30.9339ZM30.1859 34.456H30.6099C30.7352 34.456 30.8286 34.4253 30.8899 34.364C30.9539 34.3027 30.9859 34.216 30.9859 34.104C30.9859 33.9973 30.9539 33.9133 30.8899 33.852C30.8286 33.7907 30.7352 33.76 30.6099 33.76H30.1859V34.456ZM32.4553 33.536C32.3353 33.536 32.2366 33.5013 32.1593 33.432C32.0846 33.36 32.0473 33.272 32.0473 33.168C32.0473 33.0613 32.0846 32.9733 32.1593 32.904C32.2366 32.832 32.3353 32.796 32.4553 32.796C32.5726 32.796 32.6686 32.832 32.7433 32.904C32.8206 32.9733 32.8593 33.0613 32.8593 33.168C32.8593 33.272 32.8206 33.36 32.7433 33.432C32.6686 33.5013 32.5726 33.536 32.4553 33.536ZM32.7953 33.768V36H32.1113V33.768H32.7953ZM34.199 36.032C34.0043 36.032 33.831 35.9987 33.679 35.932C33.527 35.8653 33.407 35.7747 33.319 35.66C33.231 35.5427 33.1816 35.412 33.171 35.268H33.847C33.855 35.3453 33.891 35.408 33.955 35.456C34.019 35.504 34.0976 35.528 34.191 35.528C34.2763 35.528 34.3416 35.512 34.387 35.48C34.435 35.4453 34.459 35.4013 34.459 35.348C34.459 35.284 34.4256 35.2373 34.359 35.208C34.2923 35.176 34.1843 35.1413 34.035 35.104C33.875 35.0667 33.7416 35.028 33.635 34.988C33.5283 34.9453 33.4363 34.88 33.359 34.792C33.2816 34.7013 33.243 34.58 33.243 34.428C33.243 34.3 33.2776 34.184 33.347 34.08C33.419 33.9733 33.523 33.8893 33.659 33.828C33.7976 33.7667 33.9616 33.736 34.151 33.736C34.431 33.736 34.651 33.8053 34.811 33.944C34.9736 34.0827 35.067 34.2667 35.091 34.496H34.459C34.4483 34.4187 34.4136 34.3573 34.355 34.312C34.299 34.2667 34.2243 34.244 34.131 34.244C34.051 34.244 33.9896 34.26 33.947 34.292C33.9043 34.3213 33.883 34.3627 33.883 34.416C33.883 34.48 33.9163 34.528 33.983 34.56C34.0523 34.592 34.159 34.624 34.303 34.656C34.4683 34.6987 34.603 34.7413 34.707 34.784C34.811 34.824 34.9016 34.8907 34.979 34.984C35.059 35.0747 35.1003 35.1973 35.103 35.352C35.103 35.4827 35.0656 35.6 34.991 35.704C34.919 35.8053 34.8136 35.8853 34.675 35.944C34.539 36.0027 34.3803 36.032 34.199 36.032ZM36.8854 36L36.2054 35.064V36H35.5214V33.04H36.2054V34.676L36.8814 33.768H37.7254L36.7974 34.888L37.7334 36H36.8854Z"
          fill="#011D7B"
        />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage predictive insights to gauge borrowers' likelihood of default, and repayment capabilities. Our solution equips you with the knowledge to understand long-term risks and opportunities.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M30.3203 47.2261V44.1211"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M38 47.2256V41.0156"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M45.6797 47.2245V37.8945"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M45.6803 28.7734L44.9903 29.5834C41.1653 34.0534 36.0353 37.2184 30.3203 38.6434"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M41.2852 28.7734H45.6802V33.1534"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.5 53H42.5C50 53 53 50 53 42.5V33.5C53 26 50 23 42.5 23H33.5C26 23 23 26 23 33.5V42.5C23 50 26 53 33.5 53Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Data Integration",
    description:
      "Integrate our SDK seamlessly with your mobile app to collect real-time data from borrowers' phones. This ensures that the credit scoring process uses up-to-date and relevant information.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M30.5 32H26C24.35 32 23 30.65 23 29V26C23 24.35 24.35 23 26 23H30.5C32.15 23 33.5 24.35 33.5 26V29C33.5 30.65 32.15 32 30.5 32Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 30.5H45.8C44.81 30.5 44 29.69 44 28.7V26.3C44 25.31 44.81 24.5 45.8 24.5H51.2C52.19 24.5 53 25.31 53 26.3V28.7C53 29.69 52.19 30.5 51.2 30.5Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 41.75H45.8C44.81 41.75 44 40.94 44 39.95V37.55C44 36.56 44.81 35.75 45.8 35.75H51.2C52.19 35.75 53 36.56 53 37.55V39.95C53 40.94 52.19 41.75 51.2 41.75Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.5 27.5H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M38.75 27.5V47C38.75 48.65 40.1 50 41.75 50H44" fill="white" />
        <path
          d="M38.75 27.5V47C38.75 48.65 40.1 50 41.75 50H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.75 38.75H44"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.2 53H45.8C44.81 53 44 52.19 44 51.2V48.8C44 47.81 44.81 47 45.8 47H51.2C52.19 47 53 47.81 53 48.8V51.2C53 52.19 52.19 53 51.2 53Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Access detailed reports that provide a holistic view of each borrower's credit profile. Customize these reports to meet your specific needs, making data interpretation straightforward and actionable.",
    icon: (
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="76" height="76" rx="8" fill="#F0F5FF" />
        <path
          d="M32 38.3008H42.5"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 44.3008H38.57"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 29H41C44 29 44 27.5 44 26C44 23 42.5 23 41 23H35C33.5 23 32 23 32 26C32 29 33.5 29 35 29Z"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44 26.0312C48.995 26.3013 51.5 28.1462 51.5 35.0013V44.0012C51.5 50.0012 50 53.0012 42.5 53.0012H33.5C26 53.0012 24.5 50.0012 24.5 44.0012V35.0013C24.5 28.1613 27.005 26.3013 32 26.0312"
          stroke="#011D7B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const AdvantageFeatures2 = ({
  title,
  description,
  icon,
}: TAdvantageFeatureItem) => {
  return (
    <div className="flex min-h-[352px] max-w-sm flex-col items-center rounded-[18px] border p-8">
      <div>{icon}</div>
      <Divider height={28} />
      <h3 className="text-center text-lg font-semibold text-textHeader md:text-xl">
        {title}
      </h3>
      <Divider height={12} />
      <P className="text-center !text-base">{description}</P>
    </div>
  );
};

const MakeDecisions = ({ type }: { type: string }) => {
  const isCreditScoring = type === "credit-risk-score";
  const dataItems = isCreditScoring
    ? creditScoreAdvantageFeatureItems
    : fraudAdvantageFeatureItems;

  return (
    <section className="container mx-auto px-6 pb-32 md:text-center">
      <div className="mx-auto max-w-xl">
        <H4 className="mx-auto max-w-xl md:!leading-[72px]">
          Key <span className="text-primaryGreen">features</span>
        </H4>
        <Divider height={16} />
        <P className="">
          Our cutting-edge credit scoring solution enable you assess your
          borrowers behavior in real time and determine their willingness to
          repay.
        </P>
      </div>
      <Divider height={60} />

      {/* <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center content-center justify-items-center'> */}
      <div className="md: flex flex-wrap justify-center gap-6">
        {dataItems.map((item) => (
          <AdvantageFeatures2
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      <Divider height={62} />

      <PrimaryButton>Start free trial</PrimaryButton>
    </section>
  );
};

export default MakeDecisions