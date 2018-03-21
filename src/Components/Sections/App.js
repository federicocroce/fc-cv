import React, { Component } from 'react';
import logo from './fondo.jpg';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the mobile web</h1>
        {/*<amp-img src={logo} layout="flex-item" width="266" height="150"></amp-img>
        <section id="bloque1">
          <amp-img src={logo} layout="flex-item" width="266" height="150"></amp-img>
          <h1>SOY FEDE</h1>
        </section>
        <section id="bloque2">
          <amp-img src={logo} layout="flex-item" width="266" height="150"></amp-img>
          <h1>SOY FEDE</h1>
        </section>
        <section id="bloque3">
          <amp-img src={logo} layout="responsive" width="266" height="150"></amp-img>
          <h1>SOY FEDE</h1>
        </section>*/}
        <amp-img src={logo} layout="flex-item" width="266" height="150"></amp-img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, metus a tristique aliquet, enim nibh efficitur sem, ut iaculis urna justo eu diam. Nullam cursus sapien et sodales posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices posuere cubilia Curae; Suspendisse potenti. Donec vitae ornare risus. Maecenas eleifend ante vel dui laoreet, et porttitor libero rutrum. Nam arcu mi, ullamcorper at risus et, pulvinar ultrices erat. In pellentesque sem vel purus auctor,
  ut venenatis tellus tristique. Phasellus molestie diam orci, nec gravida turpis bibendum ut. Sed sagittis aliquet lorem sed dictum.
</p>
        <amp-fx-flying-carpet height="300px">
          <amp-img src={logo} layout="flex-item" width="3000" height="3000"></amp-img>
        </amp-fx-flying-carpet>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, metus a tristique aliquet, enim nibh efficitur sem, ut iaculis urna justo eu diam. Nullam cursus sapien et sodales posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices posuere cubilia Curae; Suspendisse potenti. Donec vitae ornare risus. Maecenas eleifend ante vel dui laoreet, et porttitor libero rutrum. Nam arcu mi, ullamcorper at risus et, pulvinar ultrices erat. In pellentesque sem vel purus auctor,
  ut venenatis tellus tristique. Phasellus molestie diam orci, nec gravida turpis bibendum ut. Sed sagittis aliquet lorem sed dictum.
</p>
{/*<amp-img src={logo} layout="responsive" width="266" height="150"></amp-img>
<amp-img src={logo} layout="responsive" width="266" height="150"></amp-img>
<amp-img src={logo} layout="responsive" width="266" height="150"></amp-img>
<amp-img src={logo} layout="responsive" width="266" height="150"></amp-img>*/}

      </div>
    );
  }
}

export default App;



