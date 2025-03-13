import fire_shutter from './fire_shutter.jpg'
import floor_mating from './floor_mating.jpg'
import gear_shutter from './gear_shutter.jpg'
import gear_shutter1 from './gear_shutter1.jpg'
import manual_shutter from './manual_shutter.jpg'
import manual_shutter2 from './manual_shutter2.jpg'
import normal_shutter from './normal_shutter.jpg'
import pallywood_table from './pllywood_table.jpg'
import sideAngel_shutter from './sideAngel_shutter.jpg'
import shop_rolling_shutter from './shop_rolling_shutter.webp'
import mall_shutter from './mall_shutter.jpg'
import roof_celing from './roof_ceiling.jpg'
import AluminiumGate from './AluminiumGate.jpg'
import shutter from './shutter.jpg'
import motor_shutter from './motter_shutter.jpg'
import ss_sliding_gate from './ss_sliding_gate.webp'
import shutter_gate from './shutter_gate.jpg'
import home1 from './home1.webp'
import home2 from './home2.webp'
import home3 from './home3.webp'
import aluminium_windows from './aluminium_windows.jpg'
import aluminium_partition from './Aluminium_partition.png'
import ms_sliding_gate from './ms_sliding_gate.png'
import electric_retractable from "./electric_auto_sliding.avif"
import Sliding_Hnager_Door from './sliding_hanger_door.png'
import automatic_barrier from './Automatic_barriar.png'
import Dock_Levelers from './dock_levelers.png'
import Mirror_Senser_Door from './mirror_senser_door.avif'
import electric_board_table from './electric_board_table.jpg'
import MS_Raling from './MS_raling.png'
import SS_Raling from './SS_Raling.png'

export const milestones = [
  {
    id: 1,
    year: "2018",
    title: "Company Founded",
    description: "Our journey began with a simple idea and a passionate team determined to make a difference in the industry."
  },
  {
    id: 2,
    year: "2020",
    title: "First Major Product Launch",
    description: "After months of development and testing, we successfully launched our flagship product to overwhelming market response."
  },
  {
    id: 3,
    year: "2021",
    title: "International Expansion",
    description: "We expanded our operations to Europe and Asia, bringing our solutions to a global audience and establishing key partnerships."
  },
  {
    id: 4,
    year: "2023",
    title: "Innovation Award",
    description: "Our dedication to excellence was recognized with the prestigious Industry Innovation Award, cementing our position as market leaders."
  },
  {
    id: 5,
    year: "2025",
    title: "Sustainable Future Initiative",
    description: "We launched our commitment to sustainability with a comprehensive program to reduce our carbon footprint and promote eco-friendly practices."
  }
];


export const menuItems = [
  {
    title: "Overview",
    options: [
      { label: "Product Features ", link: "/features" },
      { label: "Service", link: "/service" },
      { label: "Milestone", link: "/milestone" },
    ],
  },
  { title: "About Us", link: "/AboutUs" },
  { title: "Products", link: "/product" },
  { title: "Support", link: "/support" },
  { title: "Contact Us", link: "/contact" },
];

