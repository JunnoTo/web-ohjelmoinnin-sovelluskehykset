import React from 'react';

export default function TopDaily() {
  return <div className="sidebar">

          <div className="toptitle"> Luetuimmat</div>

          <div className="sidebaritem">
              <div className="numbers">1</div>
              <div className="topitemtitle">Sää|</div>
              <div className="topitem">Myrskylle ei näy loppua</div>
          </div>

          <div className="sidebaritem">
              <div className="numbers">2</div>
              <div className="topitemtitle">Korona|</div>
              <div className="topitem">Ei vieläkään ohi</div>
          </div>

          <div className="sidebaritem">
            <div className="numbers">3</div>
            <div className="topitemtitle">Meitsi|</div>
            <div className="topitem">Koodailee verkkosivuja</div>
             </div>
  </div>;
}
