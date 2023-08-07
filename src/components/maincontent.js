import Hero from './hero';
import Cardjurusan from './card';
import Card from './card';
import card1 from '../assets/carousel/4.jpg';
import card2 from '../assets/carousel/4.jpg';
import card3 from '../assets/carousel/4.jpg';
import Cardkegiatan from './cardkegiatan';
import kegiatan1 from '../assets/carousel/5.jpg';
const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Jenis Sepatu</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Cardjurusan image={card1} jenis="Yeezy" deskripsi="Sepatu terbaik pada masanya" />
          </div>
          <div className="col-md-4">
            <Cardjurusan image={card2} jenis="Yeezy" deskripsi="Sepatu terbaik pada masanya" />
          </div>
          <div className="col-md-4">
            <Cardjurusan image={card3} jenis="Yeezy" deskripsi="Sepatu terbaik pada masanya" />
          </div>
        </div>
        <div className="row text-center my-5">
          <div className="col-12">
            <h1>Jenis kegiatan</h1>
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan kegiatan={kegiatan1} desc="ini adalah kegiatan 1" />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan kegiatan={kegiatan1} desc="ini adalah kegiatan 1" />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan kegiatan={kegiatan1} desc="ini adalah kegiatan 1" />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan kegiatan={kegiatan1} desc="ini adalah kegiatan 1" />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan kegiatan={kegiatan1} desc="ini adalah kegiatan 1" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default MainContent;
