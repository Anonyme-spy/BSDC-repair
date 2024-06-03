import Service from "../component/Service.jsx";
import './../assets/css/Service.css';
import { Computer, TabletSmartphone } from 'lucide-react';

export default function Services() {
  return (
    <div className="container">
      <section>
        <h3>Our Services</h3>
        <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
        <div className="services-grid">
          {/* the component service need pros [color="1 || 2 || 3",title, text, link, icon={from lucide-react} ] each of them have default value but still need these props for a proper use */}
          <Service color={'2'} title={'Computer'} icon={<Computer />} text={'this is text'} />
          <Service color={'3'} icon={<TabletSmartphone />} title={'Smartphone'} />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </section>
    </div>
  );
}