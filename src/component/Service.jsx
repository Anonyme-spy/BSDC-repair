import { AreaChart, ChevronRight } from 'lucide-react'

export default function Service(props) {
  let text = props.text ? props.text : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "            consequat";
  let icon = props.icon ? props.icon : <AreaChart />;
  let title = props.title ? props.title : "Computer Repair";
  let link = props.link ? props.link : "#";
  let color;
  if (props.color === '3') {
    color = 'service3';
  }  else if (props.color === '2') {
    color = 'service2';
  }  else if (!props.color || props.color === '1') {
    color = 'service1';
  }

  return (
    <div className={`service ${color}`}>
      <i>{icon}</i>
      <h4>{title}</h4>
      <p>{text}</p>
      <a href={link} className="cta inline-flex">Book appointment <span><ChevronRight /></span></a>
    </div>
  )
}