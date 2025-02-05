import Button from "../Button";
import "./card.css";

function Card(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl h-full flex flex-col">
      <p className="overflow-hidden block rounded-t-lg">
        <img
          loading="lazy"
          className="rounded-t-lg card-images hover:scale-105 ease-in duration-200"
          src={props.image}
          alt={props.description}
        />
      </p>
      <div className="p-5 text-center flex flex-col flex-grow">
        <h1 className="mb-3 text-xl break-words my-2">{props.description}</h1>
        {/* Spacer div to push the button to the bottom */}
        <div className="flex-grow"></div>
        <div className="mt-auto flex justify-center">
          <Button className="font-semibold">
            إقرأ المزيد
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
