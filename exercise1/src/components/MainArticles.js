import React from 'react';
import mopo from '../mopo.jpg';
import uimapuku from'../uimapuku.jpg';
export default function MainArticles() {
    console.log(mopo);
  return <div className="articlecontainer">
      <div class="flex-container articles">
        <div class="flex-item article">Päivän tärkein uutinen</div>
        <img class="flex-item articlepic"src={mopo} alt="mopo"></img>
        <div class="flex-item articleinfo">Mulla on mopo<span class="articledata">sininen semmoinen</span></div>
      </div>
      <div class="flex-container articles">
        <div class="flex-item article">Päivän toiseksi tärkein uutinen</div>
        <img class="flex-item articlepic"src={uimapuku} alt="uimapuku"></img>
        <div class="flex-item articleinfo">Tässä mää olin menossa uimaan<span class="articledata">värikkäässä uimapuvussani</span></div>
      </div>
  </div>;
}
