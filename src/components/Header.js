import React from 'react';

const Header = ({ tagline, age }) => (
  <header className="top">
    <h1>
      Pick 
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span> 
      Day
    </h1>
    <h3 className="tagline">
      <span>{ tagline }</span>
    </h3>
  </header>
);

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Pick 
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="the">the</span>
//           </span> 
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header;