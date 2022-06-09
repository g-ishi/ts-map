// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

// new google.maps.Map(document.getElementById('map'), {
//   center: {
//     lat: 0,
//     lng: 0,
//   },
//   zoom: 1,
// });

import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
const customMap = new CustomMap('map');

customMap.addMarker(user);
