import React from 'react';
import ResponsiveAppBar from './template';
import SlideExample from './slide';
import MediaCard from './card'; 
import BasicTable from './table';
import BasicRating from './rating';
import LabelBottomNavigation from './bottom';
import BasicSpeedDial from './dial';
function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SlideExample />
      <MediaCard/>
      <BasicTable/>
      <BasicRating/>
      <LabelBottomNavigation/>
      <BasicSpeedDial/>
    </div>
  );
}

export default App;