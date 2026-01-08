type Sponsor = {
  url: string;
  img: string;
  name: string;
  size: number;
};

const sponsorsGold: Sponsor[] = [
  {
    url: "https://www.44emporium.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/44emporium.png`,
    name: "44EMPORIUM",
    size: 450,
  },
  {
    url: "https://mfdyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/monkeyfinger.png`,
    name: "MonkeyfingeR",
    size: 290,
  },
  {
    url: "https://www.yoyoexpert.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/yoyoexpert.png`,
    name: "YoYoExpert",
    size: 400,
  },
  {
    url: "https://cariboulodge.store/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/clyw.png`,
    name: "Caribou Lodge",
    size: 220,
  },
  {
    url: "http://magicyoyo.cn/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/magicyoyo.png`,
    name: "MagicYoYo",
    size: 400,
  },
  {
    url: "https://www.yoyosam.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/yoyosam.png`,
    name: "YoYoSam",
    size: 310,
  },
  {
    url: "https://www.c3yoyodesign.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/c3yoyodesign.png`,
    name: "C3yoyodesign",
    size: 400,
  },
  {
    url: "https://truearcreturntops.ca/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/TrueArc.png`,
    name: "True Arc Return Tops",
    size: 300,
  },
  {
    url: "https://spintektoys.com",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/spintek.png`,
    name: "SpinTek Toys",
    size: 340,
  },
  {
    url: "https://www.instagram.com/yoyo.calgary/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/yoyocalgary.png`,
    name: "Calgary Yoyo Club",
    size: 280,
  },
  {
    url: "https://www.newbalance.ca/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/newbalance.png`,
    name: "New Balance",
    size: 320,
  },
];

const sponsorsSilver: Sponsor[] = [
  {
    url: "https://www.gsquaredyoyos.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/gsquared.png`,
    name: "G Squared",
    size: 240,
  },
  {
    url: "https://onedropyoyos.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/onedrop.png`,
    name: "OneDrop Yoyos",
    size: 390,
  },
  {
    url: "https://www.layerinfinity.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/layerinfinity.png`,
    name: "Layer Infinity",
    size: 300,
  },
  {
    url: "https://en.yoyostorerewind.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/rewind.png`,
    name: "REWIND",
    size: 300,
  },
  {
    url: "https://www.instagram.com/julyyoyo_official/?hl=en",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/julyyoyo.png`,
    name: "JulyYoYo",
    size: 370,
  },
  {
    url: "https://mk1yoyos.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/mk1.png`,
    name: "Mk1 Yoyos",
    size: 270,
  },
  {
    url: "https://www.motionyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/motionyoyo.png`,
    name: "Motion Yoyo",
    size: 290,
  },
  {
    url: "https://altyoyo.com/",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/2025/sponsors/altyoyo.png`,
    name: "alternatives",
    size: 370,
  },
];

export { sponsorsGold, sponsorsSilver };
export type { Sponsor };