export const productData = [
  { _id: '1', name: 'Manual Shutter', speciality: 'Shutter', subCategory: 'Manual Shutters', image: 'https://www.overheaddoors.com/wp-content/uploads/2018/01/Allura-653-Powdercoat-Perforated-brown-2560x1709.jpeg' },
  { _id: '2', name: 'Motorized Shutter', speciality: 'Shutter', subCategory: 'Motorized Shutters', image: fire_shutter },
  { _id: '3', name: 'Gear Rolling Shutter', speciality: 'Shutter', subCategory: 'Gear Rolling Shutters', image: gear_shutter },
  { _id: '4', name: 'Rapid Shutter', speciality: 'Shutter', subCategory: 'Rapid Shutter', image: normal_shutter },
  { _id: '5', name: 'Aluminium Shutter', speciality: 'Shutter', subCategory: 'Aluminium Shutter', image: manual_shutter2 },
  { _id: '6', name: 'Stainless Steel Shutter', speciality: 'Shutter', subCategory: 'Stainless Steel Shutter', image: manual_shutter },
  { _id: '7', name: 'Galvanized Shutter', speciality: 'Shutter', subCategory: 'Galvanized Shutter', image: manual_shutter2 },
  { _id: '8', name: 'Galvalume Shutter', speciality: 'Shutter', subCategory: 'Galvalume Shutter', image: gear_shutter1 },
  { _id: '9', name: 'Color Coated Shutter', speciality: 'Shutter', subCategory: 'Color Coated Shutter', image: shop_rolling_shutter },
  { _id: '10', name: 'Mild Steel Shutter', speciality: 'Shutter', subCategory: 'Mild Steel Shutter', image: sideAngel_shutter },
  { _id: '11', name: 'Grill Rolling Shutter', speciality: 'Shutter', subCategory: 'Grill Rolling Shutter', image: normal_shutter },


  { _id: '12', name: 'Aluminium Partition', speciality: 'Aluminium Section', subCategory: 'Aluminium Partition', image: aluminium_partition },
  { _id: '13', name: 'Aluminium Window', speciality: 'Aluminium Section', subCategory: 'Aluminium Window', image: aluminium_windows },
  { _id: '14', name: 'Aluminium Door', speciality: 'Aluminium Section', subCategory: 'Aluminium Door', image: AluminiumGate },


  { _id: '15', name: 'SS Sliding Gate', speciality: 'Gates & Door', subCategory: 'SS Sliding Gate', image: ss_sliding_gate },
  { _id: '16', name: 'MS Sliding Gate', speciality: 'Gates & Door', subCategory: 'MS Sliding Gate', image: ms_sliding_gate },
  { _id: '17', name: 'Electric Retractable SS Gate', speciality: 'Gates & Door', subCategory: 'Electric Retractable SS Gate', image: electric_retractable },
  { _id: '18', name: 'Fire Resistant Door', speciality: 'Gates & Door', subCategory: 'Fire Resistant Door', image: fire_shutter },
  { _id: '19', name: 'Sliding Hangar Doors', speciality: 'Gates & Door', subCategory: 'Sliding Hangar Doors', image: Sliding_Hnager_Door },
  { _id: '20', name: 'Automatic Barrier', speciality: 'Gates & Door', subCategory: 'Automatic Barrier', image: automatic_barrier },
  { _id: '21', name: 'Dock Levelers', speciality: 'Gates & Door', subCategory: 'Dock Levelers', image: Dock_Levelers },
  { _id: '22', name: 'Mirror Sensor Door', speciality: 'Gates & Door', subCategory: 'Mirror Sensor Door', image: Mirror_Senser_Door },



  { _id: '23', name: 'Roof Ceiling', speciality: 'Roof Product', subCategory: 'Roof Ceiling', image: roof_celing },
  { _id: '24', name: 'Roof Ceiling Light', speciality: 'Roof Product', subCategory: 'Roof Ceiling Light', image: 'https://via.placeholder.com/150' },
  { _id: '25', name: 'Roof PoP', speciality: 'Roof Product', subCategory: 'Roof PoP', image: 'https://via.placeholder.com/150' },


  { _id: '26', name: 'Pllywood Table', speciality: 'Office Work Station', subCategory: 'Pllywood Table', image: pallywood_table },
  { _id: '27', name: 'Comfort Chair', speciality: 'Office Work Station', subCategory: 'Comfort Chair', image: 'https://via.placeholder.com/150' },
  { _id: '28', name: 'Electric Board in Table', speciality: 'Office Work Station', subCategory: 'Electric Board in Table', image: electric_board_table },
  { _id: '29', name: 'Floor Mating', speciality: 'Office Work Station', subCategory: 'Floor Mating', image: floor_mating },


  { _id: '30', name: 'M S Raling', speciality: 'Raling', subCategory: 'M S Raling', image: MS_Raling },
  { _id: '31', name: 'S S Raling', speciality: 'Raling', subCategory: 'S S Raling', image: SS_Raling },


  
];
export const speciality = [
  {
    title: 'Shutter',
    Options: [
      { label: 'Manual Shutters' },
      { label: 'Motorized Shutters' },
      { label: 'Gear Rolling Shutters' },
      { label: 'Rapid Shutter' },
      { label: 'Aluminium Shutter' },
      { label: 'Stainless Steel Shutter', link: '/shutters/motorized' },
      { label: 'Galvanized Shutter', link: '/shutters/manual' },
      { label: 'Galvalume Shutter', link: '/shutters/manual' },
      { label: 'Grill Rolling Shutter', link: '/shutters/motorized' },
      { label: 'Mild Steel Shutter', link: '/shutters/motorized' },
      { label: 'Color Coated Shutter', link: '/shutters/smart' }
    ]
  },
  {
    title: 'Aluminium Section',
    Options: [
      { label: 'Aluminium Partition' },
      { label: 'Aluminium Window' },
      { label: 'Aluminium Door' }
    ]
  },
  {
    title: 'Gates & Door',
    Options: [
      { label: 'SS Sliding Gate', link: '/awnings/retractable' },
      { label: 'MS Sliding Gate', link: '/awnings/fixed' },
      { label: 'Fire Resistant Door', link: '/awnings/retractable' },
      { label: 'Electric Retractable SS Gate', link: '/awnings/retractable' },
      { label: 'Sliding Hangar Doors', link: '/awnings/fixed' },
      { label: 'Automatic Barrier', link: '/awnings/retractable' },
      { label: 'Dock Levelers', link: '/awnings/fixed' },
      { label: 'Mirror Sensor Door', link: '/awnings/freestanding' }
    ]
  },
  {
    title: 'Roof Product',
    Options: [
      { label: 'Roof Ceiling', link: '/awnings/retractable' },
      { label: 'Roof Ceiling Light', link: '/awnings/fixed' },
      { label: 'Roof PoP', link: '/awnings/retractable' }
    ]
  },
  {
    title: 'Office Work Station',
    Options: [
      { label: 'Pllywood Table', link: '/awnings/retractable' },
      { label: 'Comfort Chair', link: '/awnings/fixed' },
      { label: 'Electric Board in Table', link: '/awnings/retractable' },
      { label: 'Floor Mating', link: '/awnings/retractable' }
    ]
  },
  {
    title: 'Raling',
    Options: [
      { label: 'M S Raling', link: '/awnings/retractable' },
      { label: 'S S Raling', link: '/awnings/fixed' }
    ]
  },
];
export const products = [
  {
    id: 1,
    name: "Aluminium Shutter",
    image: shutter
  },
  {
    id: 2,
    name: "Mirror Senser Door",
    image: "https://expertautomationbd.com/wp-content/uploads/2022/05/1.Automatic-Sensor-Sliding-Doorribeng.it_.jpg",
  },
  {
    id: 3,
    name: "Roof Ceiling",
    image: "https://thumbs.dreamstime.com/b/led-light-used-modern-construction-subway-station-airport-railway-station-bus-station-shopping-mall-office-shopping-mall-137112675.jpg",
  },
  {
    id: 4,
    name: "Cabines",
    image: "https://i.pinimg.com/originals/93/6a/3e/936a3e3b8dff4330f2069a235aede6ed.jpg",
  },
  {
    id: 5,
    name: "Nut & Bolt",
    image: "https://th.bing.com/th?id=OPAC.d3XcwuPd4%2fC%2b0A474C474&w=592&h=550&o=5&pid=21.1",
  },
  {
    id: 6,
    name: "Pllywood Table",
    image: "https://th.bing.com/th/id/OIP.7hUJv_4xEVTNhZmLMHqY1QHaEK?rs=1&pid=ImgDetMain",
  }
];
export const product = [
  {
    id: 1,
    name: "Manual Shutter",
    image: shutter_gate
  },
  {
    id: 2,
    name: " Gear Rolling Shutter",
    image: sideAngel_shutter,
  },
  {
    id: 3,
    name: "Motories Rolling Shutter",
    image: "https://tiimg.tistatic.com/fp/1/008/302/painted-surface-mild-steel-automatic-rolling-shutter-with-motorized-831.jpg",
  },
  {
    id: 4,
    name: "M S Sliding Gate",
    image: "https://www.mrmtech.in/wp-content/uploads/2023/02/Mild-Steel-Swing-Gates-MR-MSSG46-1.jpg",
  },
  {
    id: 5,
    name: "Fire Resistant Door",
    image: fire_shutter,
  },
  {
    id: 6,
    name: "M S Raling",
    image: "https://th.bing.com/th/id/OIP.Rvk_Bi34bx-CwZGfxTApGgHaHa?rs=1&pid=ImgDetMain",
  }
];
export const slides = [
  {
    id: 1,
    url: home1,
    alt: "Forest Path",
    title: "Smart Automatic Shutters"
  },
  {
    id: 2,
    url: home2,
    alt: "Mountain Landscape",
    title: "Secure & Stylish Shutters"
  },
  {
    id: 3,
    url: home3,
    alt: "City Skyline",
    title: "Smooth & Secure Sliding Gates"
  },
];
export const images = [
  ss_sliding_gate,
  "https://cpimg.tistatic.com/08605879/b/4/Manual-Rolling-Shutter.jpg",
  mall_shutter,
  motor_shutter
];
export const paragraphs = [
  "where we take pride in offering a wide range of high-quality industrial and commercial solutions designed to meet the evolving needs of businesses. Our company specializes in manufacturing durable and innovative products that enhance security, efficiency, and functionality. Whether you're looking for industrial shutters, sliding gates, or custom office furniture, we have the expertise to deliver superior solutions. Every product we develop is designed to provide long-term value, ensuring your business operates smoothly while maintaining safety and efficiency. Our commitment to excellence drives us to continuously improve and innovate, making us a trusted name in the industry.",
  "One of our key product categories includes industrial shutters, which are essential for securing commercial and industrial spaces. We manufacture various types of shutters, including steel shutters, known for their strength and durability, manual shutters, which offer affordability and ease of use, and motor-operated shutters, which provide effortless control with advanced automation. Additionally, our gear shutters are designed for enhanced safety and smooth operation, while our fire-rated shutters offer critical protection by preventing fire spread in emergency situations. Each of these shutters is crafted using high-quality materials and cutting-edge technology to ensure long-lasting performance, security, and convenience for businesses.",
  "In addition to shutters, we manufacture high-quality sliding gates, which provide a strong, space-saving security solution for commercial and industrial premises. Our fire gates are specially designed to enhance fire safety, helping to contain flames and smoke in case of emergencies. These products play a crucial role in securing properties and ensuring compliance with safety regulations. Our team ensures that every gate we produce meets the highest industry standards, offering seamless operation, strong build quality, and customizable designs to match the unique requirements of our customers."
];