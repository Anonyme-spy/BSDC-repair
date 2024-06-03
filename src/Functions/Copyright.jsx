export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className='bg-gray-800 text-white text-center p-2'>
      <p>© {year} BSDC and Anonyme-spy .All rights reserved.</p>
    </div>
  );
}