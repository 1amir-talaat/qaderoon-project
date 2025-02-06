import Button from "../Button";
import "./card.css";

function Card(props) {
  return (
    <div className="flex h-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-xl">
      <p className="block overflow-hidden rounded-t-lg">
        <img
          loading="lazy"
          className="card-images rounded-t-lg duration-200 ease-in hover:scale-105"
          src={props.image}
          alt={props.description}
        />
      </p>
      <div className="flex flex-grow flex-col p-5 text-center">
        <h1 className="my-2 mb-3 text-xl break-words">{props.description}</h1>
        {/* Spacer div to push the button to the bottom */}
        <div className="flex-grow"></div>
        <div className="mt-auto flex justify-center">
          <Button className="font-semibold">
            إقرأ المزيد
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
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
