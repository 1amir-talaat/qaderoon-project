import "./contactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="container my-11 mx-auto">
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6">
          تواصل <span className="text-primary relative top-1">معنا</span>
        </h2>
        <iframe
          src={import.meta.env.VITE_Form_Facade_URL}
          width="100%"
          height="1000px"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0">
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default ContactUs;
