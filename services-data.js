const SERVICES = [
  {
    id: 1,
    name: "Full Shine",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/full-shine.jpg'
  },
  {
    id: 2,
    name: "Utvending Vask",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/utvending-vask.jpg'
  },
  {
    id: 3,
    name: "Innvending Vask",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/invending-vask.jpg'
  },
  {
    id: 4,
    name: "Lakkrens Polering",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/lakkrens-polering.jpg'
  },
  {
    id: 5,
    name: "Aromatek Behandling",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/aromatek-behandling.jpg'
  },
  {
    id: 6,
    name: "Hjulskift",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    image: '/images/hjulskift.jpg'
  }
]

export function getAllServices() {
  return SERVICES;
}

export function getServiceById(id) {
  return SERVICES.find((service) => service.id === id);
}
