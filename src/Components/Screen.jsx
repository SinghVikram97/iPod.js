import React, { Component, useContext } from "react";
import "./Screen.css";
import SideList from "./SideList";
import { Switch, Route, __RouterContext } from "react-router-dom";
import HomePage from "./homePage";
import Songs from "./Songs";
import AllSongs from "./AllSongs";

const Screen = React.forwardRef((prop, ref) => {
  return (
    <div id="screen-container">
      <Switch>
        <Route
          exact
          path="/"
          render={({ location }) => (
            <HomePage
              active={prop.active}
              setListSize={prop.setListSize}
              buttonRef={ref}
              path={location.pathname}
              itemList={["cover flow", "music", "games", "settings"]}
              heading="iPod.js"
            />
          )}
        />
        {/* Use render instead of component to prevent remounting in inline function */}
        <Route
          exact
          path="/music"
          render={({ location }) => (
            <Songs
              active={prop.active}
              setListSize={prop.setListSize}
              buttonRef={ref}
              path={location.pathname}
              itemList={["all songs", "artists", "albums"]}
              heading="Music"
            />
          )}
        />
        <Route path="/all*" render={({ location }) => <AllSongs />} />
      </Switch>
    </div>
  );
});

export default Screen;

// export default class Screen extends Component {
//   render() {
//     console.log(this.refs);
//     return (
//       <div id="screen-container">
//         <Switch>
//           <Route
//             exact
//             path="/"
//             component={() => <HomePage active={this.props.active} />}
//           />
//           <Route exact path="/songs" component={() => <Songs />} />
//         </Switch>
//       </div>
//     );
//   }
// }
